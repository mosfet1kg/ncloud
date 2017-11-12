var ncloud = require('../../lib/');
var path = require('path');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  const params = {
    localFile: '/Users/gbchoi/Downloads/kickass2/kickass2.mkv',
    container: 'helloworld',
    key: 'kickass5.mkv'//'testfile.gif'
  };

  const uploader = client.storage.uploadFile(params);

  uploader.on('progress', function (progress) {
    console.log( progress );
  });

  uploader.on('error', function (err) {
    console.log( err );
  });

  uploader.on('end', function () {
    console.log( 'end');
  })

})();
