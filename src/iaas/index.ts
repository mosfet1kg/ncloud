import Server from './Server';
import {
  InterfaceAuthParams,
  InterfaceNcloudIaaS,
  InterfaceNcloudIaaSServer,
} from '../const/interface';

import {
  getValues
} from '../helpers/store';


export default class IaaS implements InterfaceNcloudIaaS {
  private authParams: InterfaceAuthParams;

  constructor() {
    this.authParams = getValues() as any;
  } // end construct

  server(params?): InterfaceNcloudIaaSServer {
    return new Server(
      {
        authParams: this.authParams,
        ...params,
      });
  } // end server
}
