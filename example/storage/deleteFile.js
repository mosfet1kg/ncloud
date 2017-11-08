var ncloud = require('../../lib/');
var path = require('path');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  const params = {
    ncloudParams: {
      containerName: 'helloworld',
      key: 'testfile.gif'
    }
  };

  client.storage.deleteFile( params, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
  })

})();
