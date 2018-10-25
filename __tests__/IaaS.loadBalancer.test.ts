import * as ncloud from '../src'

const {
  accessKey,
  secretKey,
} = require('./env.json');

const client = ncloud.createClient({
  accessKey,
  secretKey,
});

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
      console.log( loadBalancerList.loadBalancerInstanceList[0].loadBalancerName );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });
});

