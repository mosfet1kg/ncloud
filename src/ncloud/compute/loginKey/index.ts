import {
  InterfaceRequestInfo,
  InterfaceCallback,
  errorHandling
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceLoginKey {
  findLoginKeys( callback: InterfaceCallback ): void;
  createLoginKey( arg: { keyName: string }, callback: InterfaceCallback ): void;
}

export function findLoginKeys( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getLoginKeyList',
  };

  const queryString: string = this.oauth.getQueryString( {}, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getLoginKeyListResponse.returnCode !== 0){
      callback( new Error(response.data.getLoginKeyListResponse.returnMessage ), null );
    }else{
      callback( null, response.data.getLoginKeyListResponse.loginKeyList );
    }
  })
    .catch( err=>errorHandling(err, callback));

}

export function createLoginKey( arg, callback: InterfaceCallback ){
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'createLoginKey',
  };

  const queryString: string = this.oauth
    .getQueryString( arg, paramSet['createLoginKey'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}` ),
  ).then(response => {

    if( response.data.createLoginKeyResponse.returnCode !== 0 ){
      callback( new Error( response.data.createLoginKeyResponse.returnMessage ), null );
    } else {
      callback( null , { privateKey: response.data.createLoginKeyResponse.privateKey } );
    }
  })
    .catch( err=>errorHandling(err, callback));

}
