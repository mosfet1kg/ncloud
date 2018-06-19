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
  } // end construct

  server(params?): InterfaceNcloudIaaSServer {
    return new Server();
  } // end server
}
