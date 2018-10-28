ncloud
======
![](https://img.shields.io/node/v/ncloud.svg) 
[![GitHub license](https://img.shields.io/github/license/mosfet1kg/ncloud.svg)](https://github.com/mosfet1kg/ncloud/blob/master/LICENSE)
  
  
[![NPM](https://nodei.co/npm/ncloud.png?compact=true)](https://nodei.co/npm/ncloud/)  
  
![](./docs/assets/ncloudicon-01.png)   


> 네이버 클라우드 플랫폼 SDK입니다.  
> 현재 최신 API 스펙 (v2)에 맞춰서 개선작업중에 있습니다.  
> 이 저장소는 Ncloud의 Official 저장소가 아닙니다.   
> 문의하실 내용이 있다면, 이슈에 등록해주세요. 



NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js  
This project is inspired from [pkgcloud](https://github.com/pkgcloud/pkgcloud).  
**Currently, this package supports geolocation only. The other functions are unstable.**

# 개인 블로그  

https://mosfet1kg.github.io/

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
        accessKey: "$ACCESS_KEY_ID$",
        secretKey: "$SECRET_KEY$",
});
```
**ES6 or above**
```javascript
import * as ncloud from 'ncloud';

const client = ncloud.createClient({
     accessKey: "$ACCESS_KEY_ID$",
     secretKey: "$SECRET_KEY$",
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
const geoLocation = client.PaaS.geoLocation();

const geolocationResponse = await geoLocation.geoLocation({
  ip: '143.248.142.77'
});

console.log(geolocationResponse);
//  { returnCode: 0,
//   requestId: 'e03c4779-0740-45dc-9462-9cc0620ea597',
//   geoLocation: { country: 'KR', code: '3020054000', r1: '대전광역시', r2: '유성구' } }
```


```javascript
const geoLocation = client.PaaS.geoLocation();

const geolocationResponse = await geoLocation.geoLocation({
  ip: '143.248.142.77',
  ext: 't'
});

console.log(geolocationResponse);
// expected Result =>
// { country: 'KR',
//   code: '3020054000',
//   r1: '대전광역시',
//   r2: '유성구',
//   r3: '구성동',
//   lat: 36.370724,
//   long: 127.3661,
//   net: 'Korea Advanced Institute of Science and Technology' }
```

Other functions are being prepared.

# Others 
`ncloud` supports type definitions. It is readily available in typescript.  
