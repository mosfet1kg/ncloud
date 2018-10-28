import * as ncloud from '../lib'

const {
  accessKey,
  secretKey,
} = require('./env.json');

describe('Test IaaS LoadBalancer Method', function( ){
  beforeAll(function (){
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    console.log('set Interval');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test getLoadBalancerInstanceList', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerList = await loadBalancer.getLoadBalancerInstanceList();
      console.log( loadBalancerList );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });


  test('Test getLoadBalancerTargetServerInstanceList', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerTargetServerInstanceList = await loadBalancer.getLoadBalancerTargetServerInstanceList();
      console.log( loadBalancerTargetServerInstanceList );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test createLoadBalancerInstance', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerTargetServerInstanceList = await loadBalancer.getLoadBalancerTargetServerInstanceList();
      console.log( loadBalancerTargetServerInstanceList );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });
});

