import {
  InterfaceRequestInfo,
  InterfaceCallback,
  // alias,
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceLoginKey {
  findLoginKeys( callback: InterfaceCallback ): void;
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
