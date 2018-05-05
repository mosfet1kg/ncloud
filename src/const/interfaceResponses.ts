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
  zoneList: {
    zoneNo: string;
    zoneName: string;
    zoneCode: string;
    zoneDescription: string;
    regionNo: string;
  }[]
}
