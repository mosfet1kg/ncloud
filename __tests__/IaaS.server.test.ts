import * as ncloud from '../src';
const moment = require('moment-timezone');

const {
  accessKey,
  secretKey,
} = require('./env.json');

const client = ncloud.createClient({
  accessKey,
  secretKey,
});

describe('Test IaaS Server Method', function ( ) {
  beforeAll(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test global param test', async ( done ) => {
    try {
      client.setConfig({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const server = client.IaaS.server();
      const zoneList = await server.getZoneList();

      console.log( zoneList );

      done();
    } catch (e) {
      done.fail(e);
    }
  });

  test('Test getServerImageProductListResponse', async ( done ) => {
    try {
      const server = client.IaaS.server();
      const getServerImageProductListResponse = await server.getServerImageProductList({
        platformTypeCodeList: ['LNX64'],
        regionNo: '1',
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

      const zoneList = await server.getZoneList({
        regionNo: '1',
      });
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

  test('Test getRaidList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getRegionListResponse = await server.getRaidList();
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
        zoneNo: '2', // KR-2
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
        nasVolumeInstanceNo: '1029928',
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
        nasVolumeInstanceNo: '1029901',
        volumeSize: '600', // GB
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
        nasVolumeInstanceNo: '1029901',
        startTime,
        endTime,
        interval: '5m',
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
        nasVolumeInstanceNo: '1029901',
        serverInstanceNoList: ['978300', '978303'],
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
        nasVolumeInstanceNo: '1029901',
        // customIpList: ['10.41.0.121'],
        serverInstanceNoList: ['978306'],
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
        nasVolumeInstanceNo: '1029901',
        // customIpList: ['10.41.0.121'],
        serverInstanceNoList: ['978306'],
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
      const fs = require('fs');
      const path = require('path');
      const server = client.IaaS.server();

      const createLoginKeyResponse = await server.createLoginKey({
        keyName: 'mytest',
      });

      console.log( createLoginKeyResponse );

      fs.writeFileSync( path.join(__dirname, './loginKey.pem'), createLoginKeyResponse.privateKey, { encoding: 'utf8' });

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
        keyName: 'mytest',
      });

      console.log( deleteLoginKeyResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test importLoginKey', async ( done ) => {
    try {
      const fs = require('fs');
      const path = require('path');
      const publicKey = fs.readFileSync( path.join(__dirname, './testPublicKey.pub'), { encoding: 'utf8' });

      const server = client.IaaS.server();

      const importLoginKeyResponse = await server.importLoginKey({
        keyName: 'mytest',
        publicKey,
      });

      console.log( importLoginKeyResponse );
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
        accessControlGroupConfigurationNoList: ['5475', '5521'],
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
        accessControlGroupConfigurationNo: '42895',
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
        accessControlGroupConfigurationNo: '42895',
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
      client.setConfig({
        regionNo: '1',
      });
      const getServerInstanceListResponse = await server.getServerInstanceList({
        pageNo: 1,
        pageSize: 1,
      });

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
        zoneNo: '10',
        serverName: 'mytestb1',
        // serverCreateCount: 3,
        accessControlGroupConfigurationNoList: ['5475'],
        loginKeyName: 'mytest',
        userData: `#!/bin/bash

        echo hello world

        mkdir ~/hello
        cd ~/hello
        touch test
        `,
      });

      console.log( createServerInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test stopServerInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const stopServerInstancesInputResponse = await server.stopServerInstances({
        serverInstanceNoList: ['768370'],
      });

      console.log( stopServerInstancesInputResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test terminateServerInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const terminateServerInstancesResponse = await server.terminateServerInstances({
        serverInstanceNoList: ['768370'],
      });

      console.log( terminateServerInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test changeServerInstanceSpec', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const changeServerInstanceSpecResponse = await server.changeServerInstanceSpec({
        serverInstanceNo: '768364',
        serverProductCode: 'SPSVRSTAND000005',
      });

      console.log( changeServerInstanceSpecResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test rebootServerInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const rebootServerInstancesResponse = await server.rebootServerInstances({
        serverInstanceNoList: ['768316'],
      });

      console.log( rebootServerInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test startServerInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const startServerInstancesResponse = await server.startServerInstances({
        serverInstanceNoList: ['768361', '768358'],
      });

      console.log( startServerInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getRootPassword', async ( done ) => {
    try {
      const server = client.IaaS.server();
      const fs = require('fs');
      const path = require('path');

      const getRootPasswordResponse = await server.getRootPassword({
        serverInstanceNo: '768407',
        privateKey: fs.readFileSync(path.join(__dirname, './loginKey.pem'), 'utf8'),
      });

      console.log( getRootPasswordResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getMemberServerImageList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getMemberServerImageListResponse = await server.getMemberServerImageList();

      console.log( getMemberServerImageListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test createMemberServerImage', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createMemberServerImageResponse = await server.createMemberServerImage({
        memberServerImageName: 'hello',
        memberServerImageDescription:'hello test',
        serverInstanceNo: '768416',
      });

      console.log( createMemberServerImageResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test deleteMemberServerImages', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const deleteMemberServerImagesResponse = await server.deleteMemberServerImages({
        memberServerImageNoList: ['7300'],
      });

      console.log( deleteMemberServerImagesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getBlockStorageInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getBlockStorageInstanceListResponse = await server.getBlockStorageInstanceList({
        // blockStorageInstanceNoList: ['1060114'],
      });

      console.log( JSON.stringify(getBlockStorageInstanceListResponse) );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test createBlockStorageInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();
      client.setConfig({
        accessKey,
        secretKey,
        regionNo: '7',
      });
      // regionList:
      //   [ { regionNo: '1', regionCode: 'KR', regionName: 'Korea' },
      //     { regionNo: '3', regionCode: 'HK', regionName: 'HongKong' },
      //     { regionNo: '7', regionCode: 'SGN', regionName: 'Singapore' },
      //     { regionNo: '8', regionCode: 'JPN', regionName: 'Japan' },
      //     { regionNo: '9', regionCode: 'USWN', regionName: 'US-West' },
      //     { regionNo: '10', regionCode: 'DEN', regionName: 'Germany' } ] }

      const createBlockStorageInstanceResponse = await server.createBlockStorageInstance({
        blockStorageSize: 50,
        serverInstanceNo: '1656753',
        diskDetailTypeCode: 'SSD',
      });

      console.log( createBlockStorageInstanceResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test detachBlockStorageInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();
      client.setConfig({
        accessKey,
        secretKey,
        regionNo: '7',
      });

      const detachBlockStorageInstancesResponse = await server.detachBlockStorageInstances({
        blockStorageInstanceNoList: ['1656756'],
      });

      console.log( detachBlockStorageInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test attachBlockStorageInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const attachBlockStorageInstanceResponse = await server.attachBlockStorageInstance({
        serverInstanceNo: '1612590',
        blockStorageInstanceNo: '1647996',
      });

      console.log( attachBlockStorageInstanceResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test deleteBlockStorageInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();
      client.setConfig({
        accessKey,
        secretKey,
        regionNo: '7',
      });
      const deleteBlockStorageInstancesResponse = await server.deleteBlockStorageInstances({
        blockStorageInstanceNoList: ['1656756'],
      });

      console.log( deleteBlockStorageInstancesResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test createBlockStorageSnapshotInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createBlockStorageSnapshotInstanceResponse = await server.createBlockStorageSnapshotInstance({
        blockStorageInstanceNo: '1854851',
      });

      console.log( createBlockStorageSnapshotInstanceResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test deleteBlockStorageSnapshotInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createBlockStorageSnapshotInstanceResponse = await server.deleteBlockStorageSnapshotInstances({
        blockStorageSnapshotInstanceNoList: ['1854874', '1854858'],
      });

      console.log( createBlockStorageSnapshotInstanceResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getBlockStorageSnapshotInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getBlockStorageSnapshotInstanceListResponse = await server.getBlockStorageSnapshotInstanceList();

      console.log( getBlockStorageSnapshotInstanceListResponse );
      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getPublicIpInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getPublicIpInstanceListResponse = await server.getPublicIpInstanceList();

      console.log( getPublicIpInstanceListResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getPublicIpTargetServerInstanceList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getPublicIpTargetServerInstanceListResponse = await server.getPublicIpTargetServerInstanceList({
        zoneNo: '3',
      });

      console.log( getPublicIpTargetServerInstanceListResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test createPublicIpInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const createPublicIpInstanceResponse = await server.createPublicIpInstance({
        zoneNo: '3',
      });

      console.log( createPublicIpInstanceResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test associatePublicIpWithServerInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const associatePublicIpWithServerInstanceResponse = await server.associatePublicIpWithServerInstance({
        publicIpInstanceNo: '768894',
        serverInstanceNo: '768416',
      });

      console.log( associatePublicIpWithServerInstanceResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test disassociatePublicIpFromServerInstance', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const disassociatePublicIpFromServerInstanceResponse = await server.disassociatePublicIpFromServerInstance({
        publicIpInstanceNo: '768894',
      });

      console.log( disassociatePublicIpFromServerInstanceResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test deletePublicIpInstances', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const deletePublicIpInstancesResponse = await server.deletePublicIpInstances({
        publicIpInstanceNoList: ['768894'],
      });

      console.log( deletePublicIpInstancesResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test getPortForwardingRuleList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const getPortForwardingRuleListResponse = await server.getPortForwardingRuleList({
        zoneNo: '3',
      });

      console.log( getPortForwardingRuleListResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test addPortForwardingRules', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const addPortForwardingRulesResponse = await server.addPortForwardingRules({
        portForwardingConfigurationNo: '23536',
        portForwardingRuleList: [
          {
            serverInstanceNo: '768416',
            portForwardingExternalPort: '1024',
            portForwardingInternalPort: '22',
          },
          {
            serverInstanceNo: '768967',
            portForwardingExternalPort: '1025',
            portForwardingInternalPort: '22',
          },
        ],
      });

      console.log( addPortForwardingRulesResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });

  test('Test deletePortForwardingRules', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const deletePortForwardingRulesResponse = await server.deletePortForwardingRules({
        portForwardingConfigurationNo: '23536',
        portForwardingRuleList: [
          {
            serverInstanceNo: '768416',
            portForwardingExternalPort: '1024',
            portForwardingInternalPort: '22',
          },
          {
            serverInstanceNo: '768967',
            portForwardingExternalPort: '1025',
            portForwardingInternalPort: '22',
          }],
      });

      console.log( deletePortForwardingRulesResponse );

      done();
    } catch (e) {
      console.log( e.response );
      done.fail(e);
    }
  });
});
