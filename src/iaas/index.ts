import Server from './Server';
import {
  InterfaceAuthParams,
} from '../const/interface';

export default class IaaS {
  private authParams: InterfaceAuthParams;

  constructor(
    {
      authParams: authParamsInput,
    }: {
      authParams: InterfaceAuthParams,
    }) {

    this.authParams = authParamsInput;
  } // end construct

  server(params?) {
    return new Server(
      {
        authParams: this.authParams,
        ...params,
      });
  } // end server
}
