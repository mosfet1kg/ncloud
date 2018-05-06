import {
  InterfaceIaaSServerGetServerImageProductListInput,
  InterfaceIaaSServerGetServerProductListInput,
  InterfaceCreateNasVolumeInstanceInput,
  InterfaceDeleteNasVolumeInstanceInput,
  InterfaceGetNasVolumeInstanceListInput,
  InterfaceChangeNasVolumeSizeInput,
  InterfaceGetNasVolumeInstanceRatingListInput,
  InterfaceNasVolumeAccessControlInput,
  InterfaceGetLoginKeyListInput,
  InterfaceCreateLoginKey,
  InterfaceDeleteLoginKey,
} from "./interfaceInputs";
import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetServerProductListResponse,
  InterfaceGetZoneListResponse,
  InterfaceGetRegionListResponse,
  InterfaceNasVolumeInstanceListResponse,
  InterfaceGetNasVolumeInstanceRatingListResponse,
  InterfaceGetLoginKeyListResponse,
  InterfaceCreateLoginKeyResponse,
  InterfaceDeleteLoginKeyResponse,
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
  changeNasVolumeSize(input: InterfaceChangeNasVolumeSizeInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  getNasVolumeInstanceRatingList(input: InterfaceGetNasVolumeInstanceRatingListInput): Promise<InterfaceGetNasVolumeInstanceRatingListResponse>;
  setNasVolumeAccessControl(input: InterfaceNasVolumeAccessControlInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  addNasVolumeAccessControl(input: InterfaceNasVolumeAccessControlInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  removeNasVolumeAccessControl(input: InterfaceNasVolumeAccessControlInput): Promise<InterfaceNasVolumeInstanceListResponse>;
  getLoginKeyList(input?: InterfaceGetLoginKeyListInput): Promise<InterfaceGetLoginKeyListResponse>;
  createLoginKey(input: InterfaceCreateLoginKey): Promise<InterfaceCreateLoginKeyResponse>;
  deleteLoginKey(input: InterfaceDeleteLoginKey): Promise<InterfaceDeleteLoginKeyResponse>;
}
