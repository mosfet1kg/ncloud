const ncloud = require('../lib/');

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

describe('Test IaaS Server Method', function( ){
  beforeAll(function (){
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    console.log('set Interval');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test getServerImageProductListResponse', async ( done ) => {
    try {
      const server = client.IaaS.server();
      const getServerImageProductListResponse = await server.getServerImageProductList({
        platformTypeCodeList: ['LNX64'],
        regionNo: '1'
      });

      console.log( getServerImageProductListResponse );
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  test('Test getServerProductList', async ( done ) => {
    try {
      const server = client.IaaS.server();
      const getServerProductListResponse = await server.getServerProductList({
        serverImageProductCode: 'SPSW0LINUX000061',
      });

      console.log( getServerProductListResponse.productList[0] );
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  test('Test getZoneList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const zoneList = await server.getZoneList();

      console.log( zoneList );
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  test('Test getRegionList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getRegionListResponse = await server.getRegionList();
      console.log( getRegionListResponse );
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  test('Test createNasVolumeInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createNasVolumeInstanceResponse = await server.createNasVolumeInstance({
        volumeName: 'testVol',
        volumeSize: '500', // GB
        volumeAllotmentProtocolTypeCode: 'NFS',
      });

      console.log( createNasVolumeInstanceResponse );
      done();
    } catch (e) {
      console.log( e.response.data );
      done.fail(e);
    }
  });
});

