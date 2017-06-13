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
      // [ { serverInstanceNo: 362133,
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

})();
