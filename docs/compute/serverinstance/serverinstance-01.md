# Compute : ServerInstance  
## `findServers`, action `getServerInstanceList` 
Lists all servers that are available to use on your ncloud account.  
Callback returns `f(err, servers)` where `servers` is an `Array`.

### Arguments  
 No Input Arguments
 
### Examples  
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