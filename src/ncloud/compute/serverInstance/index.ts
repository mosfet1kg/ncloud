import {
  InterfaceRequestInfo,
  InterfaceCallback,
  // alias,
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceServerInstance {
  findServers( callback: InterfaceCallback ): void;
}

export function findServers( callback: InterfaceCallback ): void {

  const self = this;

  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: self.requestUrl,
    requestAction: 'getServerInstanceList',
  };

  const queryString: string = self.oauth.getQueryString( {}, paramSet['findServers'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getServerInstanceListResponse.returnCode !== 0){
      callback( new Error(response.data.getServerInstanceListResponse.returnMessage ), null );
    }else{
      callback( null, response.data.getServerInstanceListResponse.serverInstanceList[0].serverInstance );
    }
  })
    .catch( function(error){
      callback( error.response.data, null );
    })

}
