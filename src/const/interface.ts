import {
  InterfaceIaaSServerGetServerImageProductListInput,
  InterfaceIaaSServerGetServerProductListInput,
} from "./interfaceInputs";
import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetServerProductListResponse,
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
  getServerImageProductList(input: InterfaceIaaSServerGetServerImageProductListInput): Promise<InterfaceGetServerImageProductListResponse>;
  getServerProductList(input: InterfaceIaaSServerGetServerProductListInput): Promise<InterfaceGetServerProductListResponse>;
  getZoneList(): Promise<InterfaceGetZoneListResponse>;
}
