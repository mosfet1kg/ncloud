import {
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

  private constructor( inputParams: any ) {
    // TODO: throw errors regarding missing expected parameters.
    // There are no expected values

    setValues( inputParams );

    this.IaaS = new IaaS();
    this.PaaS = new PaaS();
  }

  static createClient ( authParams ) {
    return new Ncloud( authParams );
  }
}

export function createClient( inputParams: any ) {
  return Ncloud.createClient( inputParams );
}
