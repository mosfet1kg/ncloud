export interface InterfaceRegion {
  regionNo: string; // "1",
  regionCode: string; // "KR",
  regionName: string; // "Korea"
}
export interface InterfaceZone {
  zoneNo: string; // "2",
  zoneName: string; // "KR-1",
  zoneCode: string; // "KR-1",
  zoneDescription: string; // "가산 zone",
  regionNo: string; // "1"
}

export interface InterfaceGetServerImageProductListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  productList: {
    productCode: string; // "SPSVRDBAAS000001",
    productName: string; // "vCPU 2EA, Memory 4GB",
    productType: {
      code: string; // "STAND",
      codeName: string; // "Standard"
    },
    productDescription: string; // "vCPU 2EA, Memory 4GB",
    infraResourceType: {
      code: string; // "DBAAS",
      codeName: string; // "Cloud DB"
    },
    cpuCount: number; // 2,
    memorySize: number; // 4294967296,
    baseBlockStorageSize: number; // 53687091200,
    osInformation: string; // "",
    diskType: {
      code: string; // "NET",
      codeName: string; // "Network Storage"
    },
    addBlockStorageSize: number; // 0
  }[]
}
export interface InterfaceGetServerProductListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  productList: {
    productCode: string; // "SPSVRSTAND000056",
    productName: string; // "vCPU 1EA, Memory 1GB, Disk 50GB",
    productType: {
      code: string; // "MICRO",
      codeName: string; // "Micro Server"
    },
    productDescription: string; // "vCPU 1EA, Memory 1GB, Disk 50GB",
    infraResourceType: {
      code: string; // "SVR",
      codeName: string; // "Server"
    },
    cpuCount: number; // 1,
    memorySize: number; // 1073741824,
    baseBlockStorageSize: number; // 53687091200,
    osInformation: string; //  "",
    diskType: {
      code: string; // "NET",
      codeName: string; // "Network Storage"
    },
    addBlockStorageSize: string; // 0
  }[]
}
export interface InterfaceGetZoneListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  zoneList: InterfaceZone[]
}
export interface InterfaceGetRegionListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  regionList: InterfaceRegion[]
}
export interface InterfaceNasVolumeInstanceListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  nasVolumeInstanceList: {
    nasVolumeInstanceNo: string; // "767717",
    nasVolumeInstanceStatus: {
      code: string; // "CREAT",
      codeName: string; // "NAS create"
    },
    nasVolumeInstanceOperation: {
      code: string; // "NULL",
      codeName: string; // "NAS NULL OP"
    },
    nasVolumeInstanceStatusName: string; // "created",
    createDate: string; // "2018-05-06T02:26:26+0900",
    nasVolumeInstanceDescription: string; // "",
    mountInformation: string; // "10.101.83.37:/n780247_testVol",
    volumeAllotmentProtocolType: {
      code: string; // "NFS",
      codeName: string; // "NFS"
    },
    volumeName: string; // "n780247_testVol",
    volumeTotalSize: number; // 536870912000,
    volumeSize: number; // 536870912000,
    volumeUseSize: number; // 278528,
    volumeUseRatio: number; // 0,
    snapshotVolumeConfigurationRatio: number; // 0,
    snapshotVolumeSize: number; // 0,
    snapshotVolumeUseSize: number; // 0,
    snapshotVolumeUseRatio: number; // 0,
    isSnapshotConfiguration: boolean; // false,
    isEventConfiguration: boolean; // false,
    region: InterfaceRegion,
    zone: InterfaceZone,
    nasVolumeInstanceCustomIpList: any[];  // TODO DECLARE TYPE
    nasVolumeServerInstanceList: any[];
  }[];
}
export interface InterfaceGetNasVolumeInstanceRatingListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  NasVolumeInstanceRatingList: {
    ratingTime: string; // '2018-05-06 13:23:10.101',
    volumeSize: number; // 536870912000,
    volumeUseSize: number; // 278528,
    volumeUseRatio: number; // 0,
    snapshotVolumeSize: number; // 0,
    snapshotVolumeUseSize: number; // 0,
    snapshotVolumeUseRatio: number; // 0
  }[]
}
