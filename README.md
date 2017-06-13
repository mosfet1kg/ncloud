ncloud
=======
[![NPM](https://nodei.co/npm/ncloud.png?compact=true)](https://nodei.co/npm/ncloud/)  
The NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js  
https://www.npmjs.com/package/ncloud  
**Currently, this package supports geolocation only.... The other functions are unstable...**

# Author
Gyubeom Choi <mosfet1kg@gmail.com>

# Installing Dependencies
```
$ npm install ncloud
or
$ yarn add ncloud
```

# Creating Instance
```javascript
var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});
```

# Usage
See following descriptions.
# OpenAPI : Geolocation
## getLocation, alias `findLocation`
### Arguments
| Name | Data Type | Required | Description                | Default |
|------|-----------|----------|----------------------------|---------|
| ip   | `string`  | <b>required</b> | An IP to find the its location |         |
| enc  | `string`  | optional | Encoding Method (either `utf8` or `euckr`) | `utf8`  |
| ext  | `string`  | optional | Flag for additional info (either `t` or `f`) | `f`   |


#### Examples
```javascript
client.openapi.geolocation.findLocation({ ip: '143.248.142.77'}, function( error, reply ){
    if(error){
        console.log( error );
    }else{
        console.log( reply );
        // expected Result =>
        // { country: 'KR', code: '3020054000', r1: '대전광역시', r2: '유성구' }

    }
});
```
```javascript
client.openapi.geolocation.findLocation({ ip: '143.248.142.77', ext: 't'}, function( error, reply ){
    if(error){
        console.log( error );
    }else{
        console.log( reply );
        // expected Result =>
        // { country: 'KR',
        //   code: '3020054000',
        //   r1: '대전광역시',
        //   r2: '유성구',
        //   r3: '구성동',
        //   lat: 36.370724,
        //   long: 127.3661,
        //   net: 'Korea Advanced Institute of Science and Technology' }
    }
});
```  

# Compute : Product  
## getServerImageProductList, alias `findImages` 
Returns the whole list of VM Image Types.

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
client.compute.findImages( function( error, response ){
    if( error ){
        console.log( error );
    }else {
        console.log(response);

        // response example =>
        // [ { vmImageCode: 'SPSW0LINUX000043',
        //     productName: 'centos-5.11-64',
        //     productType: { code: 'LINUX', codeName: 'Linux' },
        //     productDescription: 'CentOS 5.11(64bit)',
        //     infraResourceType: { code: 'SW', codeName: 'Software' },
        //     cpuCount: 0,
        //     memorySize: 0,
        //     baseBlockStorageSize: 0,
        //     platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
        //     osInformation: 'CentOS 5.11 (64-bit)',
        //     addBlockStroageSize: 0 },
        //          /** more items **/
        // ]
    }
});
```


## getServerProductList, alias `findFlavors`  
Returns the whole list for VM Flavor types which are compatible with a VM Image Type`vmImageCode`.  

### Arguments  

| Input parameter   | type       | Required    | description |
|-------------------|------------|-------------|-------------|
| `vmImageCode` | `string`   | **required**|  The VM Image Type Code is used for searching the whole compatible list of VM Flavor Type. Flavors are templates used to define VM configurations such as the the number of cores, storage capacity and etc. `vmImageCode` can be obtained from `findImages`|

### Examples  
```javascript
client.compute.findFlavors( { vmImageCode: 'SPSW0LINUX000031' }, function( error, response ){
    if( error ){
        console.log( error );
    }else{
        console.log( response );
        // response example =>
        // [ { vmFlavorCode: 'SPSVRSTAND000056',
        //     productName: 'vCPU 1EA, Memory 1GB, Disk 50GB',
        //     productType: { code: 'MICRO', codeName: 'Micro Server' },
        //     productDescription: 'vCPU 1EA, Memory 1GB, Disk 50GB',
        //     infraResourceType: { code: 'SVR', codeName: 'Server' },
        //     cpuCount: 1,
        //     memorySize: 1073741824,
        //     baseBlockStorageSize: 53687091200,
        //     osInformation: '',
        //     diskType: { code: 'NET', codeName: 'Network Storage' },
        //     addBlockStroageSize: 0 },
        //              /** more items**/
        // }]
    }
});
```

# Compute : Zone  
## getZoneList, alias `findZones` 
Returns lists all possible zones available in the callback `f(err, zones)`.   
You can use a `zoneNo` for an option to create VM instance in that zone if needed.     
Refer to `createServer` method. 

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
client.compute.findZones( function( error, response ){
     if( error ){
         console.log( error );
     }else {
         console.log( response );
         // response example =>
         // [ { zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' } } ]
     }
 });
```

# Compute : LoginKey  
## getLoginKeyList, alias `findLoginKeys` 
...
### Arguments  
 No Input Arguments
 
### Examples  
```javascript
  client.compute.findLoginKeys( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ { loginKey:
      //   { fingerprint: /** finger print value **/,
      //     keyName: 'ncp',
      //     createDate: '2017-05-24T00:00:24+0900' } } ]
    }
  });
```

# Compute : ServerInstance  
## getServerInstanceList, alias `findServers` 
...
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
      // [ { serverInstanceNo: 362133,
      //   serverName: '/** instance name **/',
      //   serverDescription: '',
      //   cpuCount: 2,
      //   memorySize: 4294967296,
      //   baseBlockStorageSize: 53687091200,
      //   platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
      //   loginKeyName: 'ncp',
      //     /*** more items  **/
    }
});
```


Other functions are being prepared.