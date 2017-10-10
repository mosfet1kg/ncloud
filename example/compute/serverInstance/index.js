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
    vmImageId: 'SPSW0LINUX000043',
    vmFlavorId: 'SPSVRSSD00000010',
    // privateImageNo : 3762
    serverName: 'helloworld11',
    serverDesc: "test",
    loginKeyName : 'test005',
    feeSystemTypeCode: 'MTRAT',  // FXSUM
    zoneNo: 2,
    accessControlGroupConfigurationNoList: [4656,5260,5277,22026,22656],
    userData: '#!/bin/bash \n echo hello world'
  }, function(err, res) {
    if( err ) {
      return console.log( err.message );
    }

    console.log( res );
  })
})();
