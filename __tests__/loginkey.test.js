const env = require('./env.json');
const ncloud = require('../lib/');

const client = ncloud.createClient(env);

describe('Test loginkey', function( ){
  test('Test findAccessControlGroups', function ( done ){

    client.compute.findLoginKeys( function( error, response ){
      try {
        expect( error ).toBeNull();
        expect( response ).toBeInstanceOf( Array );

        console.log( response );
        done();
      } catch (e) {
        done.fail(e);
      }
    });

  });

});

