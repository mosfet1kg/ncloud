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

  test('Test findPublicIpInstances', function(done){
    client.compute.findPublicIpInstances(function(err,res){
      try {
        expect(err).toBeNull();

        // console.log( res.filter({publicInstanceStatus:'used'}) );
        console.log( res.filter( function(el){ return el.publicIp==='220.230.124.139'}));


        done();
      } catch(e){
        done.fail(e);
      }
    })
  })

});

