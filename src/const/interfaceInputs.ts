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

export interface InterfaceSetNasVolumeAccessControlInput {
  nasVolumeInstanceNo: string;
  serverInstanceNoList?: string[];
  customIpList?: string[];
}
