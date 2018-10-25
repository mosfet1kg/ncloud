import Server from './Server';
import LoadBalancer from './LoadBalancer';
import {
  InterfaceAuthParams,
  InterfaceNcloudIaaS,
  InterfaceNcloudIaaSServer,
  InterfaceNcloudIaaSLoadBalancer,
} from '../const/interface';

export default class IaaS implements InterfaceNcloudIaaS {
  private authParams: InterfaceAuthParams;

  constructor() {
  } // end construct

  server(params?): InterfaceNcloudIaaSServer {
    return new Server();
  } // end server

  loadBalancer(params?): InterfaceNcloudIaaSLoadBalancer {
    return new LoadBalancer();
  }
}
