import {
  alias,
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  setFilterReflect,
  InterfaceFilterReflectReturn,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';

export interface InterfaceSecurityGroup {
  findAccessControlGroups(callback: InterfaceCallback ): void;
  findAccessControlRules( args: { accessControlGroupConfigurationNo: string | number }, callback: InterfaceCallback ): void;
}

export function findAccessControlGroups(callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getAccessControlGroupList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let accessControlGroupList = responseFilter(response.data.getAccessControlGroupListResponse.accessControlGroupList[0], 'accessControlGroup');
      accessControlGroupList = setFilterReflect( alias( accessControlGroupList, paramSet['findAccessControlGroups'].response_alias ) );

      callback(null, accessControlGroupList as any | InterfaceFilterReflectReturn );
    })
    .catch( err=>errorHandling(err, callback));

}

export function findAccessControlRules(args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getAccessControlRuleList',
  };

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let accessControlGroupRules = responseFilter(response.data.getAccessControlRuleListResponse.accessControlRuleList[0], 'accessControlRule');
      accessControlGroupRules = setFilterReflect( alias( accessControlGroupRules, paramSet['findAccessControlRules'].response_alias ) );

      callback(null, accessControlGroupRules as any | InterfaceFilterReflectReturn);
    })
    .catch( err=>errorHandling(err, callback));
}
