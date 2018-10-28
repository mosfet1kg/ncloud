import Server from './Server';
import LoadBalancer from './LoadBalancer';

export default class IaaS implements InterfaceNcloudIaaS {
  private store: InterfaceMyStore;

  constructor(
    {
      store,
    }: {
      store: InterfaceMyStore;
    }) {
    this.store = store;
  } // end construct

  server(): InterfaceNcloudIaaSServer { //
    return Server.bind(this)();
  } // end server

  loadBalancer(): InterfaceNcloudIaaSLoadBalancer {
    return LoadBalancer.bind(this)();
  }
}
