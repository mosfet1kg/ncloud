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

# Documentation  
Refer to the following link  
[Npm Ncloud Documentation Link](https://mosfet1kg.github.io/ncloud/docs/)


# Release Note
v0.1.15
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