import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import { filter, isString } from 'lodash';
import paramSet from './paramSet';

export interface InterfacePublicIpInstance {
  findPublicIpInstances( callback: InterfaceCallback ): void;
  createPublicIpInstance(args: { serverInstanceNo?: number | string, publicIpDescription?: string } | InterfaceCallback, callback?: InterfaceCallback ): void;
  attachPublicIpInstance(args: { publicIpInstanceNo: number | string, serverInstanceNo: number | string }, callback: InterfaceCallback ): void;
  detachPublicIpInstance(args: { publicIpInstanceNo: number | string }, callback: InterfaceCallback ): void;
  destroyPublicIpInstance(args: { publicIpInstanceNo: number | string }, callback: InterfaceCallback ): void;
}

export function findPublicIpInstances( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getPublicIpInstanceList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpList = responseFilter(response.data.getPublicIpInstanceListResponse.publicIpInstanceList[0], 'publicIpInstance')
        .map( publicIpInstance=>{
          if ( publicIpInstance.serverInstanceAssociatedWithPublicIp && !isString(publicIpInstance.serverInstanceAssociatedWithPublicIp) ) {
            publicIpInstance.serverInstanceAssociatedWithPublicIp =
              alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['findPublicIpInstances'].response_alias );
          } else {
            delete publicIpInstance['serverInstanceAssociatedWithPublicIp'];
          }
          return publicIpInstance;
        });

      callback( null, setPublicInstancesReflect(publicIpList) );
    })
    .catch( err=>errorHandling(err, callback));
}


export function createPublicIpInstance(args, callback?: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'createPublicIpInstance',
  };

  let fetchClientInputArgs = args;

  if ( arguments.length === 1 ) {
    fetchClientInputArgs = {};
    callback = arguments[0];
  }

  fetchClient( fetchClientInputArgs, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.createPublicIpInstanceResponse.publicIpInstanceList[0].publicIpInstance;

      if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
        publicIpInstance.serverInstanceAssociatedWithPublicIp =
          alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['createPublicIpInstance'].response_alias );
      }

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

export function attachPublicIpInstance( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'associatePublicIpWithServerInstance',
  };

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.associatePublicIpWithServerInstanceResponse.publicIpInstanceList[0].publicIpInstance;

      if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
        publicIpInstance.serverInstanceAssociatedWithPublicIp =
          alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['attachPublicIpInstance'].response_alias );
      }

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

export function detachPublicIpInstance( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'disassociatePublicIpFromServerInstance',
  };

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.disassociatePublicIpFromServerInstanceResponse.publicIpInstanceList[0].publicIpInstance;

      if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
        publicIpInstance.serverInstanceAssociatedWithPublicIp =
          alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['detachPublicIpInstance'].response_alias );
      }

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

export function destroyPublicIpInstance( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'deletePublicIpInstances',
  };

  args = alias( args, paramSet['destroyPublicIpInstance'].request_alias);

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.deletePublicIpInstancesResponse.publicIpInstanceList[0].publicIpInstance;

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

function setPublicInstancesReflect( publicInstanceList ) {

  Reflect.defineProperty( publicInstanceList, 'filter', {
    get: ()=>{
      return function(args: { publicInstanceStatus: string }) {
        if ( ! args ) {
          return publicInstanceList;
        }

        const { publicInstanceStatus } = args;

        if ( !publicInstanceStatus || ( publicInstanceStatus!=='created' && publicInstanceStatus !=='used') ) {
          throw new Error('Invalid Argument: \'publicInstanceStatus\' must be in argument and either \'created\' or \'used\'.')
        }

        return filter( publicInstanceList, ( publicInstance ) => {
          return (publicInstance.publicIpInstanceStatusName === publicInstanceStatus);
        })
      }
    }
  });

  return publicInstanceList;
}
