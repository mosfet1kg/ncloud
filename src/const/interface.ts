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
  InterfaceRebootServerInstancesInput,
  InterfaceStartServerInstancesInput,
  InterfaceStopServerInstancesInput,
  InterfaceGetRootPasswordInput,
  InterfaceGetMemberServerImageListInput,
  InterfaceCreateMemberServerImageInput,
  InterfaceDeleteMemberServerImagesInput,
  InterfaceGetBlockStorageInstanceListInput,
  InterfaceCreateBlockStorageInstanceInput,
  InterfaceDeleteBlockStorageInstancesInput,
  InterfaceGetBlockStorageSnapshotInstanceListInput,
  InterfaceGetPublicIpInstanceListInput,
  InterfaceGetPublicIpTargetServerInstanceListInput,
  InterfaceCreatePublicIpInstanceInput,
  InterfaceAssociatePublicIpWithServerInstanceInput,
  InterfaceDisassociatePublicIpFromServerInstanceInput,
  InterfaceDeletePublicIpInstancesInput,
  InterfaceGetPortForwardingRuleListInput,
  InterfaceAddPortForwardingRulesInput,
  InterfaceDeletePortForwardingRulesInput,
  InterfaceGetZoneListInput,
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
  InterfaceRebootServerInstancesResponse,
  InterfaceStartServerInstancesResponse,
  InterfaceGetRootPasswordResponse,
  InterfaceGetMemberServerImageListResponse,
  InterfaceCreateMemberServerImageResponse,
  InterfaceDeleteMemberServerImagesResponse,
  InterfaceGetBlockStorageInstanceListResponse,
  InterfaceCreateBlockStorageInstanceResponse,
  InterfaceDeleteBlockStorageInstancesResponse,
  InterfaceGetBlockStorageSnapshotInstanceListResponse,
  InterfaceGeoLocationResponse,
  InterfaceGetPublicIpInstanceListResponse,
  InterfaceGetPublicIpTargetServerInstanceListResponse,
  InterfaceCreatePublicIpInstanceResponse,
  InterfaceAssociatePublicIpWithServerInstanceResponse,
  InterfaceDisassociatePublicIpFromServerInstanceResponse,
  InterfaceDeletePublicIpInstancesResponse,
  InterfaceGetPortForwardingRuleListResponse,
  InterfaceAddPortForwardingRulesResponse, InterfaceDeletePortForwardingRulesResponse,
} from './interfaceResponses';

export interface InterfaceAuthParams {
  accessKey: string;
  secretKey: string;
  apiKey: string;
}

export interface InterfaceNcloud {
  IaaS: InterfaceNcloudIaaS;
  PaaS: InterfaceNcloudPaaS;
}

export interface InterfaceNcloudIaaS {
  server(): InterfaceNcloudIaaSServer;
}

export interface InterfaceNcloudPaaS {
  geoLocation(): InterfaceNcloudPaaSGeoLocation;
}

export interface InterfaceNcloudPaaSGeoLocation {
  geoLocation(input): Promise<InterfaceGeoLocationResponse>;
}

export interface InterfaceNcloudIaaSServer extends InterfaceNcloudIaaSServerCustomMethods {
  getServerImageProductList(input?: InterfaceIaaSServerGetServerImageProductListInput): Promise<InterfaceGetServerImageProductListResponse>;
  getServerProductList(input: InterfaceIaaSServerGetServerProductListInput): Promise<InterfaceGetServerProductListResponse>;
  getZoneList(input?: InterfaceGetZoneListInput): Promise<InterfaceGetZoneListResponse>;
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
  getRootPassword(input: InterfaceGetRootPasswordInput): Promise<InterfaceGetRootPasswordResponse>;
  getMemberServerImageList(input: InterfaceGetMemberServerImageListInput): Promise<InterfaceGetMemberServerImageListResponse>;
  createMemberServerImage(input: InterfaceCreateMemberServerImageInput): Promise<InterfaceCreateMemberServerImageResponse>;
  deleteMemberServerImages(input: InterfaceDeleteMemberServerImagesInput): Promise<InterfaceDeleteMemberServerImagesResponse>;
  getBlockStorageInstanceList(input?: InterfaceGetBlockStorageInstanceListInput): Promise<InterfaceGetBlockStorageInstanceListResponse>;
  createBlockStorageInstance(input: InterfaceCreateBlockStorageInstanceInput): Promise<InterfaceCreateBlockStorageInstanceResponse>;
  deleteBlockStorageInstances(input: InterfaceDeleteBlockStorageInstancesInput): Promise<InterfaceDeleteBlockStorageInstancesResponse>;
  getBlockStorageSnapshotInstanceList(input?: InterfaceGetBlockStorageSnapshotInstanceListInput): Promise<InterfaceGetBlockStorageSnapshotInstanceListResponse>;
  getPublicIpInstanceList(input?: InterfaceGetPublicIpInstanceListInput): Promise<InterfaceGetPublicIpInstanceListResponse>;
  getPublicIpTargetServerInstanceList(input?: InterfaceGetPublicIpTargetServerInstanceListInput): Promise<InterfaceGetPublicIpTargetServerInstanceListResponse>;
  createPublicIpInstance(input?: InterfaceCreatePublicIpInstanceInput): Promise<InterfaceCreatePublicIpInstanceResponse>;
  associatePublicIpWithServerInstance(input: InterfaceAssociatePublicIpWithServerInstanceInput): Promise<InterfaceAssociatePublicIpWithServerInstanceResponse>;
  disassociatePublicIpFromServerInstance(input: InterfaceDisassociatePublicIpFromServerInstanceInput): Promise<InterfaceDisassociatePublicIpFromServerInstanceResponse>;
  deletePublicIpInstances(input: InterfaceDeletePublicIpInstancesInput): Promise<InterfaceDeletePublicIpInstancesResponse>;
  getPortForwardingRuleList(input?: InterfaceGetPortForwardingRuleListInput): Promise<InterfaceGetPortForwardingRuleListResponse>;
  addPortForwardingRules(input: InterfaceAddPortForwardingRulesInput): Promise<InterfaceAddPortForwardingRulesResponse>;
  deletePortForwardingRules(input: InterfaceDeletePortForwardingRulesInput ): Promise<InterfaceDeletePortForwardingRulesResponse>;
}

export interface InterfaceNcloudIaaSServerCustomMethods {
  createVM(): void;
}
