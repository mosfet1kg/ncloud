import {
  InterfaceRequestInfo,
  InterfaceCallback,
  alias,
  errorHandling
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceServerInstance {
  findServers( callback: InterfaceCallback ): void;
  createServer( args: {
                  vmImageId?: string;
                  vmFlavorId?: string;
                  privateImageNo?: string | number;
                  serverName?: string;
                  serverDesc?: string;
                  loginKeyName?: string;
                  // internetLineTypeCode?: string;
                  feeSystemTypeCode?: string;
                  zoneNo?: string | number;
                  accessControlGroupConfigurationNoList?: string[] | number[];
                  userData?: string;},
                callback: InterfaceCallback ): void;
}

export function findServers( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getServerInstanceList',
  };

  const queryString: string = this.oauth.getQueryString( {}, paramSet['findServers'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getServerInstanceListResponse.returnCode !== 0){
      callback( new Error(response.data.getServerInstanceListResponse.returnMessage ), null );
    }else{
      callback( null, alias( response.data.getServerInstanceListResponse.serverInstanceList[0].serverInstance, paramSet['findServers'].response_alias) );
    }
  })
    .catch( err=>errorHandling(err, callback));
}

export function createServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'createServerInstances',
  };

  if ( args.userData ) {
    args.userData = new Buffer( args.userData ).toString('base64').replace(/=/g,"");
  }

  args = alias( args, paramSet[ 'createServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, paramSet['createServer'], requestInfo );
  console.log( queryString );
  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.createServerInstancesResponse.returnCode !== 0){
      callback( new Error(response.data.createServerInstancesResponse.returnMessage ), null );
    }else{
      const result = response.data.createServerInstancesResponse.serverInstanceList[0].serverInstance;
      callback( null, alias( result, paramSet['createServer'].response_alias ) );
    }
  })
    .catch( err=>errorHandling(err, callback));
}
