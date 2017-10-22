# Getting started with ncloud

## Using ncloud

In this example, we're going to create a ncloud compute client, 
create a server, and then output its details to the command line.

```javascript
  var ncloud = require('ncloud');
  var _ = require('lodash');
  var fs = require('fs');

  // create our client with your ncloud credentials
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  // A region is a specific geographical location where you can run your resources.
  client.compute.regionNo = 1;

  // first we're going to get our public images
  client.compute.findPublicImages( function (err, images) {

    // pick an image base on CentOs 7.3
    const vmImageId = images.filter({vmImageName: 'centos-7.3-64'})[0].vmImageId;
    console.log( 'vmImageId: ' + vmImageId );

    // then get our base flavors
    client.compute.findFlavors({ vmImageId: vmImageId }, function(err, flavors) {

      // pick a instance flavor
      const vmFlavorId = flavors.filter({vCpu: 2, memory: '4GB', storage: '50GB', storageType: 'SSD'})[0].vmFlavorId;
      console.log( 'vmFlavorId: ' + vmFlavorId );

      // create our server
      client.compute.createServer({
        vmImageId: vmImageId,
        vmFlavorId: vmFlavorId,
        serverName: 'server1',
        loginKeyName: 'testgb'
      }, handlerServerResponse );

    })

  });

  function handlerServerResponse(err, server) {
    if ( err ) {
      return console.log( err );
    }

    // wait for status: RUNNING on our server, and then callback
    server.setWait({ status: server.STATUS.running, verbose: true }, function (err, srvRes) {
      if ( err ) {
        return console.log( err.message );
      }

      if ( srvRes.serverInstanceStatusName && srvRes.serverInstanceStatusName !== 'running' ) {
        return console.log( srvRes );
      }

      // attach a new public ipv4 to our server
      client.compute.createPublicIpInstance({serverInstanceNo: srvRes.serverInstanceNo}, function(err, publicIpInstance) {
        if ( err ) {
          return console.log( err.message );
        }

        // set up port forwarding to connect via SSH to our server
        client.compute.createPortForwardingRule({ serverInstanceNo: srvRes.serverInstanceNo, externalPort: _.random(30000,65534), internalPort: 22 }, function (err, pfRes) {
          if ( err ) {
            return console.log( err.message );
          }

          // get root password
          client.compute.findRootPassword({ serverInstanceNo: srvRes.serverInstanceNo, privateKey: fs.readFileSync('./testgb.pem', 'utf8')}, function(err, pwRes) {
            if ( err ) {
              return console.log( err.message );
            }

            console.log( 'SERVER INFO');
            console.log( 'serverName: ' + srvRes.serverName );
            console.log( 'serverIpv4: ' + publicIpInstance.publicIp);
            console.log( 'command for SSH to connect the resulting server: ssh -p ' + pfRes.portForwardingExternalPort + ' root@' + srvRes.portForwardingPublicIp );
            console.log( 'try the aforementioned command a few moments later.');
            console.log( 'root password: ' + pwRes.rootPassword );
          });
        });
      });
    })
  }
``` 