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
