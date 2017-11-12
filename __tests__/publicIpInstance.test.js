const env = require('./env.json');
const ncloud = require('../lib/');

const client = ncloud.createClient(env);

describe('Test publicIpInstance', function( ){
  test('Test attachPublicIpInstance', function ( done ){

    client.compute.attachPublicIpInstance({serverInstanceNo: 523832, autoCreateIp: true}, function(error, publicIpInstance) {
      try {
        expect( error ).toBeNull();

        console.log( publicIpInstance );
        done();
      } catch (e) {
        console.log( e );
        done.fail(e);
      }
    });

  });

});

