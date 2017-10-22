var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.regionNo = 1;
  client.compute.findPortForwardingRules( function( error, response ){
    if( error ){
      return console.log( error );
    }
    console.log( response  );
    // response example =>
    // { portForwardingConfigurationNo: 4694,
    //   portForwardingPublicIp: '220.230.112.133',
    //   totalRows: 4,
    //   portForwardingRuleList:
    //   [ { portForwardingExternalPort: 2266,
    //     portForwardingInternalPort: 22,
    //     serverInstance: [Object] },
    //     { portForwardingExternalPort: 2223,
    //       portForwardingInternalPort: 22,
    //       serverInstance: [Object] },
    //     { portForwardingExternalPort: 2222,
    //       portForwardingInternalPort: 22,
    //       serverInstance: [Object] },
    //     { portForwardingExternalPort: 2224,
    //       portForwardingInternalPort: 22,
    //       serverInstance: [Object] } ] }
  });

  client.compute.createPortForwardingRule({ serverInstanceNo: 491009, externalPort: 52273, internalPort: 3389 }, function (err, response) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( response );
  });

  client.compute.destroyPortForwardingRule({ serverInstanceNo: 507498, externalPort: 52273, internalPort: 22 }, function( err, rules ) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( rules );

    rules.setWait({},function(err, rules) {
      if ( err ) {
        return console.log( err.message );
      }
      console.log( rules );
    })

  })

})();
