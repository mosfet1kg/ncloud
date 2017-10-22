var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.destroyPublicIpInstance({ publicIpInstanceNo: 506969 }, function(error, result) {
    if ( error ) {
      return console.log( error.message );
    }
    console.log( result );
    // { publicIpInstanceNo: 506969,
    //   publicIp: '210.89.177.241',
    //   publicIpDescription: '',
    //   createDate: '2017-10-22T02:03:42+0900',
    //   publicIpInstanceStatusName: 'terminated',
    //   publicIpInstanceStatus: { code: 'TERMT', codeName: 'NET TERMINATED state' },
    //   publicIpInstanceOperation: { code: 'NULL', codeName: 'NET NULL OP' },
    //   publicIpKindType: { code: 'GEN', codeName: 'General' },
    //   serverInstanceAssociatedWithPublicIp: '' }

  });

  client.compute.detachPublicIpInstance({ publicIpInstanceNo: 506969 }, function(error, result) {
    if ( error ) {
      return console.log( error.message );
    }

    console.log( result );
    // { publicIpInstanceNo: 506969,
    //   publicIp: /**publicIpValue**/,
    //   publicIpDescription: '',
    //   createDate: '2017-10-22T02:03:42+0900',
    //   publicIpInstanceStatusName: 'disusing',
    //   publicIpInstanceStatus: { code: 'USED', codeName: 'NET USED state' },
    //   publicIpInstanceOperation: { code: 'DISUS', codeName: 'NET DISUSE OP' },
    //   publicIpKindType: { code: 'GEN', codeName: 'General' },
    //   serverInstanceAssociatedWithPublicIp:
    //   { serverInstanceNo: /**serverInstanceNoValue**/,
    //     serverName: 'dbtest',
    //     serverDescription: 'E3r4!!4t9@n',
    //     cpuCount: 2,
    //     memorySize: 8589934592,
    //     baseBlockStorageSize: 53687091200,
    //     platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //     loginKeyName: 'real004',
    //       isFeeChargingMonitoring: false,
    //     publicIp: /**publicIpValue**/,
    //     privateIp: /**privateIpValue**/,
    //     serverImageName: 'centos-7.3-64',
    //     serverInstanceStatus: { code: 'RUN', codeName: 'Server run state' },
    //     serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
    //     serverInstanceStatusName: 'running',
    //       createDate: '2017-10-18T14:27:20+0900',
    //     uptime: '2017-10-18T14:29:50+0900',
    //     vmImageId: 'SPSW0LINUX000046',
    //     vmFlavorId: 'SPSVRSSD00000010',
    //     isProtectServerTermination: false,
    //     portForwardingPublicIp: /**portForwardingPublicIpValue**/,
    //     portForwardingExternalPort: 2223,
    //     portForwardingInternalPort: 22,
    //     zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //     baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //     userData: '',
    //       accessControlGroupList: [ [Object] ] } }
  });

  client.compute.attachPublicIpInstance({ publicIpInstanceNo: 506969, serverInstanceNo: 503087}, function(error, result) {
    if ( error ) {
      return console.log( error.message );
    }

    console.log( result );
  // { publicIpInstanceNo: 506969,
  //   publicIp: /**publicIpValue**/,
  //   publicIpDescription: '',
  //   createDate: '2017-10-22T02:03:42+0900',
  //   publicIpInstanceStatusName: 'using',
  //   publicIpInstanceStatus: { code: 'CREAT', codeName: 'NET CREATE state' },
  //   publicIpInstanceOperation: { code: 'USE', codeName: 'NET USE OP' },
  //   publicIpKindType: { code: 'GEN', codeName: 'General' },
  //   serverInstanceAssociatedWithPublicIp:
  //   { serverInstanceNo: 503087,
  //     serverName: 'dbtest',
  //     serverDescription: 'E3r4!!4t9@n',
  //     cpuCount: 2,
  //     memorySize: 8589934592,
  //     baseBlockStorageSize: 53687091200,
  //     platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
  //     loginKeyName: 'real004',
  //       isFeeChargingMonitoring: false,
  //     publicIp: /**publicIpValue**/,
  //     privateIp: /**privateIpValue**/,
  //     serverImageName: 'centos-7.3-64',
  //     serverInstanceStatus: { code: 'RUN', codeName: 'Server run state' },
  //     serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
  //     serverInstanceStatusName: 'running',
  //       createDate: '2017-10-18T14:27:20+0900',
  //     uptime: '2017-10-18T14:29:50+0900',
  //     vmImageId: 'SPSW0LINUX000046',
  //     vmFlavorId: 'SPSVRSSD00000010',
  //     isProtectServerTermination: false,
  //     portForwardingPublicIp: /**portForwardingPublicIp**/,
  //     portForwardingExternalPort: 2223,
  //     portForwardingInternalPort: 22,
  //     zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
  //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
  //     baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
  //     userData: '',
  //       accessControlGroupList: [ [Object] ] } }
  });

  client.compute.createPublicIpInstance(function(error, publicIpInstance) {
    if ( error ) {
      return console.log( error.message );
    }

    console.log( publicIpInstance );
    // { publicIpInstanceNo: 506967,
    //   publicIp: /**publicIpValue**/,
    //   publicIpDescription: '',
    //   createDate: '2017-10-22T01:59:31+0900',
    //   publicIpInstanceStatusName: 'created',
    //   publicIpInstanceStatus: { code: 'CREAT', codeName: 'NET CREATE state' },
    //   publicIpInstanceOperation: { code: 'NULL', codeName: 'NET NULL OP' },
    //   publicIpKindType: { code: 'GEN', codeName: 'General' },
    //   serverInstanceAssociatedWithPublicIp: '' }

  });

  client.compute.createPublicIpInstance({ serverInstanceNo: 503087 }, function(error, publicIpInstance) {
    if ( error ) {
      return console.log( error.message );
    }

    console.log( publicIpInstance );
    // { publicIpInstanceNo: /**publicIpInstanceNoValue**/,
    //   publicIp: /**publicIpValue**/,
    //   publicIpDescription: '',
    //   createDate: '2017-10-22T02:03:42+0900',
    //   publicIpInstanceStatusName: 'using',
    //   publicIpInstanceStatus: { code: 'CREAT', codeName: 'NET CREATE state' },
    //   publicIpInstanceOperation: { code: 'USE', codeName: 'NET USE OP' },
    //   publicIpKindType: { code: 'GEN', codeName: 'General' },
    //   serverInstanceAssociatedWithPublicIp:
    //   { serverInstanceNo: /**serverInstanceNoValue**/,
    //     serverName: 'dbtest',
    //     serverDescription: 'E3r4!!4t9@n',
    //     cpuCount: 2,
    //     memorySize: 8589934592,
    //     baseBlockStorageSize: 53687091200,
    //     platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //     loginKeyName: 'real004',
    //       isFeeChargingMonitoring: false,
    //     publicIp: /**publicIpValue**/,
    //     privateIp: /**privateIpValue**/,
    //     serverImageName: 'centos-7.3-64',
    //     serverInstanceStatus: { code: 'RUN', codeName: 'Server run state' },
    //     serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
    //     serverInstanceStatusName: 'running',
    //       createDate: '2017-10-18T14:27:20+0900',
    //     uptime: '2017-10-18T14:29:50+0900',
    //     vmImageId: 'SPSW0LINUX000046',
    //     vmFlavorId: 'SPSVRSSD00000010',
    //     isProtectServerTermination: false,
    //     portForwardingPublicIp: '220.230.112.133',
    //     portForwardingExternalPort: 2223,
    //     portForwardingInternalPort: 22,
    //     zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //     baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //     userData: '',
    //       accessControlGroupList: [ [Object] ] } }
  });

  client.compute.findPublicIpInstances(function( error, publicIpInstanceList ) {
    if ( error ) {
      return console.log( error.message );
    }

    // console.log( publicIpInstanceList.filter({publicInstanceStatus: 'created'}));
    // result examples =>
    // [ { publicIpInstanceNo: 506813,
    //   publicIp: '220.230.119.11',
    //   publicIpDescription: '',
    //   createDate: '2017-10-21T22:31:48+0900',
    //   publicIpInstanceStatusName: 'created',
    //   publicIpInstanceStatus: { code: 'CREAT', codeName: 'NET CREATE state' },
    //   publicIpInstanceOperation: { code: 'NULL', codeName: 'NET NULL OP' },
    //   publicIpKindType: { code: 'GEN', codeName: 'General' } } ]

    // console.log( publicIpInstanceList );
    // result examples =>
    // [ { publicIpInstanceNo: 425369,
    //   publicIp: /** publicIpValue **/,
    //   publicIpDescription: '',
    //   createDate: '2017-08-15T17:15:35+0900',
    //   publicIpInstanceStatusName: 'used',
    //   publicIpInstanceStatus: { code: 'USED', codeName: 'NET USED state' },
    //   publicIpInstanceOperation: { code: 'NULL', codeName: 'NET NULL OP' },
    //   publicIpKindType: { code: 'GEN', codeName: 'General' },
    //   serverInstanceAssociatedWithPublicIp:
    //     { serverInstanceNo: 487088,
    //       serverName: 'no-host',
    //       serverDescription: '',
    //       cpuCount: 2,
    //       memorySize: 4294967296,
    //       baseBlockStorageSize: 53687091200,
    //       platformType: [Object],
    //       loginKeyName: 'open',
    //       isFeeChargingMonitoring: false,
    //       publicIp: /** publicIpValue **/,
    //       privateIp: /** privateIpValue **/,
    //       serverImageName: 'centos-6.6-64',
    //       serverInstanceStatus: [Object],
    //       serverInstanceOperation: [Object],
    //       serverInstanceStatusName: 'running',
    //       createDate: '2017-09-21T21:54:27+0900',
    //       uptime: '2017-09-21T21:57:04+0900',
    //       vmImageId: 'SPSW0LINUX000044',
    //       vmFlavorId: 'SPSVRSSD00000003',
    //       isProtectServerTermination: false,
    //       portForwardingPublicIp: '220.230.112.133',
    //       portForwardingExternalPort: 2224,
    //       portForwardingInternalPort: 22,
    //       zone: [Object],
    //       region: [Object],
    //       baseBlockStorageDiskType: [Object],
    //       userData: '',
    //       accessControlGroupList: [Array] } },
    //   { publicIpInstanceNo: 501476,
    //     publicIp: /** publicIpValue **/,
    //     publicIpDescription: '',
    //     createDate: '2017-10-16T12:06:56+0900',
    //     publicIpInstanceStatusName: 'used',
    //     publicIpInstanceStatus: { code: 'USED', codeName: 'NET USED state' },
    //     publicIpInstanceOperation: { code: 'NULL', codeName: 'NET NULL OP' },
    //     publicIpKindType: { code: 'GEN', codeName: 'General' },
    //     serverInstanceAssociatedWithPublicIp:
    //       { serverInstanceNo: 503314,
    //         serverName: 'dbtest002',
    //         serverDescription: 'R3etGUhYfG+dt',
    //         cpuCount: 4,
    //         memorySize: 8589934592,
    //         baseBlockStorageSize: 53687091200,
    //         platformType: [Object],
    //         loginKeyName: 'real004',
    //         isFeeChargingMonitoring: false,
    //         publicIp: /** publicIpValue **/,
    //         privateIp: /** privateIpValue **/,
    //         serverImageName: 'mysql(5.7)-centos-7.2-64',
    //         serverInstanceStatus: [Object],
    //         serverInstanceOperation: [Object],
    //         serverInstanceStatusName: 'running',
    //         createDate: '2017-10-18T17:47:14+0900',
    //         uptime: '2017-10-18T17:50:06+0900',
    //         vmImageId: 'SPSW0LINUX000050',
    //         vmFlavorId: 'SPSVRSSD00000005',
    //         isProtectServerTermination: false,
    //         portForwardingPublicIp: /**portForwardingPublicIpValue**/,
    //         portForwardingExternalPort: 2266,
    //         portForwardingInternalPort: 22,
    //         zone: [Object],
    //         region: [Object],
    //         baseBlockStorageDiskType: [Object],
    //         userData: '',
    //         accessControlGroupList: [Array] } },
    //   { publicIpInstanceNo: 506813,
    //     publicIp: /** publicIpValue **/,
    //     publicIpDescription: '',
    //     createDate: '2017-10-21T22:31:48+0900',
    //     publicIpInstanceStatusName: 'created',
    //     publicIpInstanceStatus: { code: 'CREAT', codeName: 'NET CREATE state' },
    //     publicIpInstanceOperation: { code: 'NULL', codeName: 'NET NULL OP' },
    //     publicIpKindType: { code: 'GEN', codeName: 'General' } } ]
  })

})();
