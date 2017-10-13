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
                  serverDescription?: string;
                  loginKeyName?: string;
                  // internetLineTypeCode?: string;
                  feeSystemTypeCode?: string;
                  zoneNo?: string | number;
                  accessControlGroupConfigurationNoList?: string[] | number[];
                  userData?: string;},
                callback: InterfaceCallback ): void;
  destroyServer( args: { serverInstanceNo: string | number }, callback: InterfaceCallback )
  rebuildServer( args: { serverInstanceNo: string | number, vmFlavorId: string }, callback: InterfaceCallback )
  rebootServer(  args: { serverInstanceNo: string | number }, callback: InterfaceCallback )
  startServer(   args: { serverInstanceNo: string | number }, callback: InterfaceCallback )
  stopServer(    args: { serverInstanceNo: string | number }, callback: InterfaceCallback )
}

export function findServers( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getServerInstanceList',
  };

  const queryString: string = this.oauth.getQueryString( {}, requestInfo );

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
    args.userData = new Buffer( args.userData ).toString('base64');
  }

  args = alias( args, paramSet[ 'createServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

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

export function destroyServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'terminateServerInstances',
  };

  args = alias( args, paramSet[ 'destroyServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

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
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'changeServerInstanceSpec',
  };

  args = alias( args, paramSet[ 'rebuildServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

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
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'rebootServerInstances',
  };

  args = alias( args, paramSet[ 'rebootServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.rebootServerInstancesResponse.returnCode !== 0){
      callback( new Error(response.data.rebootServerInstancesResponse.returnMessage ), null );
    }else{
      const result = response.data.rebootServerInstancesResponse.serverInstanceList[0].serverInstance;
      callback( null, alias( result, paramSet['rebootServer'].response_alias ) );
    }
  })
    .catch( err=>errorHandling(err, callback));
}

export function startServer( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'startServerInstances',
  };

  args = alias( args, paramSet[ 'startServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

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
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'stopServerInstances',
  };

  args = alias( args, paramSet[ 'stopServer' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.stopServerInstancesResponse.returnCode !== 0){
      callback( new Error(response.data.stopServerInstancesResponse.returnMessage ), null );
    }else{
      const result = response.data.stopServerInstancesResponse.serverInstanceList[0].serverInstance;
      callback( null, alias( result, paramSet['stopServer'].response_alias ) );
    }
  })
    .catch( err=>errorHandling(err, callback));
}
