import {
  InterfaceAuthParams,
} from "../const/interface";
import fetchClient from '../helpers/fetchClient';

export default class Server {
  private authParams: InterfaceAuthParams;

  constructor(
    {
      authParams: authParamsInput,
    }: any) {

    this.authParams = authParamsInput;
  }

  getServerImageProductList(): Promise<
    {
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
        addBlockStroageSize: number; // 0  // TODO 오타 수정
      }[]
    }> {
    return fetchClient({
      method: 'GET',
      action: 'getServerImageProductList',
      basePath: '/server/v1/',
      actionParams: {
        // infraResourceTypeCode: "SVR",
        "platformTypeCodeList.0": 'LNX64',
        "platformTypeCodeList.1": 'LNX64',
        "platformTypeCodeList.2": 'LNX64',
        // "exclusionProductCode": "SPSVRDBAAS000001",
        // productCode: "SPSW0LINUX000046"
        // blockStorageSize: 50,
        // regionNo: "1"
      },
      authParams: this.authParams,
    }).then( response => response.data.getServerImageProductListResponse );
  }

  getZoneList(): Promise<
    {
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
    }> {
    return fetchClient({
      method: 'GET',
      action: 'getZoneList',
      basePath: '/server/v1/',
      authParams: this.authParams,
    }).then( response => response.data.getZoneListResponse );
  }
}
