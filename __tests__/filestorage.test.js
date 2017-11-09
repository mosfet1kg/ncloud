const env = require('./env.json');
const ncloud = require('../lib/');
const path = require('path');
const client = ncloud.createClient(env);

describe('FileStorage Test', function () {

  test('LargeFileUpload Test', function(done) {
    const params = {
      localFile: path.join(__dirname, '../example/storage/testfile.gif'),
      ncloudParams: {
        containerName: 'helloworld',
        key: 'testfile.gif'
      }
    };

    const uploader = client.storage.uploadFile(params);

    uploader.on('progress', function (progress) {
      console.log( progress );
    });

    uploader.on('error', function (err) {
      console.log( err );
      done.fail( err );
    });

    uploader.on('end', function () {
      done();
    })
  });

  test('Delete Uploaded File', function(done) {
    const params = {
      ncloudParams: {
        containerName: 'helloworld',
        key: 'testfile.gif'
      }
    };

    client.storage.deleteFile( params, function (err, res) {
      try {
        expect(err).toBeNull();
        expect(res.statusText).toEqual('OK');

        done();
      } catch (e) {
        done.fail(e);
      }
    })
  });

  test('Delete nonexistent File', function(done) {
    const params = {
      ncloudParams: {
        containerName: 'helloworld',
        key: 'nonexistentfile.gif'
      }
    };

    client.storage.deleteFile( params, function (err, res) {
      try {
        expect(err).toBeInstanceOf( Error );

        done();
      } catch (e) {
        done.fail(e);
      }
    })
  })


});

