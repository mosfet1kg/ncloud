# Introduction

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

# Quick Links
### Compute

| Category           | Action                    |      Method            |
|--------------------|---------------------------|------------------------|
| AccessControlGroup | getAccessControlGroupList | [findAccessControlGroup](./compute/accesscontrolgroup/accesscontrolgroup-01.md#findaccesscontrolgroup-action-getaccesscontrolgrouplist) |
| LoginKey           | getLoginKeyList           | [findLoginKeys](./compute/loginkey/loginkey-01.md#findloginkeys-action-getloginkeylist)          |
| MemberServerImage  | getMemberServerImageList  | [findPrivateImages](./compute/memberserverimage/memberserverimage-01.md#findprivateimages-action-getmemberserverimagelist)      |
| MemberServerImage  | createMemberServerImage   | [createPrivateImage](./compute/memberserverimage/memberserverimage-01.md#createprivateimage-action-creatememberserverimage)     |
| MemberServerImage  | deleteMemberServerImages  | [destroyPrivateImages](./compute/memberserverimage/memberserverimage-01.md#destroyprivateimages-action-deletememberserverimages)   |
| Product            | getServerImageProductList | [findPublicImages](./compute/product/product-01.md#findpublicimages-action-getserverimageproductlist)       |
| Product            | getServerProductList      | [findFlavors](./compute/product/product-01.md#findflavors-action-getserverproductlist)            |
| ServerInstance     | getServerInstanceList     | [findServers](./compute/serverinstance/serverinstance-01.md#findservers-action-getserverinstancelist)            |
| ServerInstance     | createServerInstances     | [createServer](./compute/serverinstance/serverinstance-01.md#createserver-action-createserverinstances)           |
| Zone               | getZoneList               | [findZones](./compute/zone/zone-01.md#findzones-action-getzonelist)              |


### OpenAPI

| Category          | Action                     | Method                 |
|-------------------|----------------------------|------------------------|
| Geolocation       | getLocation                | [findLocation](./openapi/geolocation/geo-1.md#findlocation-action-getlocation)       |
 

# Others 
`ncloud` supports type definitions. It is readily available in typescript.  
![](./assets/ts-01.png)