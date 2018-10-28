import GeoLocation from './GeoLocation';

export default class PaaS implements InterfaceNcloudPaaS {
  private store: InterfaceMyStore;
  constructor(
    {
      store,
    }: {
      store: InterfaceMyStore;
    }) {
    this.store = store;
  } // end construct

  geoLocation(): InterfaceNcloudPaaSGeoLocation {
    return GeoLocation.bind(this)();
  } // end server
}
