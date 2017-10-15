# Compute : ServerInstance  
## `findServers`, action `getServerInstanceList` 
Lists all servers that are available to use on your ncloud account.  
Callback returns `f(err, servers)` where `servers` is an `Array`.

### Arguments  
 No Input Arguments
 
### Example  
```javascript
client.compute.findServers( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
       // response example =>
       //[
       // {
       //   "serverInstanceNo": 487088,
       //   "serverName": "no-host",
       //   "serverDescription": "",
       //   "cpuCount": 2,
       //   "memorySize": 4294967296,
       //   "baseBlockStorageSize": 53687091200,
       //   "platformType": {
       //   "code": "LNX64",
       //     "codeName": "Linux 64 Bit"
       // },
       //   "loginKeyName": "open",
       //   "isFeeChargingMonitoring": false,
       //   "publicIp": "",
       //   "privateIp": "10.34.18.182",
       //   "serverImageName": "centos-6.6-64",
       //   "serverInstanceStatus": {
       //   "code": "RUN",
       //     "codeName": "Server run state"
       // },
       //   "serverInstanceOperation": {
       //   "code": "NULL",
       //     "codeName": "Server NULL OP"
       // },
       //   "serverInstanceStatusName": "running",
       //   "createDate": "2017-09-21T21:54:27+0900",
       //   "uptime": "2017-09-21T21:57:04+0900",
       //   "vmImageId": "SPSW0LINUX000044",
       //   "vmFlavorId": "SPSVRSSD00000003",
       //   "isProtectServerTermination": false,
       //   "portForwardingPublicIp": "220.230.112.133",
       //   "zone": {
       //   "zoneNo": 2,
       //     "zoneName": "KR-1",
       //     "zoneDescription": "가산 NANG zone"
       // },
       //   "region": {
       //   "regionNo": 1,
       //     "regionCode": "KR",
       //     "regionName": "Korea"
       // },
       //   "baseBlockStorageDiskType": {
       //   "code": "NET",
       //     "codeName": "Network Storage"
       // },
       //   "userData": "",
       //   "accessControlGroupList": [
       //   {
       //     "accessControlGroup": {
       //       "accessControlGroupConfigurationNo": 4656,
       //       "accessControlGroupName": "ncloud-default-acg",
       //       "accessControlGroupDescription": "Default AccessControlGroup",
       //       "isDefault": true,
       //       "createDate": "2017-02-17T11:56:27+0900"
       //     }
       //   }
       // ]
       // }
       //     /*** more items  **/
    }
});
```

---

## `createServer`, action `createServerInstances` 
Creates a server with the options specified.
Returns the server in the callback `f(err, server)`;

### Arguments  
 **Tip**: Choose either `vmImageId` or `privateImageNo` for VM configuration. 
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `vmImageId` | `string`   | conditional | Unique Id of a public image that can be got from `findPublicImages` method(action `getServerImageProductList`). **If `privateImageNo` is used, this argument is not available and vice versa.**   |
 | `privateImageNo` | `string` | conditional | Unique No of a private image that you have built. It can be got from `findPrivateImages` method(action `getMemberServerImageList`). **If `vmImageId` is used, this argument is not available and vice versa.** | 
 | `vmFlavorId` | `string` | optional | an Id for one of VM hardware templates. It can be got from `findFlavors` method(action `getServerProductList`).     |
 | `serverName` | `string` | optional | name for the resulting server. |
 | `serverDescription` | `string` | optional | description for the resulting server. |
 | `loginKeyName` | `string` | optional | The name of loginKey that is used for public key encryption. List of loginKeys can be got from `findLoginKeys` method(action `getLoginKeyList`). |
 | `feeSystemTypeCode` | `string` | optional | either `MTRAT` or `FXSUM`(default `MTRAT`) <br/> `MTRAT`: Pricing per instance-hour consumed for each instance. <br/> `FXSUM`: Flat rate pricing  |
 | `zoneNo` | `number` | optional | zone number to determine which zone the resulting VM will be located in. List of zones can be got from `findZones` method(action `getZoneList`).  | 
 | `accessControlGroup`<br/>`ConfigurationNoList` | `number[]` | optional  | The number list for predefined firewall configurations. That can be got from `findAccessControlGroup` method(`getAccessControlGroupList` action). **Length of list can be up to 5.** |
 | `userData` | `string` | optional | When first startup, VM executes `userData`. <br/>**Linux**: Python, Perl, Shell and etc are available.  At the beginning of script, there must be executable environment such as `#!/usr/bin/env python`, `#!/bin/perl` and `#!/bin/bash`.  <br/>**Windows**: Visual Basic script is available only. <br/> **\[Script should be written in English\]**   |      
  
  
### Use Case 1 - Create VM from a public image  
```javascript
client.compute.createServer({
    vmImageId: 'SPSW0LINUX000046',
    vmFlavorId: 'SPSVRSSD00000010',
    serverName: 'helloworld40',
    serverDescription: 'test',
    loginKeyName : 'testgb',
    accessControlGroupConfigurationNoList: [4656],
}, function(err, res) {
    if( err ) {
      return console.log( err.message );
    }
    
    console.log( res );
    // result example =>
    // { serverInstanceNo: 499172,
    //   serverName: 'helloworld40',
    //   serverDescription: 'test',
    //   cpuCount: 2,
    //   memorySize: 8589934592,
    //   baseBlockStorageSize: 53687091200,
    //   platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //   loginKeyName: 'testgb',
    //     isFeeChargingMonitoring: false,
    //   publicIp: '',
    //   privateIp: /**vm private ip**/,
    //   serverImageName: 'centos-7.3-64',
    //   serverInstanceStatus: { code: 'INIT', codeName: 'Server init state' },
    //   serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
    //   serverInstanceStatusName: 'init',
    //     createDate: '2017-10-13T02:25:36+0900',
    //   uptime: '2017-10-13T02:25:36+0900',
    //   vmImageId: 'SPSW0LINUX000046',
    //   vmFlavorId: 'SPSVRSSD00000010',
    //   isProtectServerTermination: false,
    //   portForwardingPublicIp: /**public ip for port forwarding**/,
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //   userData: '',
    //     accessControlGroupList: [ '' ] }
})
```

### Use Case 2 - Create VM from a private image
```javascript
client.compute.createServer({
    privateImageNo : 3803,
    vmFlavorId: 'SPSVRSSD00000010',
    serverName: 'helloworld41',
    serverDescription: 'test',
    loginKeyName : 'testgb',
    accessControlGroupConfigurationNoList: [4656],
    // userData: file//'#!/bin/bash \n\n echo test > ~/test'   //'#!/bin/bash \n\n echo helloworld > ~/helloworld \n touch ~/test'   // touch ~/helloWorld'  // Tilde  // yum update -y && yum upgrade -y
}, function(err, res) {
    if( err ) {
      return console.log( err.message );
    }
    
    console.log( res );
    // result example =>
    // { serverInstanceNo: 499184,
    //   serverName: 'helloworld44',
    //   serverDescription: 'test',
    //   cpuCount: 2,
    //   memorySize: 8589934592,
    //   baseBlockStorageSize: 53687091200,
    //   platformType: { code: 'UBS64', codeName: 'Ubuntu Server 64 Bit' },
    //   loginKeyName: 'testgb',
    //     isFeeChargingMonitoring: false,
    //   publicIp: '',
    //   privateIp: /**private ip**/,
    //   serverImageName: 'tensorflow-ubuntu-16.04-64-server',
    //   serverInstanceStatus: { code: 'INIT', codeName: 'Server init state' },
    //   serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
    //   serverInstanceStatusName: 'init',
    //     createDate: '2017-10-13T02:35:11+0900',
    //   uptime: '2017-10-13T02:35:11+0900',
    //   vmImageId: 'SPSW0LINUX000065',
    //   vmFlavorId: 'SPSVRSSD00000010',
    //   isProtectServerTermination: false,
    //   portForwardingPublicIp: /**public ip for port forwarding**/,
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //   userData: '',
    //     accessControlGroupList: [ '' ] }
})
```

### Use Case 3 - Create VM with `userData` script
```javascript
client.compute.createServer({
    vmImageId: 'SPSW0LINUX000046',
    vmFlavorId: 'SPSVRSSD00000010',
    serverName: 'helloworld45',
    serverDescription: 'test',
    loginKeyName : 'testgb',
    accessControlGroupConfigurationNoList: [4656],
    userData: "#!/bin/bash \n yum update -y && yum install -y vim \n mkdir ~/helloWorld"
}, function(err, res) {
    if( err ) {
      return console.log( err.message );
    }
    
    console.log( res );
    // result example =>
    // { serverInstanceNo: 499187,
    //   serverName: 'helloworld45',
    //   serverDescription: 'test',
    //   cpuCount: 2,
    //   memorySize: 8589934592,
    //   baseBlockStorageSize: 53687091200,
    //   platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //   loginKeyName: 'testgb',
    //     isFeeChargingMonitoring: false,
    //   publicIp: '',
    //   privateIp:  /**private ip**/,
    //   serverImageName: 'centos-7.3-64',
    //   serverInstanceStatus: { code: 'INIT', codeName: 'Server init state' },
    //   serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
    //   serverInstanceStatusName: 'init',
    //     createDate: '2017-10-13T02:40:02+0900',
    //   uptime: '2017-10-13T02:40:02+0900',
    //   vmImageId: 'SPSW0LINUX000046',
    //   vmFlavorId: 'SPSVRSSD00000010',
    //   isProtectServerTermination: false,
    //   portForwardingPublicIp: /**public ip for port forwarding**/,
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //   userData: '#!/bin/bash \n yum update -y && yum install -y vim \n mkdir ~/helloWorld',
    //     accessControlGroupList: [ '' ] }
})
```

### Use Case 4 - Create VM with `userData` script from a file
- source code
```javascript
client.compute.createServer({
    vmImageId: 'SPSW0LINUX000046',
    vmFlavorId: 'SPSVRSSD00000010',
    serverName: 'helloworld46',
    serverDescription: 'test',
    loginKeyName : 'testgb',
    accessControlGroupConfigurationNoList: [4656],
    userData: fs.readFileSync('./testFile.sh', 'utf8')
}, function(err, res) {
    if( err ) {
      return console.log( err.message );
    }
    
    console.log( res );
    // result example =>
    // { serverInstanceNo: 499190,
    //   serverName: 'helloworld46',
    //   serverDescription: 'test',
    //   cpuCount: 2,
    //   memorySize: 8589934592,
    //   baseBlockStorageSize: 53687091200,
    //   platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //   loginKeyName: 'testgb',
    //     isFeeChargingMonitoring: false,
    //   publicIp: '',
    //   privateIp:  /**private ip**/,
    //   serverImageName: 'centos-7.3-64',
    //   serverInstanceStatus: { code: 'INIT', codeName: 'Server init state' },
    //   serverInstanceOperation: { code: 'NULL', codeName: 'Server NULL OP' },
    //   serverInstanceStatusName: 'init',
    //     createDate: '2017-10-13T02:43:19+0900',
    //   uptime: '2017-10-13T02:43:19+0900',
    //   vmImageId: 'SPSW0LINUX000046',
    //   vmFlavorId: 'SPSVRSSD00000010',
    //   isProtectServerTermination: false,
    //   portForwardingPublicIp: /**public ip for port forwarding**/,
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   baseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //   userData: '#!/bin/bash\n\ntouch ~/helloworld\nmkdir ~/test\n',
    //     accessControlGroupList: [ '' ] }
})
```

- testFile.sh

```sh
#!/bin/bash

touch ~/helloworld
mkdir ~/test
```

---

## `rebootServer`, action `rebootServerInstances` 
Reboots the specified server with options.  
This method only works for the running VMs.

### Arguments  
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `serverInstanceNo` | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
  
  
### Example
```javascript
client.compute.rebootServer({ serverInstanceNo: 500601 }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }
    
    console.log( res );
    // response example=>
    // {
    //   "serverInstanceNo": 500601,
    //   "serverName": "helloworld48",
    //   "serverDescription": "test",
    //   "cpuCount": 2,
    //   "memorySize": 8589934592,
    //   "baseBlockStorageSize": 53687091200,
    //   "platformType": {
    //   "code": "LNX64",
    //     "codeName": "Linux 64 Bit"
    // },
    //   "loginKeyName": "testgb",
    //   "isFeeChargingMonitoring": false,
    //   "publicIp": "",
    //   "privateIp": /**privateIpValue**/,
    //   "serverImageName": "centos-7.3-64",
    //   "serverInstanceStatus": {
    //   "code": "RUN",
    //     "codeName": "Server run state"
    // },
    //   "serverInstanceOperation": {
    //   "code": "RESTA",
    //     "codeName": "Server RESTART OP"
    // },
    //   "serverInstanceStatusName": "rebooting",
    //   "createDate": "2017-10-14T03:19:42+0900",
    //   "uptime": "2017-10-15T21:19:43+0900",
    //   "vmImageId": "SPSW0LINUX000046",
    //   "vmFlavorId": "SPSVRSSD00000010",
    //   "isProtectServerTermination": false,
    //   "portForwardingPublicIp": /**portForwardingPublicIpValue**/,
    //   "zone": {
    //   "zoneNo": 2,
    //     "zoneName": "KR-1",
    //     "zoneDescription": "가산 NANG zone"
    // },
    //   "region": {
    //   "regionNo": 1,
    //     "regionCode": "KR",
    //     "regionName": "Korea"
    // },
    //   "baseBlockStorageDiskType": {
    //   "code": "NET",
    //     "codeName": "Network Storage"
    // },
    //   "userData": "#!/bin/bash\n\ntouch ~/helloworld\nmkdir ~/test\n",
    //   "accessControlGroupList": [
    //   {
    //     "accessControlGroup": {
    //       "accessControlGroupConfigurationNo": 4656,
    //       "accessControlGroupName": "ncloud-default-acg",
    //       "accessControlGroupDescription": "Default AccessControlGroup",
    //       "isDefault": true,
    //       "createDate": "2017-02-17T11:56:27+0900"
    //     }
    //   }
    // ]
    // }
})
```

---

## `stopServer`, action `stopServerInstances` 
Stops the specified server with options.  
This method only works for the running VMs.

### Arguments  
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `serverInstanceNo` | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
  
  
### Example
```javascript
client.compute.stopServer({ serverInstanceNo: "500601" }, function (err, res) {
  if ( err ) {
    return console.log( err.message );
  }

  console.log( res );
  // response example =>
  // {
  //   "serverInstanceNo": 500601,
  //   "serverName": "helloworld48",
  //   "serverDescription": "test",
  //   "cpuCount": 2,
  //   "memorySize": 8589934592,
  //   "baseBlockStorageSize": 53687091200,
  //   "platformType": {
  //   "code": "LNX64",
  //     "codeName": "Linux 64 Bit"
  // },
  //   "loginKeyName": "testgb",
  //   "isFeeChargingMonitoring": false,
  //   "publicIp": "",
  //   "privateIp": /**privateIpValue**/,
  //   "serverImageName": "centos-7.3-64",
  //   "serverInstanceStatus": {
  //   "code": "RUN",
  //     "codeName": "Server run state"
  // },
  //   "serverInstanceOperation": {
  //   "code": "SHTDN",
  //     "codeName": "Server SHUTDOWN OP"
  // },
  //   "serverInstanceStatusName": "shutting down",
  //   "createDate": "2017-10-14T03:19:42+0900",
  //   "uptime": "2017-10-15T21:22:01+0900",
  //   "vmImageId": "SPSW0LINUX000046",
  //   "vmFlavorId": "SPSVRSSD00000010",
  //   "isProtectServerTermination": false,
  //   "portForwardingPublicIp": /**portForwardingPublicIpValue**/,
  //   "zone": {
  //   "zoneNo": 2,
  //     "zoneName": "KR-1",
  //     "zoneDescription": "가산 NANG zone"
  // },
  //   "region": {
  //   "regionNo": 1,
  //     "regionCode": "KR",
  //     "regionName": "Korea"
  // },
  //   "baseBlockStorageDiskType": {
  //   "code": "NET",
  //     "codeName": "Network Storage"
  // },
  //   "userData": "#!/bin/bash\n\ntouch ~/helloworld\nmkdir ~/test\n",
  //   "accessControlGroupList": [
  //   {
  //     "accessControlGroup": {
  //       "accessControlGroupConfigurationNo": 4656,
  //       "accessControlGroupName": "ncloud-default-acg",
  //       "accessControlGroupDescription": "Default AccessControlGroup",
  //       "isDefault": true,
  //       "createDate": "2017-02-17T11:56:27+0900"
  //     }
  //   }
  // ]
  // }
})
```

---

## `startServer`, action `startServerInstances` 
Starts the specified server with options.  
This method only works for the stopped VMs.

### Arguments  
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `serverInstanceNo` | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
  
  
### Example
```javascript
client.compute.startServer({ serverInstanceNo: 500580 }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // response example=>
    // {
    //   "serverInstanceNo": 500580,
    //   "serverName": "testtest",
    //   "serverDescription": "",
    //   "cpuCount": 8,
    //   "memorySize": 17179869184,
    //   "baseBlockStorageSize": 53687091200,
    //   "platformType": {
    //   "code": "LNX64",
    //     "codeName": "Linux 64 Bit"
    // },
    //   "loginKeyName": "testgb",
    //   "isFeeChargingMonitoring": false,
    //   "publicIp": "",
    //   "privateIp": /**privateIpValue**/,
    //   "serverImageName": "centos-7.3-64",
    //   "serverInstanceStatus": {
    //   "code": "NSTOP",
    //     "codeName": "Server normal stopped state"
    // },
    //   "serverInstanceOperation": {
    //   "code": "START",
    //     "codeName": "Server START OP"
    // },
    //   "serverInstanceStatusName": "booting",
    //   "createDate": "2017-10-14T00:34:16+0900",
    //   "uptime": "2017-10-14T01:36:42+0900",
    //   "vmImageId": "SPSW0LINUX000046",
    //   "vmFlavorId": "SPSVRSSD00000007",
    //   "isProtectServerTermination": false,
    //   "portForwardingPublicIp": /**portForwardingPublicIpValue**/,
    //   "zone": {
    //   "zoneNo": 2,
    //     "zoneName": "KR-1",
    //     "zoneDescription": "가산 NANG zone"
    // },
    //   "region": {
    //   "regionNo": 1,
    //     "regionCode": "KR",
    //     "regionName": "Korea"
    // },
    //   "baseBlockStorageDiskType": {
    //   "code": "NET",
    //     "codeName": "Network Storage"
    // },
    //   "userData": "",
    //   "accessControlGroupList": [
    //   {
    //     "accessControlGroup": {
    //       "accessControlGroupConfigurationNo": 4656,
    //       "accessControlGroupName": "ncloud-default-acg",
    //       "accessControlGroupDescription": "Default AccessControlGroup",
    //       "isDefault": true,
    //       "createDate": "2017-02-17T11:56:27+0900"
    //     }
    //   }
    // ]
    // }
})
})
```

---

## `rebuildServer`, action `changeServerInstanceSpec` 
Rebuilds the specified server with options
This method only works for the stopped VMs.  
You may as well call `startServer` method to make the VM working because it keeps its STOPPED status after `rebuildServer` method executed. 

### Arguments  
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `serverInstanceNo` | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
  
  
### Example
```javascript
client.compute.rebuildServer( { serverInstanceNo: 500580, vmFlavorId: 'SPSVRSSD00000007' }, function (err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // response example=>
    // {
    //   "serverInstanceNo": 500580,
    //   "serverName": "testtest",
    //   "serverDescription": "",
    //   "cpuCount": 2,
    //   "memorySize": 4294967296,
    //   "baseBlockStorageSize": 53687091200,
    //   "platformType": {
    //   "code": "LNX64",
    //     "codeName": "Linux 64 Bit"
    // },
    //   "loginKeyName": "testgb",
    //   "isFeeChargingMonitoring": false,
    //   "publicIp": "",
    //   "privateIp": "10.33.2.140",
    //   "serverImageName": "centos-7.3-64",
    //   "serverInstanceStatus": {
    //   "code": "NSTOP",
    //     "codeName": "Server normal stopped state"
    // },
    //   "serverInstanceOperation": {
    //   "code": "CHNG",
    //     "codeName": "Server SPEC CHANGE OP"
    // },
    //   "serverInstanceStatusName": "changingSpec",
    //   "createDate": "2017-10-14T00:34:16+0900",
    //   "uptime": "2017-10-14T01:36:42+0900",
    //   "vmImageId": "SPSW0LINUX000046",
    //   "vmFlavorId": "SPSVRSSD00000003",
    //   "isProtectServerTermination": false,
    //   "portForwardingPublicIp": "220.230.112.133",
    //   "zone": {
    //   "zoneNo": 2,
    //     "zoneName": "KR-1",
    //     "zoneDescription": "가산 NANG zone"
    // },
    //   "region": {
    //   "regionNo": 1,
    //     "regionCode": "KR",
    //     "regionName": "Korea"
    // },
    //   "baseBlockStorageDiskType": {
    //   "code": "NET",
    //     "codeName": "Network Storage"
    // },
    //   "userData": "",
    //   "accessControlGroupList": [
    //   {
    //     "accessControlGroup": {
    //       "accessControlGroupConfigurationNo": 4656,
    //       "accessControlGroupName": "ncloud-default-acg",
    //       "accessControlGroupDescription": "Default AccessControlGroup",
    //       "isDefault": true,
    //       "createDate": "2017-02-17T11:56:27+0900"
    //     }
    //   }
    // ]
    // }
})
})
```

---

## `destroyServer`, action `terminateServerInstances` 
Destroys the specified server with options.  
This method only works for the stopped VMs.

### Arguments  
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `serverInstanceNo` | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
  
  
### Example
```javascript
client.compute.destroyServer({ serverInstanceNo: 500601 }, function(err, res) {
    if ( err ) {

      return console.log( err.message );
    }

    console.log( res );
    // response example=>
    // {
    //   "serverInstanceNo": 500601,
    //   "serverName": "helloworld48",
    //   "serverDescription": "test",
    //   "cpuCount": 2,
    //   "memorySize": 8589934592,
    //   "baseBlockStorageSize": 53687091200,
    //   "platformType": {
    //   "code": "LNX64",
    //     "codeName": "Linux 64 Bit"
    // },
    //   "loginKeyName": "testgb",
    //   "isFeeChargingMonitoring": false,
    //   "publicIp": "",
    //   "privateIp": "10.33.4.26",
    //   "serverImageName": "centos-7.3-64",
    //   "serverInstanceStatus": {
    //   "code": "NSTOP",
    //     "codeName": "Server normal stopped state"
    // },
    //   "serverInstanceOperation": {
    //   "code": "TERMT",
    //     "codeName": "Server TERMINATE OP"
    // },
    //   "serverInstanceStatusName": "terminating",
    //   "createDate": "2017-10-14T03:19:42+0900",
    //   "uptime": "2017-10-15T21:22:01+0900",
    //   "vmImageId": "SPSW0LINUX000046",
    //   "vmFlavorId": "SPSVRSSD00000010",
    //   "isProtectServerTermination": false,
    //   "portForwardingPublicIp": "220.230.112.133",
    //   "zone": {
    //   "zoneNo": 2,
    //     "zoneName": "KR-1",
    //     "zoneDescription": "가산 NANG zone"
    // },
    //   "region": {
    //   "regionNo": 1,
    //     "regionCode": "KR",
    //     "regionName": "Korea"
    // },
    //   "baseBlockStorageDiskType": {
    //   "code": "NET",
    //     "codeName": "Network Storage"
    // },
    //   "userData": "#!/bin/bash\n\ntouch ~/helloworld\nmkdir ~/test\n",
    //   "accessControlGroupList": [
    //   {
    //     "accessControlGroup": {
    //       "accessControlGroupConfigurationNo": 4656,
    //       "accessControlGroupName": "ncloud-default-acg",
    //       "accessControlGroupDescription": "Default AccessControlGroup",
    //       "isDefault": true,
    //       "createDate": "2017-02-17T11:56:27+0900"
    //     }
    //   }
    // ]
    // }
})
```

---

## `findRootPassword`, action `getRootPassword` 
Returns the password for SSH login to access the specified server.  

### Arguments  
 
 | Input parameter    | Type       | Required     | Description |
 |--------------------|------------|--------------|-------------|
 | `serverInstanceNo` | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
 | `privateKey`       | `string`   | **required** | The privateKey of loginKey assigned to the VM server.   |
  
  
### Example
```javascript
client.compute.findRootPassword({ serverInstanceNo: 500601, privateKey: fs.readFileSync('./testgb.pem', 'utf8')}, function(err, res) {
  if ( err ) {
      return console.log( err.message );
  }
  //
  //   console.log( res );
  //   // result example =>
  //   // { rootPassword: 'B7FEfi*aar' }
})
```