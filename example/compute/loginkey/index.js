var ncloud = require('../../../lib/');

(function(){
    var client = ncloud.createClient({
        oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
        oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
    });

  client.compute.findLoginKeys( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ { loginKey:
      //   { fingerprint: /** finger print value **/,
      //     keyName: 'ncp',
      //     createDate: '2017-05-24T00:00:24+0900' } } ]
    }
  });

})();
