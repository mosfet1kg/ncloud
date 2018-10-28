import generateMethods from "../helpers/generateMethods";
import apiDescription from "../helpers/apiDescription";
import{
  get,
} from 'lodash';

const LoadBalancer: () => InterfaceNcloudIaaSLoadBalancer = function() {
  const defaultFn = Object
    .keys(get(apiDescription, 'apis.IaaS.LoadBalancer'))
    .reduce((prev, action) => {
      prev = { ...prev, [ action ]: (input={}) => {
          return generateMethods({
            actionPath: `apis.IaaS.LoadBalancer.${action}`,
            input,
            store: this.store,
          });
        }};
      return prev;
    }, {});

  return {
    ...defaultFn,
  } as InterfaceNcloudIaaSLoadBalancer;
};

export default LoadBalancer;
