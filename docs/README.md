# Introduction

ncloud
======
![](https://img.shields.io/node/v/ncloud.svg) 
[![GitHub license](https://img.shields.io/github/license/mosfet1kg/ncloud.svg)](https://github.com/mosfet1kg/ncloud/blob/master/LICENSE)
  
  
[![NPM](https://nodei.co/npm/ncloud.png?compact=true)](https://nodei.co/npm/ncloud/)  
  
![](./docs/assets/ncloudicon-01.png)   
NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js  
This project is inspired from [pkgcloud](https://github.com/pkgcloud/pkgcloud).  
**Currently, this package supports geolocation only. The other functions are unstable.**

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
| AccessControlGroup | getAccessControlGroupList | [findAccessControlGroups](./compute/accesscontrolgroup/accesscontrolgroup-01.md#findaccesscontrolgroup-action-getaccesscontrolgrouplist) |
| AccessControlGroup | getAccessControlRuleList  | [findAccessControlRules](./compute/accesscontrolgroup/accesscontrolgroup-01.md#findaccesscontrolrules-action-getaccesscontrolrulelist) |
| LoginKey           | getLoginKeyList           | [findLoginKeys](./compute/loginkey/loginkey-01.md#findloginkeys-action-getloginkeylist)          |
| LoginKey           | createLoginKey            | [createLoginKey](./compute/loginkey/loginkey-01.md#createloginkey-action-createloginkey)          |
| MemberServerImage  | getMemberServerImageList  | [findPrivateImages](./compute/memberserverimage/memberserverimage-01.md#findprivateimages-action-getmemberserverimagelist)      |
| MemberServerImage  | createMemberServerImage   | [createPrivateImage](./compute/memberserverimage/memberserverimage-01.md#createprivateimage-action-creatememberserverimage)     |
| MemberServerImage  | deleteMemberServerImages  | [destroyPrivateImage](./compute/memberserverimage/memberserverimage-01.md#destroyprivateimages-action-deletememberserverimage)   |
| PortForwarding     | getPortForwardingRuleList | [findPortForwardingRules](./compute/portforwarding/port-01.md#findportforwardingrules-action-getportforwardingrulelist)       |
| PortForwarding     | addPortForwardingRules    | [createPortForwardingRule](./compute/portforwarding/port-01.md#createportforwardingrule-action-addportforwardingrules)       |
| PortForwarding     | deletePortForwardingRules | [destroyPortForwardingRule](./compute/portforwarding/port-01.md#destroyportforwardingrule-action-deleteportforwardingrules)       |
| Product            | getServerImageProductList | [findPublicImages](./compute/product/product-01.md#findpublicimages-action-getserverimageproductlist)       |
| Product            | getServerProductList      | [findFlavors](./compute/product/product-01.md#findflavors-action-getserverproductlist)            |
| PublicIpInstance   | getPublicIpInstanceList   | [findPublicIpInstances](./compute/publicipinstance/publicipinstance-01.md#findpublicipinstances-action-getpublicipinstancelist) |
| PublicIpInstance   | createPublicIpInstance    | [createPublicIpInstance](./compute/publicipinstance/publicipinstance-01.md#createpublicipinstance-action-createpublicipinstance) |
| PublicIpInstance   | associatePublicIpWithServerInstance    | [attachPublicIpInstance](./compute/publicipinstance/publicipinstance-01.md#attachpublicipinstance-action-associatepublicipwithserverinstance) |
| PublicIpInstance   | disassociatePublicIpFromServerInstance | [detachPublicIpInstance](./compute/publicipinstance/publicipinstance-01.md#detachpublicipinstance-action-disassociatepublicipfromserverinstance) |
| PublicIpInstance   | deletePublicIpInstances   | [destroyPublicIpInstance](./compute/publicipinstance/publicipinstance-01.md#destroypublicipinstance-action-deletepublicipinstances) |
| Region             | getRegionList             | [findRegions](./compute/region/region-01.md#findregions-action-getRegionlist)            |
| ServerInstance     | getServerInstanceList     | [findServers](./compute/serverinstance/serverinstance-01.md#findservers-action-getserverinstancelist)            |
| ServerInstance     | createServerInstances     | [createServer](./compute/serverinstance/serverinstance-01.md#createserver-action-createserverinstances)           |
| ServerInstance     | rebootServerInstances     | [rebootServer](./compute/serverinstance/serverinstance-01.md#rebootserver-action-rebootserverinstances)           |
| ServerInstance     | stopServerInstances       | [stopServer](./compute/serverinstance/serverinstance-01.md#stopserver-action-stopserverinstances)           |
| ServerInstance     | startServerInstances      | [startServer](./compute/serverinstance/serverinstance-01.md#startserver-action-startserverinstances)           |
| ServerInstance     | changeServerInstanceSpec  | [rebuildServer](./compute/serverinstance/serverinstance-01.md#rebuildserver-action-changeserverinstancespec)           |
| ServerInstance     | terminateServerInstances  | [destroyServer](./compute/serverinstance/serverinstance-01.md#destroyserver-action-terminateserverinstances)           |
| ServerInstance     | getRootPassword           | [findRootPassword](./compute/serverinstance/serverinstance-01.md#findrootpassword-action-getrootpassword)           |
| Zone               | getZoneList               | [findZones](./compute/zone/zone-01.md#findzones-action-getzonelist)              |

### Management

| Category          | Action                     | Method                 |
|-------------------|----------------------------|------------------------|
| Monitoring        | getListMetrics             | [findMetrics](./management/monitoring-01.md#findmetrics-action-getlistmetrics)       |
| Monitoring        | getMetricStatistics        | [findStatistics](./management/monitoring-01.md#findstatistics-action-getmetricstatistics)       |
 
### Storage
| Category  | Method |
|-----------|--------|
| Storage   | [uploadFile](./storage/storage-01.md#uploadfile)  |
| Storage   | [downloadFile](./storage/storage-01.md#downloadfile) |
| Storage   | [deleteFile](./storage/storage-01.md#deletefile)  |
| Storage   | [findFiles](./storage/storage-01.md#findfiles)  |
| Storage   | [createFolder](./storage/storage-01.md#createfolder)  |
| Storage   | [deleteFolder](./storage/storage-01.md#deletefolder)  |
| Storage   | [findAcl](./storage/storage-01.md#findacl)  |  
| Storage   | [putAcl](./storage/storage-01.md#putacl)  | 
| Storage   | [makeAclPristine](./storage/storage-01.md#makeaclpristine)  | 
  
### OpenAPI

| Category          | Action                     | Method                 |
|-------------------|----------------------------|------------------------|
| Geolocation       | getLocation                | [findLocation](./openapi/geolocation/geo-01.md#findlocation-action-getlocation)       |
 

# Others 
`ncloud` supports type definitions. It is readily available in typescript.  
![](./assets/ts-01.png)