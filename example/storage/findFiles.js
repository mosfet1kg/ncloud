var ncloud = require('../../lib/');
var path = require('path');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  const params = {
    container: 'helloworld',
    key: '/',
    listMarker:'kickass2.mkv',
    listSize:1
  };

  client.storage.findFiles( params, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // { Contents:
    //   [ { name: 'testfile.gif',
    //     'resource-type': '4',
    //     etag: '3776665248554716403',
    //     'resource-status': '2',
    //     'last-modified': '1510242716806',
    //     'content-type': 'image/gif',
    //     size: '5088649' } ],
    //     NextMarker:
    //     { name: 'testfile2.gif',
    //     'resource-type': '3',
    //     etag: '6332511357442342509',
    //     'resource-status': '2',
    //     'last-modified': '1510243389176',
    //     'content-type': 'image/gif',
    //     size: '5088649' } }

  })

})();
