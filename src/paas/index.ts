import GeoLocation from './GeoLocation';
import {
  InterfaceAuthParams,
  InterfaceNcloudPaaS,
  InterfaceNcloudPaaSGeoLocation,
} from '../const/interface';

export default class PaaS implements InterfaceNcloudPaaS {
  private authParams: InterfaceAuthParams;

  constructor(
    {
      authParams: authParamsInput,
    }: {
      authParams: InterfaceAuthParams,
    }) {

    this.authParams = authParamsInput;
  } // end construct

  geoLocation(params?): InterfaceNcloudPaaSGeoLocation {
    return new GeoLocation(
      {
        authParams: this.authParams,
        ...params,
      });
  } // end server
}
