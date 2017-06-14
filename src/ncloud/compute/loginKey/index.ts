import {
  InterfaceRequestInfo,
  InterfaceCallback,
  // alias,
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceCreateLoginKeyInput {
  keyName: string;
}

export interface InterfaceLoginKey {
  findLoginKeys( callback: InterfaceCallback ): void;
  createLoginKey( arg: InterfaceCreateLoginKeyInput, callback: InterfaceCallback ): void;
}

export function findLoginKeys( callback: InterfaceCallback ): void {

  const self = this;

  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: self.requestUrl,
    requestAction: 'getLoginKeyList',
  };

  const queryString: string = self.oauth.getQueryString( {}, paramSet['findLoginKeys'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getLoginKeyListResponse.returnCode !== 0){
      callback( new Error(response.data.getLoginKeyListResponse.returnMessage ), null );
    }else{
      callback( null, response.data.getLoginKeyListResponse.loginKeyList );
    }
  })
  .catch( function(error){
    callback( error.response.data, null );
  })

}

export function createLoginKey( arg: InterfaceCreateLoginKeyInput, callback: InterfaceCallback ){

  this.validator.isBeyondLimit( arg, paramSet['createLoginKey'], (err, result)=>{

    console.log( err, result);
  });


  callback(null, true);
  // const self = this;



  // const requestInfo: InterfaceRequestInfo = {
  //   requestMethod: 'GET',
  //   requestUrl: self.requestUrl,
  //   requestAction: 'createLoginKey',
  // };



  // const queryString: string = self.oauth.getQueryString( {}, paramSet['createLoginKey'], requestInfo );
  //
  // axios.get(
  //   url.resolve( requestInfo.requestUrl, `?${queryString}` )
  // ).then( function(response){
  //
  //   console.log( response );
  //
  // })
  // .catch( function(error){
  //   callback( error.response.data, null );
  // })
}
