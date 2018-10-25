/** IaaS: Server**/
export interface InterfaceGetZoneListInput {
  regionNo?: string;
}

export interface InterfaceIaaSServerGetServerImageProductListInput {
  platformTypeCodeList?: string[];
  regionNo?: string;
}

export interface InterfaceIaaSServerGetServerProductListInput {
  serverImageProductCode: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceCreateNasVolumeInstanceInput {
  volumeName: string;
  volumeSize: string;
  volumeAllotmentProtocolTypeCode: string;
  serverInstanceNoList?: string[];
  customIpList?: string[];
  cifsUserName?: string;
  cifsUserPassword?: string;
  nasVolumeDescription?: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceDeleteNasVolumeInstanceInput {
  nasVolumeInstanceNo: string;
}

export interface InterfaceGetNasVolumeInstanceListInput {
  volumeAllotmentProtocolTypeCode?: string;
  isEventConfiguration?: boolean;
  isSnapshotConfiguration?: boolean;
}

export interface InterfaceChangeNasVolumeSizeInput {
  nasVolumeInstanceNo: string;
  volumeSize: string;
}

export interface InterfaceGetNasVolumeInstanceRatingListInput {
  nasVolumeInstanceNo: string;
  startTime: string;
  endTime: string;
  interval: string;
}

export interface InterfaceNasVolumeAccessControlInput {
  nasVolumeInstanceNo: string;
  serverInstanceNoList?: string[];
  customIpList?: string[];
}

export interface InterfaceGetLoginKeyListInput {
  keyName?: string;
  pageNo?: number;
  pageSize?: number;
}

export interface InterfaceCreateLoginKeyInput {
  keyName?: string;
}

export interface InterfaceDeleteLoginKeyInput {
  keyName?: string;
}

export interface InterfaceGetAccessControlGroupListInput {
  accessControlGroupConfigurationNoList?: string[];
  isDefaultGroup?: boolean;
  accessControlGroupName?: string;
  pageNo?: number;
}

export interface InterfaceGetAccessControlGroupServerInstanceListInput {
  accessControlGroupConfigurationNo: string;
}

export interface InterfaceGetAccessControlRuleListInput {
  accessControlGroupConfigurationNo: string;
}

export interface InterfaceGetServerInstanceListInput {
  serverInstanceNoList?: string[];
  searchFilterName?: string;
  searchFilterValue?: string;
  pageNo?: number;
  pageSize?: number;
  serverInstanceStatusCode?: string;
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  baseBlockStorageDiskTypeCode?: string;
  baseBlockStorageDiskDetailTypeCode?: string;
  sortedBy?: string;
  sortingOrder?: string;
}

export interface InterfaceCreateServerInstancesInput {
  serverImageProductCode?: string;
  serverProductCode?: string;
  memberServerImageNo?: string;
  serverName?: string;
  serverDescription?: string;
  loginKeyName?: string;
  isProtectServerTermination?: boolean;
  serverCreateCount?: number;
  serverCreateStartNo?: number;
  internetLineTypeCode?: string;
  feeSystemTypeCode?: string;
  zoneNo?: string;
  accessControlGroupConfigurationNoList?: string[];
  userData?: string;
}

export interface InterfaceTerminateServerInstancesInput {
  serverInstanceNoList: string[];
}

export interface InterfaceChangeServerInstanceSpecInput {
  serverInstanceNo: string;
  serverProductCode: string;
}

export interface InterfaceRebootServerInstancesInput {
  serverInstanceNoList: string[];
}

export interface InterfaceStartServerInstancesInput {
  serverInstanceNoList: string[];
}

export interface InterfaceStopServerInstancesInput {
  serverInstanceNoList: string[];
}

export interface InterfaceGetRootPasswordInput {
  serverInstanceNo: string;
  privateKey: string;
}

export interface InterfaceGetMemberServerImageListInput {
  memberServerImageNoList?: string[];
  platformTypeCodeList?: string[];
  regionNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

export interface InterfaceCreateMemberServerImageInput {
  memberServerImageName?: string;
  memberServerImageDescription?: string;
  serverInstanceNo: string;
}

export interface InterfaceDeleteMemberServerImagesInput {
  memberServerImageNoList: string[];
}

export interface InterfaceGetBlockStorageInstanceListInput {
  serverInstanceNo?: string;
  blockStorageInstanceNoList?: string[];
  searchFilterName?: string;
  searchFilterValue?: string;
  blockStorageTypeCodeList?: string[];
  blockStorageInstanceStatusCode?: string;
  diskTypeCode?: string;
  diskDetailTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

export interface InterfaceCreateBlockStorageInstanceInput {
  blockStorageName?: string;
  blockStorageSize: string;
  blockStorageDescription?: string;
  serverInstanceNo: string;
}

export interface InterfaceDeleteBlockStorageInstancesInput {
  blockStorageInstanceNoList: string[];
}

export interface InterfaceGetBlockStorageSnapshotInstanceListInput {
  regionNo?: string;
  pageNo?: number;
  pageSize?: number;
}

export interface InterfaceGetPublicIpInstanceListInput {
  isAssociated?: string;
  publicIpInstanceNoList?: string[];
  publicIpList?: string[];
  searchFilterName?: string;
  searchFilterValue?: string;
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

export interface InterfaceGetPublicIpTargetServerInstanceListInput {
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceCreatePublicIpInstanceInput {
  serverInstanceNo?: string;
  publicIpDescription?: string;
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceAssociatePublicIpWithServerInstanceInput {
  publicIpInstanceNo: string;
  serverInstanceNo: string;
}

export interface InterfaceDisassociatePublicIpFromServerInstanceInput {
  publicIpInstanceNo: string;
}

export interface InterfaceDeletePublicIpInstancesInput {
  publicIpInstanceNoList: string[];
}

export interface InterfaceGetPortForwardingRuleListInput {
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceAddPortForwardingRulesInput {
  portForwardingConfigurationNo: string;
  portForwardingRuleList: {
    serverInstanceNo: string;
    portForwardingExternalPort: string;
    portForwardingInternalPort: string;
  }[];
}

export interface InterfaceDeletePortForwardingRulesInput {
  portForwardingConfigurationNo: string;
  portForwardingRuleList: {
    serverInstanceNo: string;
    portForwardingExternalPort: string;
    portForwardingInternalPort: string;
  }[];
}



