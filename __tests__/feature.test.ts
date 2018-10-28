import * as path from 'path';
import * as ncloud from '../src';
const {
  accessKey,
  secretKey,
} = require('./env.json');

describe('Test Feature', function() {
  beforeAll(function (){
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    console.log('set Interval');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test feature', ( done ) => {

    const client = ncloud.createClient({
      accessKey,
      secretKey,
    });

    client.IaaS.loadBalancer().getLoadBalancerInstanceList()
    .then((res) => { console.log(res)})

    done();
  });
});
