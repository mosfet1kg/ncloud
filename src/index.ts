import {
  InterfaceAuthParams,
  InterfaceNcloud,
  InterfaceNcloudIaaS,
  InterfaceNcloudPaaS,
} from './const/interface';

import {
  setValues
} from './helpers/store';

import IaaS from './iaas';
import PaaS from './paas';

export class Ncloud implements InterfaceNcloud {
  public IaaS: InterfaceNcloudIaaS;
  public PaaS: InterfaceNcloudPaaS;

  private constructor( authParams: InterfaceAuthParams ) {
    setValues( authParams );

    this.IaaS = new IaaS();
    this.PaaS = new PaaS();
  }

  static createClient ( authParams ) {
    return new Ncloud( authParams );
  }
}

export function createClient( authParams: InterfaceAuthParams ) {
  return Ncloud.createClient( authParams );
}
