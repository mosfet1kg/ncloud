import generateMethods from "../helpers/generateMethods";
import apiDescription from "../helpers/apiDescription";
import {
  InterfaceNcloudIaaSLoadBalancer,
} from '../const/interface';
import{
  get,
} from 'lodash';

export default class LoadBalancer implements InterfaceNcloudIaaSLoadBalancer {
  constructor() {
    Object
      .keys(get(apiDescription, 'apis.IaaS.LoadBalancer'))
      .forEach(action => {
        (LoadBalancer as any).prototype[action] = function (input = {}) {
          return generateMethods({
            actionPath: `apis.IaaS.LoadBalancer.${action}`,
            input,
          });
        };
      });
  } // end constructor

  getLoadBalancerInstanceList: InterfaceNcloudIaaSLoadBalancer['getLoadBalancerInstanceList'];
}
