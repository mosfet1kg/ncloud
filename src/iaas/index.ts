import Server from './Server';
import {
  InterfaceAuthParams,
  InterfaceNcloudIaaS,
  InterfaceNcloudIaaSServer,
} from '../const/interface';

export default class IaaS implements InterfaceNcloudIaaS {
  private authParams: InterfaceAuthParams;

  constructor(
    {
      authParams: authParamsInput,
    }: {
      authParams: InterfaceAuthParams,
    }) {

    this.authParams = authParamsInput;
  } // end construct

  server(params?): InterfaceNcloudIaaSServer {
    return new Server(
      {
        authParams: this.authParams,
        ...params,
      });
  } // end server
}
