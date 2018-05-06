import {
  InterfaceIaaSServerGetServerImageProductListInput,
  InterfaceIaaSServerGetServerProductListInput,
  InterfaceCreateNasVolumeInstanceInput,
  InterfaceDeleteNasVolumeInstanceInput,
  InterfaceGetNasVolumeInstanceListInput,
  InterfaceChangeNasVolumeSize,
} from "./interfaceInputs";
import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetServerProductListResponse,
  InterfaceGetZoneListResponse,
  InterfaceGetRegionListResponse,
  InterfaceNasVolumeInstanceListResponse,
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
  getServerImageProductList(input?: InterfaceIaaSServerGetServerImageProductListInput): Promise<InterfaceGetServerImageProductListResponse>;
  getServerProductList(input: InterfaceIaaSServerGetServerProductListInput): Promise<InterfaceGetServerProductListResponse>;
  getZoneList(): Promise<InterfaceGetZoneListResponse>;
  getRegionList(): Promise<InterfaceGetRegionListResponse>;
  createNasVolumeInstance(input: InterfaceCreateNasVolumeInstanceInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  deleteNasVolumeInstance(input: InterfaceDeleteNasVolumeInstanceInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  getNasVolumeInstanceList(input?: InterfaceGetNasVolumeInstanceListInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  changeNasVolumeSize(input: InterfaceChangeNasVolumeSize): Promise<InterfaceNasVolumeInstanceListResponse>;
}
