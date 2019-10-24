const ncloud = require('../lib/');

const {
  accessKey,
  secretKey,
} = require('./env.json');

const client = ncloud.createClient({
  accessKey,
  secretKey,
});

import fetchClient from '../src/helpers/fetchClient';

describe('Test PaaS Geolocation Method', () => {
  beforeAll(() => {
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
        ip: '143.248.142.77',
        ext: 't',
      });

      console.log( geolocationResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test FetchClient', (done) => {
    fetchClient({
      method: 'GET',
      baseURL: 'https://ncloud.apigw.ntruss.com/',
      basePath: '/geolocation/v2/',
      action: 'geoLocation',
      actionParams: {
        ip: '143.248.142.77',
        ext: 't',
      },
      authParams: {
        accessKey,
        secretKey,
      },
    }).then((res) => {
      console.log( res.data );

      done();
    });
  });

  test('Test Container Registry', (done) => {
    fetchClient({
      method: 'GET',
      baseURL: 'https://ncr.apigw.ntruss.com/',
      basePath: '/ncr/api/v2/repositories/',
      action: 'eliceprodexercise',
      authParams: {
        accessKey: 'test',
        secretKey: 'test',
      },
      actionParams: {
        page: 1,
        pagesize: 50,
      },
    }).then((res) => {
      console.log( res.data );

      done();
    });
  });
});
