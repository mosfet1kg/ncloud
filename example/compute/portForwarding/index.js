var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.regionNo = 1;
  client.compute.findPortForwardingRules( function( error, response ){
    if( error ){
      return console.log( error );
    }
    console.log( response  );
    // response example =>
    // { portForwardingConfigurationNo: 4694,
    //   portForwardingPublicIp: '220.230.112.133',
    //   totalRows: 4,
    //   portForwardingRuleList:
    //   [ { portForwardingExternalPort: 2266,
    //     portForwardingInternalPort: 22,
    //     serverInstance: [Object] },
    //     { portForwardingExternalPort: 2223,
    //       portForwardingInternalPort: 22,
    //       serverInstance: [Object] },
    //     { portForwardingExternalPort: 2222,
    //       portForwardingInternalPort: 22,
    //       serverInstance: [Object] },
    //     { portForwardingExternalPort: 2224,
    //       portForwardingInternalPort: 22,
    //       serverInstance: [Object] } ] }
  });

  client.compute.createPortForwardingRule({ serverInstanceNo: 510873, externalPort: 52273, internalPort: 3389 }, function (err, response) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( response );
  });

  client.compute.destroyPortForwardingRule({ serverInstanceNo: 507498, externalPort: 52273, internalPort: 22 }, function( err, rules ) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( rules );

    rules.setWait({},function(err, rules) {
      if ( err ) {
        return console.log( err.message );
      }
      console.log( rules );
    })

  });

  client.compute.createPortForwardingRule([
    { serverInstanceNo: 510873, externalPort: 52273, internalPort: 22 },
    { serverInstanceNo: 510876, externalPort: 52274, internalPort: 22 },
    { serverInstanceNo: 510879, externalPort: 52275, internalPort: 22 }
  ], function (err, response) {
    if (err) {
      return console.log(err.message);
    }

    console.log( response );
    // [ { portForwardingExternalPort: 52275,
    //   portForwardingInternalPort: 22,
    //   serverInstance:
    //     { serverInstanceNo: 510879,
    //       serverName: 'server3',
    //       serverDescription: '',
    //       cpuCount: 2,
    //       memorySize: 4294967296,
    //       baseBlockStorageSize: 53687091200,
    //       platformType: [Object],
    //       loginKeyName: 'mycomtest',
    //       isFeeChargingMonitoring: false,
    //       publicIp: '',
    //       privateIp: '10.33.6.102',
    //       serverImageName: 'centos-7.3-64',
    //       serverInstanceStatus: [Object],
    //       serverInstanceOperation: [Object],
    //       serverInstanceStatusName: 'running',
    //       createDate: '2017-10-25T15:34:05+0900',
    //       uptime: '2017-10-25T15:36:51+0900',
    //       vmImageId: 'SPSW0LINUX000046',
    //       vmFlavorId: 'SPSVRSSD00000003',
    //       isProtectServerTermination: false,
    //       portForwardingPublicIp: /**portForwardingPublicIpValue**/,
    //       portForwardingExternalPort: 52275,
    //       portForwardingInternalPort: 22,
    //       zone: [Object],
    //       region: [Object],
    //       baseBlockStorageDiskType: [Object],
    //       userData: '',
    //       accessControlGroupList: [Array] } },
    //   { portForwardingExternalPort: 52274,
    //     portForwardingInternalPort: 22,
    //     serverInstance:
    //       { serverInstanceNo: 510876,
    //         serverName: 'server2',
    //         serverDescription: '',
    //         cpuCount: 2,
    //         memorySize: 4294967296,
    //         baseBlockStorageSize: 53687091200,
    //         platformType: [Object],
    //         loginKeyName: 'mycomtest',
    //         isFeeChargingMonitoring: false,
    //         publicIp: '',
    //         privateIp: '10.33.3.177',
    //         serverImageName: 'centos-7.3-64',
    //         serverInstanceStatus: [Object],
    //         serverInstanceOperation: [Object],
    //         serverInstanceStatusName: 'running',
    //         createDate: '2017-10-25T15:34:02+0900',
    //         uptime: '2017-10-25T15:36:51+0900',
    //         vmImageId: 'SPSW0LINUX000046',
    //         vmFlavorId: 'SPSVRSSD00000003',
    //         isProtectServerTermination: false,
    //         portForwardingPublicIp: /**portForwardingPublicIpValue**/,
    //         portForwardingExternalPort: 52274,
    //         portForwardingInternalPort: 22,
    //         zone: [Object],
    //         region: [Object],
    //         baseBlockStorageDiskType: [Object],
    //         userData: '',
    //         accessControlGroupList: [Array] } },
    //        /** more items **/
    // ]
  })

})();
