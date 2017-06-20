import {
  InterfaceOauthKey,
  InterfaceOpenApi,
  InterfaceCompute,
  OpenApi,
  Compute,
} from './ncloud';

export interface InterfaceClient {
  openapi: InterfaceOpenApi;
  compute: InterfaceCompute;
}

export class Ncloud implements InterfaceClient {
  public openapi: InterfaceOpenApi;
  public compute: InterfaceCompute;

  constructor( oauthKey: InterfaceOauthKey ) {
    this.openapi = new OpenApi( oauthKey );
    this.compute = new Compute( oauthKey );
  }

}

export function createClient( oauthKey: InterfaceOauthKey ): InterfaceClient {
  return new Ncloud( oauthKey );
}
