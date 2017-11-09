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
      key: '/',
      listMarker:0,
      listSize:1
    }
  };

  client.storage.findFiles( params, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // { Contents:
    //   [ { name: 'kickass2.mkv',
    //     'resource-type': '4',
    //     etag: '114352073644237862',
    //     'resource-status': '2',
    //     'last-modified': '1509993830134',
    //     'content-type': 'video/x-matroska',
    //     size: '3458409669' } ],
    //     NextMarker: 1 }
  })

})();
