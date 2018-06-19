/** PaaS **/
export interface InterfaceGeoLocationResponse {
  returnCode: number;
  requestId: string;
  geoLocation: {
    country: string;
    code: string;
    r1: string;
    r2: string;
  }
}
