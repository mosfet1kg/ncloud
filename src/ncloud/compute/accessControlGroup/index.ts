import {
  alias,
  InterfaceRequestInfo,
  InterfaceCallback,
  errorHandling
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceSecurityGroup {
  findAccessControlGroup(callback: InterfaceCallback ): void;
}

export function findAccessControlGroup(callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getAccessControlGroupList',
  };

  const queryString: string = this.oauth.getQueryString( {}, requestInfo );

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
    .catch( err=>errorHandling(err, callback));
}
