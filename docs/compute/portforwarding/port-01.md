# Compute : PortForwarding  

## `findPortForwardingRules`, action `getPortForwardingRuleList` 
Lists all port forwarding rules that are configured to access servers via SSH.  
Callback returns `f(err, portForwardingRules)` where `portForwardingRules` is an `Object`.  
It contains `portForwardingConfigurationNo`, `portForwardingPublicIp` and `portForwardingRuleList`.  
These variables can vary depending on `regionNo`. 

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
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
```

---

## `createPortForwardingRule`, action `addPortForwardingRules` 
Creates a port forwarding rule and then attaches it to a server.

### Arguments  

| Input parameter                  | Type       | Required     | Description |
|----------------------------------|------------|--------------|-------------|
| `portForwardingConfigurationNo`  | `string`   | optional     | The value to create port forwarding rule based on the region. It can be obtained from `findPortForwardingRules` method(action `getPortForwardingRuleList`). It can vary depending on `regionNo`. <br/>(Default: the port forwarding config number of the region you chose)  |             
| `serverInstanceNo`               | `string`   | **required** | Unique number of a server where to forward.  |  
| `externalPort`                   | `string`   | **required** | External port to access the server via SSH. |  
| `internalPort`                   | `string`   | **required** | Destination port. Choose either 22 or 3389. Values other than these are invalid. |  
 
### Examples  
```javascript
client.compute.createPortForwardingRule({ serverInstanceNo: 491009, externalPort: 52273, internalPort: 3389 }, function (err, response) {
  if ( err ) {
    return console.log( err.message );
  }
  console.log( response );
  // response example =>
  //{ portForwardingExternalPort: 2224,
  //  portForwardingInternalPort: 22,
  //  serverInstance: [Object] } 
});
```  

In order to create multiple port forwarding rules, use as below.  
```javascript
 client.compute.createPortForwardingRule([
    { serverInstanceNo: 510873, externalPort: 52273, internalPort: 22 },
    { serverInstanceNo: 510876, externalPort: 52274, internalPort: 22 },
    { serverInstanceNo: 510879, externalPort: 52275, internalPort: 22 }
  ], function (err, response) {
    if (err) {
      return console.log(err.message);
    }
    
    console.log( response );
    // [ { portForwardingExternalPort: 52275,
    //   portForwardingInternalPort: 22,
    //   serverInstance: [Object] },
    //   { portForwardingExternalPort: 52274,
    //   portForwardingInternalPort: 22,
    //   serverInstance: [Object] },
    //   { portForwardingExternalPort: 52273,
    //   portForwardingInternalPort: 22,
    //   serverInstance: [Object] }]
 })
```

---

## `destroyPortForwardingRule`, action `deletePortForwardingRules` 
Detaches a port forwarding rule from a server.

### Arguments  

| Input parameter                  | Type       | Required     | Description |
|----------------------------------|------------|--------------|-------------|
| `portForwardingConfigurationNo`  | `string`   | optional     | The value to create port forwarding rule based on the region. It can be obtained from `findPortForwardingRules` method(action `getPortForwardingRuleList`). It can vary depending on `regionNo`. <br/>(Default: the port forwarding config number of the region you chose ) |             
| `serverInstanceNo`               | `string`   | **required** | Unique number of a server for where to forward.  |  
| `externalPort`                   | `string`   | **required** | External port to access the server via SSH. |  
| `internalPort`                   | `string`   | **required** | Destination port. Choose either 22 or 3389. Values other than these are invalid. |  

### Example
```javascript
client.compute.destroyPortForwardingRule({ serverInstanceNo: 507498, externalPort: 52273, internalPort: 22 }, function( err, rules ) {
  if ( err ) {
     return console.log( err.message );
   }
  
  // list port forwarding rules like the result of findPortForwardingRules method.
  console.log( rules );
  
  // It is possible to wait for the rule to be detached completely if needed.
  rules.setWait({},function(err, rules) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( rules );
  })
})
```
