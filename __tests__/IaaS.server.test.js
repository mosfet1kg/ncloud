const ncloud = require('../lib/');

const {
  accessKey,
  secretKey,
  apiKey,
} = require('./env.json');

const client = ncloud.createClient({
  accessKey,
  secretKey,
  apiKey,
});

describe('Test IaaS Server Method', function( ){
  test('Test getZoneList', async ( done ) => {
    try {
      const server = client.IaaS.server();

      const zone = await server.getZoneList();

      console.log( zone );
      done();
    } catch (e) {
      done.fail(e);
    }
  });

});

