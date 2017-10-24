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
      // [ { fingerprint: /** finger print value **/,
      //     loginKeyName: 'ncp',
      //     createDate: '2017-05-24T00:00:24+0900' } } ]
    }
  });


  client.compute.createLoginKey( { loginKeyName: "myTest04", outputPath: __dirname }, function( error, response ){
    if ( error ){
      console.log( error.message );
    } else {
      console.log( response );
      //    example=>
      //   {
      //   loginKeyName: 'myTest04',
      //   privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAs0fJZJWRmxhlYoGCEgyQGtFa6l5dB1N+fZtCqu5XnSUSx/2
      //   p\nYd7wfjsBp1zINIom9vrALr+qzGsBRT0tCSSpULf6SpQJn4hHqkvqhQ8NoBEyLDLW\n+VmZTBkqBm23ZxKlQ+syS2u56j7ntwm+arZ46k7P9
      //   Zbxb3hR4Lr1oPVK6IED30+B\ntVgt3tqZSCChIhUEcNfKuedHeBU0bCLM3IED4d4H7JXWlgBO2EXuAP\n9tB0GQKBgQDKCWBqk2gcHM6heQ1Ey
      //           /** the last part omitted **/
      //   hcRQVDS1SSiJQCg==\n-----END RSA PRIVATE KEY-----\n' }
    }
  })

})();
