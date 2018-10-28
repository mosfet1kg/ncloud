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


# Others 
`ncloud` supports type definitions. It is readily available in typescript.  
![](./assets/ts-01.png)