import {
  alias,
  InterfaceRequestInfo,
  InterfaceCallback,
  // alias,
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceSecurityGroup {
  findSecurityGroups(callback: InterfaceCallback ): void;
}

export function findSecurityGroups(callback: InterfaceCallback ): void {

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
      callback( null, alias( response.data.getAccessControlGroupListResponse.accessControlGroupList[0].accessControlGroup,
      paramSet[ 'findACG'].response_alias ) );
    }
  })
    .catch( function(error){
      callback( new Error(`Error: returnCode: ${ error.response.data.returnCode}, returnMessage: ${ error.response.data.returnMessage }`), null );
    })

}
