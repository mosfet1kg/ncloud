const env = require('./env.json');
const ncloud = require('../lib/');

const client = ncloud.createClient(env);

describe('Geolocation API Test', function () {
  test('Geolocation API Test #1', function (done) {
    client.openapi.geolocation.findLocation({ ip: '143.248.142.77'}, function (err, res){
      try {
        expect( err ).toBeNull();

        console.log( res );
        expect( res ).toBeDefined();
        expect( Object.keys(res) ).toContain('country');
        expect( Object.keys(res) ).toContain('code');
        expect( Object.keys(res) ).toContain('r1');
        expect( Object.keys(res) ).toContain('r2');
        done();
      } catch (e) {
        done.fail( e );
      }
    })
  });

  test('Geolocation API Test #2', function (done) {
    client.openapi.geolocation.findLocation({ ip: '143.248.142.77', ext: 't'}, function (err, res) {
      try {
        expect( err ).toBeNull();

        expect(res).toBeDefined();

        console.log( res );
        const keys = Object.keys(res);
        expect(keys).toContain('country');
        expect(keys).toContain('code');
        expect(keys).toContain('r1');
        expect(keys).toContain('r2');
        expect(keys).toContain('lat');
        expect(keys).toContain('long');
        expect(keys).toContain('net');
        done();

      } catch (e) {
        done.fail( e );
      }
    })
  });

  test('Geolocation API Test #3', function (done) {
    try {
      client.openapi.geolocation.findLocation({ ip: '143.248.142.77', ext1: 't'});
      done.fail();
    } catch(e){
      console.log( e );
      expect(e).toBeInstanceOf( Error );
      done();
    }

  });
});

