var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.findRegions( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log( response  );
      // response example =>
      // [ { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
      //   { regionNo: 2, regionCode: 'USW', regionName: 'US-West' },
      //   { regionNo: 3, regionCode: 'HK', regionName: 'HongKong' },
      //   { regionNo: 4, regionCode: 'SG', regionName: 'Sigapore' },
      //   { regionNo: 5, regionCode: 'JP', regionName: 'Japan' },
      //   { regionNo: 6, regionCode: 'DE', regionName: 'Germany' } ]
    }
  });

})();
