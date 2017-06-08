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

# Usage
See following descriptions.
# OpenAPI : Geolocation
## getLocation
### Arguments
| Name | Data Type | Required | Description                | Default |
|------|-----------|----------|----------------------------|---------|
| ip   | `string`  | <b>required</b> | An IP to find the its location |         |
| enc  | `string`  | optional | Encoding Method (either `utf8` or `euckr`) | `utf8`  |
| ext  | `string`  | optional | Flag for additional info (either `t` or `f`) | `f`   |


#### Examples
```javascript
var Ncloud = require('ncloud');

var client = new Ncloud({
  oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
  oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});

client.openapi.geolocation.getLocation({ ip: '143.248.142.77'}, function( error, reply ){
    if(error){
        console.log( error );
    }else{
        console.log( reply );
        // expected Result =>
        // {   returnCode: 0,
        //     requestId: '067eef5e-a1aa-4e13-8704-7ee2d13ae3e6',
        //     geoLocation: { country: 'KR', code: '3020054000', r1: '대전광역시', r2: '유성구' } }
    }
});

client.openapi.geolocation.getLocation({ ip: '143.248.142.77', ext: 't'}, function( error, reply ){
    if(error){
        console.log( error );
    }else{
        console.log( reply );
        // expected Result =>
        // { returnCode: 0,
        //   requestId: 'b27dcce8-13b9-4186-85be-8e773dc28f2e',
        //   geoLocation:
        //    { country: 'KR',
        //      code: '3020054000',
        //      r1: '대전광역시',
        //      r2: '유성구',
        //      r3: '구성동',
        //      lat: 36.370724,
        //      long: 127.3661,
        //      net: 'Korea Advanced Institute of Science and Technology' } }
    }
});
```


# Compute : Zone  
## getZoneList, alias `findZones` 
...

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
var Ncloud = require('ncloud');

var client = new Ncloud({
   oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
   oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});

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

Other functions are being prepared.