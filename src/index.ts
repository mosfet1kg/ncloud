// import {
//   InterfaceOauthKey,
//   InterfaceOpenApi,
//   InterfaceCompute,
//   InterfaceManagement,
//   InterfaceStorage,
//   OpenApi,
//   Compute,
//   Management,
//   Storage
// } from './ncloud';
// export * from './ncloud';
import {
  InterfaceAuthParams,
} from './const/interface';

import IaaS from './iaas';

export class Ncloud {
  // public openapi: InterfaceOpenApi;
  // public compute: InterfaceCompute;
  // public management: InterfaceManagement;
  // public storage: InterfaceStorage;
  public IaaS;

  private constructor( authParams: InterfaceAuthParams ) {
    this.IaaS = new IaaS({ authParams });
    // this.openapi = new OpenApi( oauthKey );
    // this.compute = new Compute( oauthKey );
    // this.management = new Management( oauthKey );
    // this.storage = new Storage( oauthKey );
  }

  static createClient ( authParams ) {
    return new Ncloud( authParams );
  }
}

export function createClient( authParams: InterfaceAuthParams ) {
  return Ncloud.createClient( authParams );
}
