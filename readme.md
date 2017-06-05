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
#### Actions
##### getLocation
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


### Compute
#### Actions
##### getServerImageProductList
```javascript
var Ncloud = require('../../lib/');

var client = new Ncloud({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});

client.compute.product.getServerImageProductList({"exclusionProductCode": "SPSW0WINNT000045" }, function( error, reply ){
    if( error ){
        console.log( error );
    }else{
        console.log( reply.getServerImageProductListResponse.productList[0].product );

     // reply example
     //  /** The results without the productCode `SPSW0WINNT000045` **/
     // [ { productCode: 'SPSW0LINUX000043',
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
     //      /**  **/
    //  }]
    }
});

client.compute.product.getServerImageProductList({"productCode": "SPSW0WINNT000043" }, function( error, reply ){
    if( error ){
        console.log( error );
    }else{
        console.log( reply.getServerImageProductListResponse.productList[0].product );

       // reply example
       // /** The result containing the info about productCode `SPSW0WINNT000043`  
       // { productCode: 'SPSW0WINNT000043',
       //   productName: 'mssql(2016std)-win-2012-64-R2',
       //   productType: { code: 'WINNT', codeName: 'Windows NT' },
       //   productDescription: 'Windows 2012 Server R2 with MSSQL 2016 Standard',
       //   infraResourceType: { code: 'SW', codeName: 'Software' },
       //   cpuCount: 0,
       //   memorySize: 0,
       //   baseBlockStorageSize: 0,
       //   platformType: { code: 'WND64', codeName: 'Windows 64 Bit' },
       //   osInformation: 'Windows Server 2012 R2 with MSSQL 2016 Standard (64-bit)',
       //   addBlockStroageSize: 0 
       // }
    }
});

client.compute.product.getServerImageProductList({ platformTypeCodeList: ['LNX64','WND64']}, function( error, reply ){
    if( error ){
        console.log( error );
    }else{
        console.log( reply.getServerImageProductListResponse.productList[0].product );

        // reply example
        // /** The results containing Linux 64Bits and Win 64bits platforms
        // [ { productCode: 'SPSW0LINUX000043',
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
        //     /** **/   
        // } ]        

    }
});


// Composing Variables is also possible
client.compute.product.getServerImageProductList({ "exclusionProductCode": "SPSW0WINNT000045", platformTypeCodeList: ['LNX64','WND64']}, function( error, reply ){
    if( error ){
        console.log( error );
    }else{
        console.log( reply.getServerImageProductListResponse.productList[0].product );

        // reply example
        // /** The productCode `SPSW0WINNT000045` is left off from the result of Linux64bits and Win64bits **/
        // [
        //   /**  **/
        // ,{ productCode: 'SPSW0WINNT000043',
        //    productName: 'mssql(2016std)-win-2012-64-R2',
        //    productType: { code: 'WINNT', codeName: 'Windows NT' },
        //    productDescription: 'Windows 2012 Server R2 with MSSQL 2016 Standard',
        //    infraResourceType: { code: 'SW', codeName: 'Software' },
        //    cpuCount: 0,
        //    memorySize: 0,
        //    baseBlockStorageSize: 0,
        //    platformType: { code: 'WND64', codeName: 'Windows 64 Bit' },
        //    osInformation: 'Windows Server 2012 R2 with MSSQL 2016 Standard (64-bit)',
        //    addBlockStroageSize: 0 } ]       

    }
});
```

##### getServerProductList
```javascript
var Ncloud = require('../../lib/');
   
var client = new Ncloud({
   oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
   oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
});
   
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
