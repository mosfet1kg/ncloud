ncloud
======
![](https://img.shields.io/node/v/ncloud.svg) 
[![GitHub license](https://img.shields.io/github/license/mosfet1kg/ncloud.svg)](https://github.com/mosfet1kg/ncloud/blob/master/LICENSE)
  
  
[![NPM](https://nodei.co/npm/ncloud.png?compact=true)](https://nodei.co/npm/ncloud/)  
  
![](./docs/assets/ncloudicon-01.png)   
NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js  
This project is inspired from [pkgcloud](https://github.com/pkgcloud/pkgcloud).  
**Currently, this package supports geolocation only. The other functions are unstable.**

# Notice
This project welcomes new contributors and invites everyone to participate.  
My aim is to build an open community. There are many different ways to get involved:  

- Adding new features, enhancements, tests or fixing bugs
- Pull request reviews
- Release management and verification
- Documentation

People that help with the project in any of the above categories or other ways are contributors.

# Installing Dependencies
```
$ npm install ncloud
or
$ yarn add ncloud
```

# Creating Instance
**ES5**
```javascript
var ncloud = require('ncloud');
var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});
```
**ES6 or above**
```javascript
import * as ncloud from 'ncloud';

const client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});
```

# Documentation  
Refer to the following link  
[Npm Ncloud Documentation Link](https://mosfet1kg.github.io/ncloud/docs/)


# Release Note
v0.1.31
  - Add new features ( management/storage )

v0.1.28
  - Add new features ( management/monitoring )

v0.1.18
  - Add new features ( publicIpInstance, portForwarding, region )

v0.1.17
  - Add `rebootServer` method(action `rebootServerInstances`)
  - Add `stopServer` method(action `stopServerInstances`)
  - Add `startServer` method(action `startServerInstances`)
  - Add `rebuildServer` method(action `changeServerInstanceSpec`)
  - Add `destroyServer` method(action `terminateServerInstances`)
  - Add `findRootPassword` method(action `getRootPassword`)  
  - Add `createLoginKey` method(action `createLoginKey`)  
        
v0.1.16
  - Add `createServer` method(action `createServerInstances`)
  
v0.1.12
  - Add `destroyPrivateImages` method(action `deleteMemberServerImages`)
   
v0.1.11
  - Add `createPrivateImage` method(action `createMemberServerImage`) 
  
v0.1.10
  - Add `findPrivateImages` method(action `getMemberServerImageList`) 


# Usage Example
See following descriptions.
# OpenAPI : Geolocation
## `findLocation`, action `getLocation`
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

Other functions are being prepared.

# Others 
`ncloud` supports type definitions. It is readily available in typescript.  