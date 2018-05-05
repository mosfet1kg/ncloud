import {
  InterfaceIaaSServerGetServerImageProductList
} from "./interfaceInput";
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
  getServerImageProductList(input: InterfaceIaaSServerGetServerImageProductList): Promise<InterfaceGetServerImageProductListResponse>;
  getZoneList(): Promise<InterfaceGetZoneListResponse>;
}
