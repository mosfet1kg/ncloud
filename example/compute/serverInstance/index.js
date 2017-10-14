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

  client.compute.destroyServer({ serverInstanceNo: 500577 }, function(err, res) {
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

  client.compute.rebootServer({ serverInstanceNo: 500580 }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
  });

  client.compute.startServer({ serverInstanceNo: 500580 }, function (err, res) {
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
