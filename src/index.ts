import {
  InterfaceAuthParams,
  InterfaceNcloud,
  InterfaceNcloudIaaS,
  InterfaceNcloudPaaS,
} from './const/interface';

import IaaS from './iaas';
import PaaS from './paas';

export class Ncloud implements InterfaceNcloud {
  public IaaS: InterfaceNcloudIaaS;
  public PaaS: InterfaceNcloudPaaS;

  private constructor( authParams: InterfaceAuthParams ) {
    this.IaaS = new IaaS({ authParams });
    this.PaaS = new PaaS({ authParams });
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
