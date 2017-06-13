var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.findZones( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log( response );
      // response example =>
      // [ { zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' } } ]
    }
  });

})();
