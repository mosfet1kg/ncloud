import {
  alias,
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';

export interface InterfaceSecurityGroup {
  findAccessControlGroup(callback: InterfaceCallback ): void;
}

export function findAccessControlGroup(callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getAccessControlGroupList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.getAccessControlGroupListResponse.returnCode !== 0){
        callback( new Error( response.data.getAccessControlGroupListResponse.returnMessage ), null );
      }else {
        const accessControlGroupList = responseFilter(response.data.getAccessControlGroupListResponse.accessControlGroupList[0], 'accessControlGroup');

        callback(null,
          alias(
            accessControlGroupList,
            paramSet['findACG'].response_alias
          ));
      }
    })
    .catch( err=>errorHandling(err, callback));

}
