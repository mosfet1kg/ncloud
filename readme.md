ncloud
=======
[![NPM](https://nodei.co/npm/ncloud.png?compact=true)](https://nodei.co/npm/ncloud/)  
The NAVER Cloud Platform(https://www.ncloud.com/) Library for Node.js  
https://www.npmjs.com/package/ncloud  
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


# Compute : Product
<b>** Please be aware that the meaning of product code can be different depending on functions. ** </b>  
&nbsp;&nbsp;Although functions belonging to product return a json response containing `productCode` key, returning `productCode` value from `getServerImageProductList` means the code for VM server image type.<br/>
The other from `getServerProductList` means the code for VM server type regarding the number of CPU, memory capacity, hardware capacity and etc. <br/>
The notation for `productCode` also shows the difference between these functions. For example, the prefix `SPSVRSTAND` is only used for specifying VM server type.<br/>
&nbsp;&nbsp;The following is an example of which prefix is used for VM server type and VM Image Type.

| prefix      | `productCode`     | `productName`                       |  description     | returning from              |
|-------------|-------------------|-------------------------------------|------------------|-----------------------------|
| SPSW0WINNT  | SPSW0WINNT000043  |  mssql(2016std)-win-2012-64-R2      |  VM Image Type   | `getServerImageProductList` |
| SPSW0LINUX  | SPSW0LINUX000043  |  centos-5.11-64                     |  VM Image Type   | `getServerImageProductList` |
| SPSVRSTAND  | SPSVRSTAND000047  |  vCPU 12EA, Memory 32GB, Disk 800GB |  VM Server Type  | `getServerProductList`      |
| SPSVRSTAND  | SPSVRSTAND000029  |  vCPU 8EA, Memory 16GB, Disk 400GB  |  VM Server Type  | `getServerProductList`      |


## getServerImageProductList
### Arguments
| Name | Data Type | Required | Description                | Default |
|------|-----------|----------|----------------------------|---------|
| exclusionProductCode | `string` | optional | A code for VM server Image to exclude from results |   |
| productCode | `string` | optional | Only when one result containing a input code for VM Server Image is needed  |   |
| platformTypeCodeList | `array` | optional |  Only when results containing specific product types are needed. Refer to following table to find the `platformTypeCodeList` you want. |   |

#### platformTypeCodeList
| platform   | platformTypeCodeList |
|------------|----------------------|
| Linux 32bit |  `LNX32`            |
| Linux 64bit |  `LNX64`            |
| Win 32Bit   |  `WND32`            |
| Win 64Bit   |  `WND64`            |
| Ubuntu Desktop 64Bit | `UBD64`    |
| Ubuntu Server 64Bit  | `UBS64`    |

### Examples
**Request the whole list of VM Images without the type has a VM Image Code`exclusionProductCode`.**  

| arguments            | type     | description   |
|----------------------|----------|---------------|
| exclusionProductCode | `string` | VM Image Code |

```javascript
client.compute.product.getServerImageProductList({"exclusionProductCode": "{{The code for VM Image Type}}" }, function(){/** your own code **/});
```  
---
**Request one VM Image info containing a VM Image Code`productCode`.**

| arguments            | type     | description   |
|----------------------|----------|---------------|
| productCode          | `string` | VM Image Code |
```javascript
client.compute.product.getServerImageProductList({"productCode": "{{The code for VM Image Type}}" }, function(){/** your own code **/});
```  
---
**Request the whole list of VM Images which match VM Image Code(s)`platformTypeCodeList`.**

| arguments            | type     | description   |
|----------------------|----------|---------------|
| platformTypeCodeList | `array`  | VM Image Code(s)|
```javascript
client.compute.product.getServerImageProductList({"platformTypeCodeList": ["{{The code for Platform Type}}"] }, function(){/** your own code **/});
```
---
**Request the whole list of VM Images which match VM Image Code(s)`platformTypeCodeList` except a VM Image Code`exclusionProductCode`.**  

| arguments            | type     | description     |
|----------------------|----------|-----------------|
| exclusionProductCode | `string` | VM Image Code   |
| platformTypeCodeList | `array`  | VM Image Code(s)|
```javascript
client.compute.product.getServerImageProductList({"exclusionProductCode": "{{The code for VM Image Type}}", "platformTypeCodeList": ["{{The code for Platform Type}}"] }, function(){/** your own code **/});
```
---
### Code
```javascript
var Ncloud = require('ncloud');

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
     // [ { productCode: 'SPSW0LINUX000043',   // VM Image Type
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
       // { productCode: 'SPSW0WINNT000043',   // VM Image Type
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
        // [ { productCode: 'SPSW0LINUX000043',   // VM Image Type
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
        // ,{ productCode: 'SPSW0WINNT000043',   // VM Image Type
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

## getServerProductList
### Arguments

| Name | Data Type | Required | Description                | Default |
|------|-----------|----------|----------------------------|---------|
| exclusionProductCode | `string` | optional | A code for **VM Type** to exclude from results |   |
| productCode | `string` | optional | Only when one result containing a input code for **VM Type** is needed  |   |
| serverImageProductCode | `string` | **required** |   Only when one result containing a input code for **VM server Image** is needed |   |

### Examples
**Request available VM Types for the input VM Image Code`serverImageProductCode`.**  

| arguments              | type     | description     |
|------------------------|----------|-----------------|
| serverImageProductCode | `string` | VM Image Code   |

```javascript
client.compute.product.getServerProductList( { serverImageProductCode: "{{VM Image Code}}" }, function( error, reply ){ /** Your Own Code **/} );
```
---
**Request available VM Types for the input VM Image Code`serverImageProductCode` except the input VM Type Code`exclusionProductCode`.**

| arguments              | type     | description     |
|------------------------|----------|-----------------|
| exclusionProductCode   | `string` | VM Type Code    |
| serverImageProductCode | `string` | VM Image Code   |
```javascript
client.compute.product.getServerProductList( {  exclusionProductCode:"{{VM Type Code}}", serverImageProductCode: "{{VM Image Code}}" }, function( error, reply ){ /** Your Own Code **/} );
```
---
**Request one VM Types for the input VM Type Code`productCode` among the whole list of VM Image Code`serverImageProductCode`**  

| arguments              | type     | description     |
|------------------------|----------|-----------------|
| productCode            | `string` | VM Type Code    |
| serverImageProductCode | `string` | VM Image Code   |
```javascript
client.compute.product.getServerProductList( {  productCode:"{{VM Type Code}}", serverImageProductCode: '{{VM Image Code}}' }, function( error, reply ){ /** Your Own Code **/});
```

---
### Code

```javascript
var Ncloud = require('ncloud');

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
        //  /** available VM Types **/
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
