import {
  InterfaceAuthParams,
  InterfaceNcloudIaaSServer,
} from '../const/interface';
import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetZoneListResponse,
} from '../const/interfaceResponses';


import fetchClient from '../helpers/fetchClient';

export default class Server implements InterfaceNcloudIaaSServer {
  private authParams: InterfaceAuthParams;

  constructor(
    {
      authParams: authParamsInput,
    }: any) {

    this.authParams = authParamsInput;
  }

  getServerImageProductList: () => Promise<InterfaceGetServerImageProductListResponse>;
  getZoneList: () => Promise<InterfaceGetZoneListResponse>;
}

Server.prototype.getServerImageProductList = function() {
  return fetchClient({
    method: 'GET',
    action: 'getServerImageProductList',
    basePath: '/server/v1/',
    actionParams: {
      // "platformTypeCodeList.0": 'LNX64',
      // "exclusionProductCode": "SPSVRDBAAS000001",
      // productCode: "SPSW0LINUX000046"
      // blockStorageSize: 50,
      // regionNo: "1"
    },
    authParams: this.authParams,
  }).then( response => response.data.getServerImageProductListResponse );
};

Server.prototype.getZoneList = function() {
  return fetchClient({
    method: 'GET',
    action: 'getZoneList',
    basePath: '/server/v1/',
    authParams: this.authParams,
  }).then( response => response.data.getZoneListResponse );
};
