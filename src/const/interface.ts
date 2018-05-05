import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetZoneListResponse,
} from './interfaceResponses';

export interface InterfaceAuthParams {
  accessKey: string;
  secretKey: string;
  apiKey: string;
}

export interface InterfaceNcloud {
  IaaS: InterfaceNcloudIaaS;
}

export interface InterfaceNcloudIaaS {
  server(): InterfaceNcloudIaaSServer;
}

export interface InterfaceNcloudIaaSServer {
  getServerImageProductList(): Promise<InterfaceGetServerImageProductListResponse>;
  getZoneList(): Promise<InterfaceGetZoneListResponse>;
}
