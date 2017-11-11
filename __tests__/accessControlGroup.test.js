const env = require('./env.json');
const ncloud = require('../lib/');

const client = ncloud.createClient(env);

describe('Test ACG', function( ){
  test('Test findAccessControlGroups', function ( done ){

    client.compute.findAccessControlGroups( function( error, response ) {
      try {
        expect( error ).toBeNull();

        expect( response ).toBeDefined();

        const filtered = response.filter({accessControlGroupName: 'ncloud-default-acg'})[0];
        const keys = Object.keys( filtered );

        expect( keys ).toContain('accessControlGroupConfigurationNo');
        expect( keys ).toContain('accessControlGroupName');
        expect( keys ).toContain('accessControlGroupDescription');
        expect( keys ).toContain('isDefault');
        expect( keys ).toContain('createDate');

        done();
      } catch (e) {
        done.fail(e);
      }
    })
  });

  test('Test findAccessControlRules', function ( done ){
    client.compute.findAccessControlRules( { accessControlGroupConfigurationNo: 4656 }, function( err, response ) {
      try {
        expect( err ).toBeNull();
        expect( response ).toBeInstanceOf( Array );

        console.log( response );
        done();
      } catch (e) {
        done.fail( e );
      }
    })
  });
});

