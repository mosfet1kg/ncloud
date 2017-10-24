# Compute : AccessControlGroup  
## `findAccessControlGroup`, action `getAccessControlGroupList` 
Lists all access control groups that are available to use on your ncloud account.  
Callback returns `f(err, acgList)` where `acgList` is an `Array`.  
`acg` stands for `accessControlGroup` and we can use it as predefined configurations for firewall.

### Arguments  
 No Input Arguments
 
### Example  
```javascript
client.compute.findAccessControlGroup( function( error, response ){
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
```