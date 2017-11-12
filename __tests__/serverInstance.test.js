const env = require('./env.json');
const ncloud = require('../lib/');
const fs = require('fs');
const path = require('path');
const client = ncloud.createClient(env);

describe('Test serverInstance', function( ){
  test('Test findRootPassword', function ( done ){

    client.compute.findRootPassword({ serverInstanceNo: '529135', privateKey: fs.readFileSync( path.join(__dirname,'../example/compute/serverInstance/testgb.pem'), 'utf8')}, function(err, pwRes) {
      try {
        expect( err ).toBeNull();

        console.log( pwRes );
        done();
      } catch (e) {
        console.log( e );
        done.fail(e);
      }
    });


  });

});

