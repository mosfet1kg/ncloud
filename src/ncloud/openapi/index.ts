import {
  InterfaceOauthKey,
  InterfaceGeoLocation,
  GeoLocation
} from '../';

export interface InterfaceOpenApi {
  geolocation: InterfaceGeoLocation;
}
export class OpenApi implements InterfaceOpenApi {
  public geolocation: InterfaceGeoLocation;

  constructor ( oauthKey: InterfaceOauthKey  ) {
    this.geolocation = new GeoLocation( oauthKey );
  }
}

export * from './geolocation';
