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
  InterfaceCreateLoginKeyInput,
  InterfaceDeleteLoginKeyInput,
  InterfaceGetAccessControlGroupListInput,
  InterfaceGetAccessControlGroupServerInstanceListInput,
  InterfaceGetAccessControlRuleListInput,
  InterfaceGetServerInstanceListInput,
  InterfaceCreateServerInstancesInput,
  InterfaceTerminateServerInstancesInput,
  InterfaceChangeServerInstanceSpecInput,
  InterfaceRebootServerInstancesInput, InterfaceStartServerInstancesInput, InterfaceStopServerInstancesInput,
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
  InterfaceGetAccessControlGroupListResponse,
  InterfaceGetAccessControlGroupServerInstanceListResponse,
  InterfaceGetAccessControlRuleListResponse,
  InterfaceGetServerInstanceListResponse,
  InterfaceCreateServerInstancesResponse,
  InterfaceStopServerInstancesResponse,
  InterfaceTerminateServerInstancesResponse,
  InterfaceChangeServerInstanceSpecResponse,
  InterfaceRebootServerInstancesResponse, InterfaceStartServerInstancesResponse,
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
  createLoginKey(input: InterfaceCreateLoginKeyInput): Promise<InterfaceCreateLoginKeyResponse>;
  deleteLoginKey(input: InterfaceDeleteLoginKeyInput): Promise<InterfaceDeleteLoginKeyResponse>;
  getAccessControlGroupList(input?: InterfaceGetAccessControlGroupListInput): Promise<InterfaceGetAccessControlGroupListResponse>;
  getAccessControlGroupServerInstanceList(input: InterfaceGetAccessControlGroupServerInstanceListInput): Promise<InterfaceGetAccessControlGroupServerInstanceListResponse>;
  getAccessControlRuleList(input: InterfaceGetAccessControlRuleListInput): Promise<InterfaceGetAccessControlRuleListResponse>
  getServerInstanceList(input?: InterfaceGetServerInstanceListInput): Promise<InterfaceGetServerInstanceListResponse>;
  createServerInstances(input: InterfaceCreateServerInstancesInput): Promise<InterfaceCreateServerInstancesResponse>;
  terminateServerInstances(input: InterfaceTerminateServerInstancesInput): Promise<InterfaceTerminateServerInstancesResponse>;
  changeServerInstanceSpec(input: InterfaceChangeServerInstanceSpecInput): Promise<InterfaceChangeServerInstanceSpecResponse>;
  rebootServerInstances(input: InterfaceRebootServerInstancesInput): Promise<InterfaceRebootServerInstancesResponse>;
  startServerInstances(input: InterfaceStartServerInstancesInput): Promise<InterfaceStartServerInstancesResponse>;
  stopServerInstances(input: InterfaceStopServerInstancesInput): Promise<InterfaceStopServerInstancesResponse>;
}
