var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.findServers( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ {
      //   securityGroups: [ [Object] ],
      //   serverInstanceNo: 362133,
      //   serverName: '/** instance name **/',
      //   serverDescription: '',
      //   cpuCount: 2,
      //   memorySize: 4294967296,
      //   baseBlockStorageSize: 53687091200,
      //   platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
      //   loginKeyName: 'ncp',
      //     /*** more items  **/
    }
  });

  client.compute.createServer({
    vmImageId: 'SPSW0LINUX000046',
    vmFlavorId: 'SPSVRSSD00000010',
    serverName: 'helloworld46',
    serverDescription: "test",
    loginKeyName : 'testgb',
    feeSystemTypeCode: 'MTRAT',  // FXSUM
    zoneNo: '2',
    accessControlGroupConfigurationNoList: [4656],
    userData: fs.readFileSync('./testFile.sh', 'utf8')
  }, function(err, res) {
    if( err ) {
      return console.log( err.message );
    }

    console.log( res );
  });

  client.compute.rebootServer({ serverInstanceNo: 500601 }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // response example=>
    // {
    //   "serverInstanceNo": 500601,
    //   "serverName": "helloworld48",
    //   "serverDescription": "test",
    //   "cpuCount": 2,
    //   "memorySize": 8589934592,
    //   "baseBlockStorageSize": 53687091200,
    //   "platformType": {
    //   "code": "LNX64",
    //     "codeName": "Linux 64 Bit"
    // },
    //   "loginKeyName": "testgb",
    //   "isFeeChargingMonitoring": false,
    //   "publicIp": "",
    //   "privateIp": /**privateIpValue**/,
    //   "serverImageName": "centos-7.3-64",
    //   "serverInstanceStatus": {
    //   "code": "RUN",
    //     "codeName": "Server run state"
    // },
    //   "serverInstanceOperation": {
    //   "code": "RESTA",
    //     "codeName": "Server RESTART OP"
    // },
    //   "serverInstanceStatusName": "rebooting",
    //   "createDate": "2017-10-14T03:19:42+0900",
    //   "uptime": "2017-10-15T21:19:43+0900",
    //   "vmImageId": "SPSW0LINUX000046",
    //   "vmFlavorId": "SPSVRSSD00000010",
    //   "isProtectServerTermination": false,
    //   "portForwardingPublicIp": /**portForwardingPublicIpValue**/,
    //   "zone": {
    //   "zoneNo": 2,
    //     "zoneName": "KR-1",
    //     "zoneDescription": "가산 NANG zone"
    // },
    //   "region": {
    //   "regionNo": 1,
    //     "regionCode": "KR",
    //     "regionName": "Korea"
    // },
    //   "baseBlockStorageDiskType": {
    //   "code": "NET",
    //     "codeName": "Network Storage"
    // },
    //   "userData": "#!/bin/bash\n\ntouch ~/helloworld\nmkdir ~/test\n",
    //   "accessControlGroupList": [
    //   {
    //     "accessControlGroup": {
    //       "accessControlGroupConfigurationNo": 4656,
    //       "accessControlGroupName": "ncloud-default-acg",
    //       "accessControlGroupDescription": "Default AccessControlGroup",
    //       "isDefault": true,
    //       "createDate": "2017-02-17T11:56:27+0900"
    //     }
    //   }
    // ]
    // }
  });

  client.compute.stopServer({ serverInstanceNo: "500601" }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // response example =>
    // {
    //   "serverInstanceNo": 500601,
    //   "serverName": "helloworld48",
    //   "serverDescription": "test",
    //   "cpuCount": 2,
    //   "memorySize": 8589934592,
    //   "baseBlockStorageSize": 53687091200,
    //   "platformType": {
    //   "code": "LNX64",
    //     "codeName": "Linux 64 Bit"
    // },
    //   "loginKeyName": "testgb",
    //   "isFeeChargingMonitoring": false,
    //   "publicIp": "",
    //   "privateIp": /**privateIpValue**/,
    //   "serverImageName": "centos-7.3-64",
    //   "serverInstanceStatus": {
    //   "code": "RUN",
    //     "codeName": "Server run state"
    // },
    //   "serverInstanceOperation": {
    //   "code": "SHTDN",
    //     "codeName": "Server SHUTDOWN OP"
    // },
    //   "serverInstanceStatusName": "shutting down",
    //   "createDate": "2017-10-14T03:19:42+0900",
    //   "uptime": "2017-10-15T21:22:01+0900",
    //   "vmImageId": "SPSW0LINUX000046",
    //   "vmFlavorId": "SPSVRSSD00000010",
    //   "isProtectServerTermination": false,
    //   "portForwardingPublicIp": /**portForwardingPublicIpValue**/,
    //   "zone": {
    //   "zoneNo": 2,
    //     "zoneName": "KR-1",
    //     "zoneDescription": "가산 NANG zone"
    // },
    //   "region": {
    //   "regionNo": 1,
    //     "regionCode": "KR",
    //     "regionName": "Korea"
    // },
    //   "baseBlockStorageDiskType": {
    //   "code": "NET",
    //     "codeName": "Network Storage"
    // },
    //   "userData": "#!/bin/bash\n\ntouch ~/helloworld\nmkdir ~/test\n",
    //   "accessControlGroupList": [
    //   {
    //     "accessControlGroup": {
    //       "accessControlGroupConfigurationNo": 4656,
    //       "accessControlGroupName": "ncloud-default-acg",
    //       "accessControlGroupDescription": "Default AccessControlGroup",
    //       "isDefault": true,
    //       "createDate": "2017-02-17T11:56:27+0900"
    //     }
    //   }
    // ]
    // }
  });

  client.compute.startServer({ serverInstanceNo: 500580 }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
  });

  client.compute.rebuildServer( { serverInstanceNo: 500580, vmFlavorId: 'SPSVRSSD00000003' }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
  });

  client.compute.destroyServer({ serverInstanceNo: 500577 }, function(err, res) {
    if ( err ) {

      return console.log( err.message );
    }

    console.log( res );
  });


  client.compute.findRootPassword( { serverInstanceNo: 500601, privateKey: fs.readFileSync('./testgb.pem', 'utf8')}, function(err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // result example =>
    // { rootPassword: 'B7FEfi*aar' }
  })

})();
