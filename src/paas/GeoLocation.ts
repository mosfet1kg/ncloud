import {
  InterfaceAuthParams,
  InterfaceNcloudPaaSGeoLocation,
} from '../const/interface';
import apiDescription from "../helpers/apiDescription";
import generateMethods from "../helpers/generateMethods";
import {
  get
} from 'lodash';

export default class GeoLocation implements InterfaceNcloudPaaSGeoLocation {
  constructor() {
    Object
      .keys( get(apiDescription, 'apis.PaaS.GeoLocation') )
      .forEach( action => {
        (GeoLocation as any).prototype[action] = function(input={}) {
          return generateMethods({
            actionPath: `apis.PaaS.GeoLocation.${action}`,
            input,
          });
        };
      });
  } // end constructor

  geoLocation: InterfaceNcloudPaaSGeoLocation['geoLocation'];
}
