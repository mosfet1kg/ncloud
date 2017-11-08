import {
  InterfaceOauthKey,
  InterfaceOpenApi,
  InterfaceCompute,
  InterfaceManagement,
  InterfaceStorage,
  OpenApi,
  Compute,
  Management,
  Storage
} from './ncloud';
export * from './ncloud';

export interface InterfaceClient {
  openapi: InterfaceOpenApi;
  compute: InterfaceCompute;
  management: InterfaceManagement;
  storage: InterfaceStorage;
}

export class Ncloud implements InterfaceClient {
  static baseUrl: string = 'https://api.ncloud.com';

  public openapi: InterfaceOpenApi;
  public compute: InterfaceCompute;
  public management: InterfaceManagement;
  public storage: InterfaceStorage;

  private constructor( oauthKey: InterfaceOauthKey ) {
    this.openapi = new OpenApi( oauthKey );
    this.compute = new Compute( oauthKey );
    this.management = new Management( oauthKey );
    this.storage = new Storage( oauthKey );
  }

  static createClient ( oauthKey: InterfaceOauthKey ): InterfaceClient {
    return new Ncloud(oauthKey);
  }
}

export function createClient(  oauthKey: InterfaceOauthKey ): InterfaceClient {
  return Ncloud.createClient( oauthKey );
}
