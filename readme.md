The NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js <br/>
https://www.npmjs.com/package/ncloud<br/> 
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

### Geolocation
```javascript
var Ncloud = require('ncloud');

var client = new Ncloud({
  oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
  oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});

client.openapi.geolocation.getLocation({ ip: '143.248.142.77', ext: 't' }, function( error, reply ){
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


### Compute
```javascript
var Ncloud = require('../../lib/');

var client = new Ncloud({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});

client.compute.product.getServerImageProductList( function( error, reply ){
    if( error ){
        console.log( error );
    }else{
        console.log( reply.getServerImageProductListResponse.productList[0].product );

        // reply example
        // { product:
        //     [ { productCode: 'SPSW0LINUX000043',
        //         productName: 'centos-5.11-64',
        //         productType: [Object],
        //         productDescription: 'CentOS 5.11(64bit)',
        //         infraResourceType: [Object],
        //         cpuCount: 0,
        //         memorySize: 0,
        //         baseBlockStorageSize: 0,
        //         platformType: [Object],
        //         osInformation: 'CentOS 5.11 (64-bit)',
        //         addBlockStroageSize: 0 },
        //         /***/
        //     ]
        // }
    }
})

client.compute.product.getServerProductList( {serverImageProductCode: 'SPSW0LINUX000031'}, function( error, reply ){
    if( error ){
        console.log( error );
    }else{
        console.log( reply.getServerProductListResponse.productList[0].product );

        // reply example
        // [ { productCode: 'SPSVRSTAND000056',
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
        //     /***/
        // }]

    }
});
```
Other functions are being prepared.
