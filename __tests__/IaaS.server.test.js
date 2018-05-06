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
        serverImageProductCode: 'SPSW0LINUX000046',
      });

      console.log( getServerProductListResponse );
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

  test('Test deleteNasVolumeInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const deleteNasVolumeInstanceResponse = await server.deleteNasVolumeInstance({
        nasVolumeInstanceNo: '768200',
      });

      console.log( deleteNasVolumeInstanceResponse );

      done();
    } catch (e) {
      console.log( e.response.data );
      done.fail(e);
    }
  });

  test('Test getNasVolumeInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getNasVolumeInstanceListResponse = await server.getNasVolumeInstanceList();

      console.log( getNasVolumeInstanceListResponse );

      done();
    } catch (e) {
      console.log( e.response.data );
      done.fail(e);
    }
  });

  test('Test changeNasVolumeSize', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const changeNasVolumeSizeResponse = await server.changeNasVolumeSize({
        nasVolumeInstanceNo: '768204',
        volumeSize: '600' // GB
      });

      console.log( changeNasVolumeSizeResponse );

      done();
    } catch (e) {
      console.log( e.response.data );
      done.fail(e);
    }
  });

  test('Test getNasVolumeInstanceRatingList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      // const timezone = 'America/Los_Angeles';
      const timezone = 'Asia/Seoul';
      const startTime = moment(Date.now()).subtract(1, 'hour').startOf('hour').tz(timezone).format('YYYY-MM-DDTHH:mm:ssZZ');
      const endTime = moment(Date.now()).tz(timezone).format('YYYY-MM-DDTHH:mm:ssZZ');

      const getNasVolumeInstanceRatingListResponse = await server.getNasVolumeInstanceRatingList({
        nasVolumeInstanceNo: '768213',
        startTime,
        endTime,
        interval: '5m'
      });

      console.log( getNasVolumeInstanceRatingListResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test setNasVolumeAccessControl', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const setNasVolumeAccessControlResponse = await server.setNasVolumeAccessControl({
        nasVolumeInstanceNo: '768213',
        // customIpList: ['10.41.0.121'],
        serverInstanceNoList: ['768254']
      });
      //
      console.log( setNasVolumeAccessControlResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test addNasVolumeAccessControl', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const addNasVolumeAccessControlResponse = await server.addNasVolumeAccessControl({
        nasVolumeInstanceNo: '768213',
        customIpList: ['10.41.0.121'],
        // serverInstanceNoList: ['768254']
      });
      //
      console.log( addNasVolumeAccessControlResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test removeNasVolumeAccessControl', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const removeNasVolumeAccessControlResponse = await server.removeNasVolumeAccessControl({
        nasVolumeInstanceNo: '768213',
        customIpList: ['10.41.0.121'],
        // serverInstanceNoList: ['768254']
      });

      console.log( removeNasVolumeAccessControlResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getLoginKeyList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getLoginKeyListResponse = await server.getLoginKeyList();
      console.log( getLoginKeyListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test createLoginKey', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createLoginKeyResponse = await server.createLoginKey({
        keyName: 'mytest2'
      });

      console.log( createLoginKeyResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test deleteLoginKey', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const deleteLoginKeyResponse = await server.deleteLoginKey({
        keyName: 'mytest'
      });

      console.log( deleteLoginKeyResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getAccessControlGroupList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getAccessControlGroupListResponse = await server.getAccessControlGroupList({
        accessControlGroupConfigurationNoList: ['5475', '5521']
      });

      console.log( getAccessControlGroupListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getAccessControlGroupServerInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getAccessControlGroupServerInstanceListResponse = await server.getAccessControlGroupServerInstanceList({
        accessControlGroupConfigurationNo: '42895'
      });

      console.log( getAccessControlGroupServerInstanceListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getAccessControlRuleList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getAccessControlRuleListResponse = await server.getAccessControlRuleList({
        accessControlGroupConfigurationNo: '42895'
      });

      console.log( getAccessControlRuleListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getServerInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getServerInstanceListResponse = await server.getServerInstanceList();

      console.log( getServerInstanceListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test createServerInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createServerInstancesResponse = await server.createServerInstances({
        serverImageProductCode: 'SPSW0LINUX000046',
        serverProductCode: 'SPSVRSTAND000003',
        serverName: 'mytest',
        serverCreateCount: 3,
        accessControlGroupConfigurationNoList: ['42895']

      });

      console.log( createServerInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });
});

