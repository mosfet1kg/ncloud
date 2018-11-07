import { isNull } from 'lodash';
import MyStore from './helpers/MyStore';

import IaaS from './IaaS';
import PaaS from './PaaS';

export class Ncloud implements InterfaceNcloud {
  private mIaaS: InterfaceNcloudIaaS = null;
  private mPaaS: InterfaceNcloudPaaS = null;
  private store: InterfaceMyStore;

  private constructor(inputParams: any) {
    // TODO: throw errors regarding missing expected parameters.
    this.store = new MyStore(inputParams);
  }

  setConfig(inputParams: any): InterfaceNcloud {
    this.store.setData(inputParams);
    return this;
  }

  get IaaS(): InterfaceNcloudIaaS {
    if (isNull(this.mIaaS)) {
      this.mIaaS = new IaaS({ store: this.store });
    } // end if

    return this.mIaaS;
  }

  get PaaS(): InterfaceNcloudPaaS {
    if (isNull(this.mPaaS)) {
      this.mPaaS = new PaaS({ store: this.store });
    } // end if

    return this.mPaaS;
  }

  static createClient (inputParams) {
    return new Ncloud(inputParams);
  }
}

export function createClient(inputParams: any) {
  return Ncloud.createClient(inputParams);
}
