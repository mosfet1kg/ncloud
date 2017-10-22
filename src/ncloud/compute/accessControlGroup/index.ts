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
  findAccessControlRules( args: { accessControlGroupConfigurationNo: string | number }, callback: InterfaceCallback ): void;
}

export function findAccessControlGroup(callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getAccessControlGroupList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let accessControlGroupList = responseFilter(response.data.getAccessControlGroupListResponse.accessControlGroupList[0], 'accessControlGroup');
      accessControlGroupList = alias( accessControlGroupList, paramSet['findAccessControlGroup'].response_alias );

      callback(null, accessControlGroupList);
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
      accessControlGroupRules = alias( accessControlGroupRules, paramSet['findAccessControlRules'].response_alias );

      callback(null, accessControlGroupRules);
    })
    .catch( err=>errorHandling(err, callback));
}
