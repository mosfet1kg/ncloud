var ncloud = require('../../lib/');
var path = require('path');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  const params = {
    localFile: path.join(__dirname, './testfile2.gif'),
    container: 'helloworld',
    key: 'testfile.gif'
  };

  const downloader = client.storage.downloadFile( params );

  downloader.on('progress', function (progress) {
    console.log( progress );
    //{ progressAmount: 4850115, progressTotal: 0.9531242968418533 }
  });

  downloader.on('error', function (err) {
    console.log( err );
  });

  downloader.on('end', function () {
    console.log( 'end');
  })

})();
