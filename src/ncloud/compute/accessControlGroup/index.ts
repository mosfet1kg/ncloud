import {
  InterfaceRequestInfo,
  InterfaceCallback,
  // alias,
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceAccessControlGroup {
  findAccessControlGroup( callback: InterfaceCallback ): void;
}

export function findAccessControlGroup( callback: InterfaceCallback ): void {

  const self = this;

  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: self.requestUrl,
    requestAction: 'getAccessControlGroupList',
  };

  const queryString: string = self.oauth.getQueryString( {}, paramSet['findACG'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getAccessControlGroupListResponse.returnCode !== 0){
      callback( new Error( response.data.getAccessControlGroupListResponse.returnMessage ), null );
    }else{
      callback( null, response.data.getAccessControlGroupListResponse.accessControlGroupList[0].accessControlGroup );
    }
  })
    .catch( function(error){
      callback( error.response.data, null );
    })

}
