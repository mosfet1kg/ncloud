var ncloud = require('../../../lib/');

(function(){
    var client = ncloud.createClient({
        oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
        oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
    });

  client.compute.findSecurityGroups( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ { accessControlGroupConfigurationNo: 5479,
      //   accessControlGroupName: 'ncloud-default-acg',
      //   accessControlGroupDescription: 'Default AccessControlGroup',
      //   isDefault: true,
      //   createDate: '2017-04-14T10:13:10+0900' },
      //   { accessControlGroupConfigurationNo: 5480,
      //     accessControlGroupName: 'ncloud-load-balancer',
      //     accessControlGroupDescription: 'Default Loadbalancer AccessControlGroup',
      //     isDefault: true,
      //     createDate: '2017-04-14T10:13:10+0900' } ]
    }
  });

})();
