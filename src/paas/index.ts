import GeoLocation from './GeoLocation';
import {
  InterfaceAuthParams,
  InterfaceNcloudPaaS,
  InterfaceNcloudPaaSGeoLocation,
} from '../const/interface';
import {
  getValues
} from '../helpers/store';


export default class PaaS implements InterfaceNcloudPaaS {
  private authParams: InterfaceAuthParams;

  constructor() {
    this.authParams = getValues() as any;
  } // end construct

  geoLocation(params?): InterfaceNcloudPaaSGeoLocation {
    return new GeoLocation();
  } // end server
}
