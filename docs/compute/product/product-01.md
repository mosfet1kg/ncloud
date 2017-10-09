# Compute : Product  
## `findPublicImages`, action `getServerImageProductList` 
Returns the whole list of VM Image Types.

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
client.compute.findPublicImages( function( error, response ){
    if( error ){
        console.log( error );
    }else {
        console.log(response);

        // response example =>
        // [ { vmImageId: 'SPSW0LINUX000043',
        //     vmImageName: 'centos-5.11-64',
        //     vmImageType: { code: 'LINUX', codeName: 'Linux' },
        //     vmImageDescription: 'CentOS 5.11(64bit)',
        //     infraResourceType: { code: 'SW', codeName: 'Software' },
        //     cpuCount: 0,
        //     memorySize: 0,
        //     baseBlockStorageSize: 0,
        //     platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
        //     osInformation: 'CentOS 5.11 (64-bit)',
        //     addBlockStroageSize: 0 },
        //          /** more items **/
        // ]
    }
});
```

---

## `findFlavors`, action `getServerProductList` 
Returns the whole list for VM Flavor types which are compatible with a VM Image Type`vmImageId`.  

### Arguments  

| Input parameter   | type       | Required    | description |
|-------------------|------------|-------------|-------------|
| `vmImageId` | `string`   | **required**|  The VM Image Type Id is used for searching the whole compatible list of VM Flavor Type. Flavors are templates used to define VM configurations such as the the number of cores, storage capacity and etc. `vmImageId` can be obtained from `findPublicImages`|

### Examples  
```javascript
client.compute.findFlavors( { vmImageId: 'SPSW0LINUX000031' }, function( error, response ){
    if( error ){
        console.log( error );
    }else{
        console.log( response );
        // response example =>
        // [ { vmFlavorId: 'SPSVRSTAND000056',
        //     vmFlavorName: 'vCPU 1EA, Memory 1GB, Disk 50GB',
        //     vmFlavorType: { code: 'MICRO', codeName: 'Micro Server' },
        //     vmFlavorDescription: 'vCPU 1EA, Memory 1GB, Disk 50GB',
        //     infraResourceType: { code: 'SVR', codeName: 'Server' },
        //     cpuCount: 1,
        //     memorySize: 1073741824,
        //     baseBlockStorageSize: 53687091200,
        //     osInformation: '',
        //     diskType: { code: 'NET', codeName: 'Network Storage' },
        //     addBlockStroageSize: 0 },
        //              /** more items**/
        // }]
    }
});
```
