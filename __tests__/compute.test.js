const env = require('./env.json');
const ncloud = require('../lib/');

const client = ncloud.createClient(env);

describe('Compute ACG Test', function( ){
  test('ACG API Test #1', function ( done ){
    client.compute.findAccessControlGroups( function( error, response ) {
      if ( error ) {
        return console.log( error );
      }

      expect( response ).toBeDefined();

      const filtered = response.filter({accessControlGroupName: 'ncloud-default-acg'})[0];
      const keys = Object.keys( filtered );

      expect( keys ).toContain('accessControlGroupConfigurationNo');
      expect( keys ).toContain('accessControlGroupName');
      expect( keys ).toContain('accessControlGroupDescription');
      expect( keys ).toContain('isDefault');
      expect( keys ).toContain('createDate');

      done();
    })
  });

});

