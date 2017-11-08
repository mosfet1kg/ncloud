# Compute : AccessControlGroup  
## `findAccessControlGroups`, action `getAccessControlGroupList` 
Lists all access control groups that are available to use on your ncloud account.  
Callback returns `f(err, acgList)` where `acgList` is an `Array`.  
`acg` stands for `accessControlGroup` and we can use it as predefined configurations for firewall.

### Arguments  
 No Input Arguments
 
### Example  
```javascript
client.compute.findAccessControlGroups( function( error, response ){
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
      
      // It is possible to pick the specific acg.
      const filteredList = response.filter({accessControlGroupName: 'ncloud-default-acg'})[0];
      console.log( filteredList );
      // [ { vmFlavorId: 'SPSVRSSD00000003',
      //   vmFlavorName: 'vCPU 2EA, Memory 4GB, [SSD]Disk 50GB',
      //   vmFlavorType: { code: 'STAND', codeName: 'Standard' },
      //   vmFlavorDescription: 'vCPU 2EA, Memory 4GB, [SSD]Disk 50GB',
      //   infraResourceType: { code: 'SVR', codeName: 'Server' },
      //   cpuCount: 2,
      //   memorySize: 4294967296,
      //   baseBlockStorageSize: 53687091200,
      //   osInformation: '',
      //   diskType: { code: 'NET', codeName: 'Network Storage' },
      //   addBlockStroageSize: 0 } ]
    }
});
```

---

## `findAccessControlRules`, action `getAccessControlRuleList` 
Lists all access control rules belonging to the specific access control group.  
Callback returns `f(err, ruleList)` where `ruleList` is an `Array`.  

### Arguments  
 No Input Arguments
 
### Example  
```javascript
client.compute.findAccessControlRules( { accessControlGroupConfigurationNo: 4656 }, function( err, response ) {
  if ( err ) {
    console.log( err.message );
  }
  console.log( response );
  // result example =>
  // [ { accessControlRuleConfigurationNo: 66510,
  //   protocolType: { code: 'TCP', codeName: 'tcp' },
  //   sourceIp: '10.64.56.146/32',
  //   destinationPort: 22,
  //   accessControlRuleDescription: '' },
  //   { accessControlRuleConfigurationNo: 66511,
  //     protocolType: { code: 'TCP', codeName: 'tcp' },
  //     sourceIp: '0.0.0.0/0',
  //     destinationPort: 22,
  //     accessControlRuleDescription: '' },
  //   { accessControlRuleConfigurationNo: 80639,
  //     protocolType: { code: 'TCP', codeName: 'tcp' },
  //     sourceIp: '',
  //     destinationPort: 1,
  //     accessControlRuleDescription: '' },
  //   { accessControlRuleConfigurationNo: 85350,
  //     protocolType: { code: 'TCP', codeName: 'tcp' },
  //     sourceIp: '0.0.0.0/0',
  //     destinationPort: 80,
  //     accessControlRuleDescription: '' } ]
})
```