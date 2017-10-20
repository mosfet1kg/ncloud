import {
  InterfaceCallback,
  InterfaceFetchClientInput,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';
import { isUndefined, isObject, isArray, isFunction, isNull } from 'lodash';

export interface InterfaceServerInstance {
  findServer( args: { serverInstanceNo: string }, callback: InterfaceCallback ): void;
  findServers( callback: InterfaceCallback ): void;
  createServer( args: {
                  vmImageId?: string;
                  vmFlavorId?: string;
                  privateImageNo?: string | number;
                  serverName?: string;
                  serverDescription?: string;
                  loginKeyName?: string;
                  // internetLineTypeCode?: string;
                  feeSystemTypeCode?: string;
                  zoneNo?: string | number;
                  accessControlGroupConfigurationNoList?: string[] | number[];
                  userData?: string;},
                callback: InterfaceCallback ): void;
  destroyServer(    args: { serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  rebuildServer(    args: { serverInstanceNo: string | number, vmFlavorId: string }, callback: InterfaceCallback ): void;
  rebootServer(     args: { serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  startServer(      args: { serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  stopServer(       args: { serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  findRootPassword( args: { serverInstanceNo: string | number, privateKey: string }, callback: InterfaceCallback ): void;
}

export function findServer( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getServerInstanceList',
  };

  args= alias( args, paramSet['findServer'].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.getServerInstanceListResponse.returnCode !== 0){
        callback( new Error(response.data.getServerInstanceListResponse.returnMessage ), null );
      }else{
        const serverInstanceList = responseFilter( response.data.getServerInstanceListResponse.serverInstanceList[0], 'serverInstance' );
        const server = alias( serverInstanceList[0], paramSet['findServer'].response_alias );

        callback( null, setReflect.bind(this)( server ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function findServers( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getServerInstanceList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {

      if( response.data.getServerInstanceListResponse.returnCode !== 0){
        callback( new Error(response.data.getServerInstanceListResponse.returnMessage ), null );
      }else{
        const serverInstanceList = responseFilter( response.data.getServerInstanceListResponse.serverInstanceList[0], 'serverInstance' );

        callback( null, alias( serverInstanceList, paramSet['findServers'].response_alias) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function createServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'createServerInstances',
  };

  if ( args.userData ) {
    args.userData = new Buffer( args.userData ).toString('base64');
  }

  args = alias( args, paramSet[ 'createServer' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.createServerInstancesResponse.returnCode !== 0){
        callback( new Error(response.data.createServerInstancesResponse.returnMessage ), null );
      }else{
        let server = response.data.createServerInstancesResponse.serverInstanceList[0].serverInstance;
        server = alias( server, paramSet['createServer'].response_alias );

        callback( null, setReflect.bind(this)( server ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function destroyServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'terminateServerInstances',
  };

  args = alias( args, paramSet[ 'destroyServer' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.terminateServerInstancesResponse.returnCode !== 0){
        callback( new Error(response.data.terminateServerInstancesResponse.returnMessage ), null );
      }else{
        const result = response.data.terminateServerInstancesResponse.serverInstanceList[0].serverInstance;
        callback( null, alias( result, paramSet['destroyServer'].response_alias ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function rebuildServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'changeServerInstanceSpec',
  };

  args = alias( args, paramSet[ 'rebuildServer' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.changeServerInstanceSpecResponse.returnCode !== 0){
        callback( new Error(response.data.changeServerInstanceSpecResponse.returnMessage ), null );
      }else{
        const result = response.data.changeServerInstanceSpecResponse.serverInstanceList[0].serverInstance;
        callback( null, alias( result, paramSet['rebuildServer'].response_alias ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function rebootServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'rebootServerInstances',
  };

  args = alias( args, paramSet[ 'rebootServer' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.rebootServerInstancesResponse.returnCode !== 0){
        callback( new Error(response.data.rebootServerInstancesResponse.returnMessage ), null );
      }else{
        let server = alias(  response.data.rebootServerInstancesResponse.serverInstanceList[0].serverInstance, paramSet['rebootServer'].response_alias );

        callback( null, setReflect.call( { requestUrl: this.requestUrl, oauth: this.oauth }, server ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function startServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'startServerInstances',
  };

  args = alias( args, paramSet[ 'startServer' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.startServerInstancesResponse.returnCode !== 0){
        callback( new Error(response.data.startServerInstancesResponse.returnMessage ), null );
      }else{
        const result = response.data.startServerInstancesResponse.serverInstanceList[0].serverInstance;
        callback( null, alias( result, paramSet['startServer'].response_alias ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function stopServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'stopServerInstances',
  };

  args = alias( args, paramSet[ 'stopServer' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.stopServerInstancesResponse.returnCode !== 0){
        callback( new Error(response.data.stopServerInstancesResponse.returnMessage ), null );
      }else{
        const result = response.data.stopServerInstancesResponse.serverInstanceList[0].serverInstance;
        callback( null, alias( result, paramSet['stopServer'].response_alias ) );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function findRootPassword( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getRootPassword',
  };

  args.privateKey = args.privateKey + '\n';

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if ( !isUndefined( response.data['com.ncloud.api.server.model.RootPassword']) ) {
        const rootPassword = response.data['com.ncloud.api.server.model.RootPassword']['rootPassword'];
        return callback( null, { rootPassword });
      }

      const rootPassword = getRootPassword( response.data );
      callback( null, { rootPassword });
    })
    .catch( err=>errorHandling(err, callback));

}

function getRootPassword( response ) {
  let result = null;

  if ( !isUndefined( response['rootPassword'] ) ) {
    return response['rootPassword'];
  }

  for( let key of Object.keys(response)  ){
    if ( isObject( response[key] ) && !isFunction( response[key] ) && !isArray( response[key] ) && Object.keys( response[key] ).length>0 ) {
      result = getRootPassword( response[key] );
      if ( !isNull( result ) ) {
        break;
      }
    }
  }

  return result;
}


export interface InterfaceServer {
  serverInstanceNo: number | string,
  serverName: string,
  serverDescription: string,
  cpuCount: number,
  memorySize: number,
  baseBlockStorageSize: number,
  platformType: { code: string, codeName: string },
  loginKeyName: string,
  isFeeChargingMonitoring: boolean,
  publicIp: string,
  privateIp: string,
  serverImageName: string,
  serverInstanceStatus: { code: string, codeName: string },
  serverInstanceOperation: { code: string, codeName: string },
  serverInstanceStatusName: string,
  createDate: string,
  uptime: string,
  vmImageId: string,
  vmFlavorId: string,
  isProtectServerTermination: boolean,
  portForwardingPublicIp: string,
  portForwardingExternalPort: number,
  portForwardingInternalPort: number,
  zone: { zoneNo: number, zoneName: string, zoneDescription: string },
  region: { regionNo: number, regionCode: string, regionName: string },
  baseBlockStorageDiskType: { code: string, codeName: string },
  userData: string
  accessControlGroupList: any[],
  __proto__: any
}

function setWait({ status, interval=5000, timeout=1800000, verbose=false }: { status: string, interval?: number, timeout?: number, verbose?: boolean }, cb ) {
  if ( !status ) {
    return cb( new Error(`Error: \'status\' must be defined.`))
  }

  ((callback, _interval, _status, _timeout, self)=>{
    let watcherTimer = null;
    let timeOutTimer = null;

    watcherTimer = setInterval(()=>{
      findServer.bind(self)({ serverInstanceNo: self.serverInstanceNo }, (err, server)=>{
        if ( err ) {
          clearTimeout( timeOutTimer );
          clearInterval( watcherTimer );
          return callback(err);
        }

        if ( server.serverInstanceStatusName === _status ) {
          clearTimeout( timeOutTimer );
          clearInterval( watcherTimer );
          return callback ( null, server );
        }

        if ( verbose ) {
          console.log({
            serverName: server.serverName,
            serverInstanceStatusName: server.serverInstanceStatusName
          });
        }

      });

    }, _interval );

    timeOutTimer = setTimeout(()=>{
      clearInterval( watcherTimer );
      callback( new Error('Error: Timeout during watching server status.'));
    }, _timeout);

  })(cb, interval, status, timeout, this)

}

function setReflect( server: InterfaceServer ): InterfaceServer {
  server.__proto__ = {
    get ["STATUS"]() {
      return {
        init         : 'init',
        creating     : 'creating',
        settingUp    : 'setting up',
        booting      : 'booting',
        running      : 'running',
        rebooting    : 'rebooting',
        stopped      : 'stopped',
        changingSpec : 'changingSpec',
        shuttingDown : 'shutting down',
        terminating  : 'terminating',
      }
    }
  };

  Reflect.defineProperty( server, "setWait", {
    get: ()=>{
      return setWait.bind({...this, ...server});
    },
    configurable: false,
    enumerable: false
  });

  return server;
}
