The NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js https://www.npmjs.com/package/ncloud<br/> 
Currently, this package supports geolocation only....

# Author 
Gyubeom Choi <mosfet1kg@gmail.com>

# Installing Dependencies
```
$ npm install ncloud
or
$ yarn add ncloud
```

# Usage
```javascript
var Ncloud = require('ncloud');

var client = new Ncloud({
  oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
  oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});

client.openapi.geolocation.getLocation('143.248.142.77', function( error, reply ){
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
```