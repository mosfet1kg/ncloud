import apiDescription from '../helpers/apiDescription';
import generateMethods from '../helpers/generateMethods';
import {
  get,
} from 'lodash';

const GeoLocation: () => InterfaceNcloudPaaSGeoLocation = function () {
  const defaultFn = Object
    .keys( get(apiDescription, 'apis.PaaS.GeoLocation') )
    .reduce((prev, action) => {
      prev = { ...prev, [action]: (input= {}) => {
          return generateMethods({
            actionPath: `apis.PaaS.GeoLocation.${action}`,
            input,
            store: this.store,
          });
        }};
      return prev;
    },      {});

  return {
    ...defaultFn,
  } as InterfaceNcloudPaaSGeoLocation;
};

export default GeoLocation;
