import {
  InterfaceOauthKey,
  InterfaceOpenApi,
  InterfaceCompute,
  OpenApi,
  Compute,
} from './ncloud';
export * from './ncloud';

export interface InterfaceClient {
  openapi: InterfaceOpenApi;
  compute: InterfaceCompute;
}

export class Ncloud implements InterfaceClient {
  static baseUrl: string = 'https://api.ncloud.com';
  public openapi: InterfaceOpenApi;
  public compute: InterfaceCompute;

  private constructor( oauthKey: InterfaceOauthKey ) {
    this.openapi = new OpenApi( oauthKey );
    this.compute = new Compute( oauthKey );
  }

  static createClient ( oauthKey: InterfaceOauthKey ): InterfaceClient {
    return new Ncloud(oauthKey);
  }
}

export function createClient(  oauthKey: InterfaceOauthKey ): InterfaceClient {
  return Ncloud.createClient( oauthKey );
}
