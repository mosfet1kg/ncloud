const ncloud = require('../lib/');
const moment = require('moment-timezone');

const {
  accessKey,
  secretKey,
  apiKey,
} = require('./env.json');

const client = ncloud.createClient({
  accessKey,
  secretKey,
  apiKey,
});

describe('Test PaaS Geolocation Method', function( ){
  beforeAll(function (){
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    console.log('set Interval');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test geoLocation', async ( done ) => {
    try {
      const geoLocation = client.PaaS.geoLocation();

      const geolocationResponse = await geoLocation.geoLocation({
        ip: '143.248.142.77'
      });

      console.log( geolocationResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });
});

