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
