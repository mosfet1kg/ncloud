# Compute : MemberServerImage  

## `findPrivateImages`, action `getMemberServerImageList` 
Lists all private Images that are available to use on your ncloud account.  
Callback returns `f(err, privateImageList)` where `privateImageList` is an `Array`.  

### Arguments  
 No Input Arguments
 
### Example  
```javascript
client.compute.findPrivateImages( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log( response );
      // [ 
      // { privateImageNo: /**privateImageNo**/,
      //   privateImageName: 'ext-test-image',
      //   privateImageDescription: 'Auto Scailing Test용',
      //   originalServerInstanceNo: 492964,
      //   originalVmFlavorId: 'SPSVRSSD00000003',
      //   originalServerName: 'ext-test',
      //   originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
      //   originalVmImageId: 'SPSW0LINUX000046',
      //   originalOsInformation: 'CentOS 7.3 (64-bit)',
      //   originalServerImageName: 'centos-7.3-64',
      //   privateImageStatusName: 'created',
      //   privateImageStatus: { code: 'CREAT', codeName: 'NSI CREATED state' },
      //   privateImageOperation: { code: 'NULL', codeName: 'NSI NULLOP' },
      //   privateImagePlatformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
      //   createDate: '2017-09-29T11:39:17+0900',
      //   region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
      //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
      //   privateImageBlockStorageTotalRows: 1,
      //   privateImageBlockStorageTotalSize: 53687091200 },
      // { privateImageNo: /**privateImageNo**/,
      //   privateImageName: 'myTest',
      //   privateImageDescription: 'myDesc',
      //   originalServerInstanceNo: 492964,
      //   originalVmFlavorId: 'SPSVRSSD00000003',
      //   originalServerName: 'ext-test',
      //   originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
      //   originalVmImageId: 'SPSW0LINUX000046',
      //   originalOsInformation: 'CentOS 7.3 (64-bit)',
      //   originalServerImageName: 'centos-7.3-64',
      //   privateImageStatusName: 'created',
      //   privateImageStatus: { code: 'CREAT', codeName: 'NSI CREATED state' },
      //   privateImageOperation: { code: 'NULL', codeName: 'NSI NULLOP' },
      //   privateImagePlatformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
      //   createDate: '2017-10-09T16:34:04+0900',
      //   region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
      //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
      //   privateImageBlockStorageTotalRows: 1,
      //   privateImageBlockStorageTotalSize: 53687091200 } ]
    }
});
```

---

## `createPrivateImage`, action `createMemberServerImage` 
Creates an Image based on a server.

### Arguments  

| Input parameter           | Type       | Required     | Description |
|---------------------------|------------|--------------|-------------|
| `serverInstanceNo`        | `string`   | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`).   |             
| `privateImageName`        | `string`   | optional     | name for the resulting image. |  
| `privateImageDescription` | `string`   | optional     | description for the resulting image. |  
 
### Examples  
```javascript
client.compute.createPrivateImage({serverInstanceNo:492964}, function ( err,response ) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( response  );
    // { privateImageNo: 3791,
    //   privateImageName: 'img-9b885f11922e5bb',
    //   privateImageDescription: '',
    //   originalServerInstanceNo: 492964,
    //   originalVmFlavorId: 'SPSVRSSD00000003',
    //   originalServerName: 'ext-test',
    //   originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //   originalVmImageId: 'SPSW0LINUX000046',
    //     originalOsInformation: 'CentOS 7.3 (64-bit)',
    //   originalVmImageName: 'centos-7.3-64',
    //   privateImageStatusName: 'creating',
    //   privateImageStatus: { code: 'INIT', codeName: 'NSI INIT state' },
    //   privateImageOperation: { code: 'CREAT', codeName: 'NSI CREAT OP' },
    //   privateImagePlatformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //   createDate: '2017-10-10T01:28:44+0900',
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   privateImageBlockStorageTotalRows: 0,
    //     privateImageBlockStorageTotalSize: 0 }
})
```
```javascript
client.compute.createPrivateImage({serverInstanceNo:492964, privateImageName:"helloWorld", privateImageDescription: "myFirstPrivateImage"}, function ( err,response ) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( response  );
    // { privateImageNo: 3795,
    //   privateImageName: 'helloWorld',
    //   privateImageDescription: 'myFirstPrivateImage',
    //   originalServerInstanceNo: 492964,
    //   originalVmFlavorId: 'SPSVRSSD00000003',
    //   originalServerName: 'ext-test',
    //   originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //   originalVmImageId: 'SPSW0LINUX000046',
    //     originalOsInformation: 'CentOS 7.3 (64-bit)',
    //   originalVmImageName: 'centos-7.3-64',
    //   privateImageStatusName: 'creating',
    //   privateImageStatus: { code: 'INIT', codeName: 'NSI INIT state' },
    //   privateImageOperation: { code: 'CREAT', codeName: 'NSI CREAT OP' },
    //   privateImagePlatformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //   createDate: '2017-10-10T02:12:21+0900',
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   privateImageBlockStorageTotalRows: 0,
    //     privateImageBlockStorageTotalSize: 0 }
})
```

---

## `destroyPrivateImage`, action `deleteMemberServerImages` 
Destroys the specified image and returns a confirmation.

### Arguments  

| Input parameter    | Type       | Required     | Description |
|--------------------|------------|--------------|-------------|
| `privateImageNo`   | `string[]`   | **required** | Unique Id of a private image that can be got from `findPrivateImages` method(action `getMemberServerImageList`).   |             
 
### Example
```javascript
client.compute.destroyPrivateImage({ privateImageNo: 3800 }, function(err, res) {
    if ( err ) {
      return console.log( err.message );
    }
    
    console.log( res );
    // expected Result =>
    //  {
    //     privateImageNo: 3800,
    //     privateImageName: 'test3',
    //     privateImageDescription: '',
    //     originalServerInstanceNo: 491049,
    //     originalVmFlavorId: 'SPSVRSSD00000003',
    //     originalServerName: 'test-ten',
    //     originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //     originalVmImageId: 'SPSW0LINUX000065',
    //     originalOsInformation: 'Ubuntu Server 16.04 with Tensorflow (64-bit)',
    //     originalVmImageName: 'tensorflow-ubuntu-16.04-64-server',
    //     privateImageStatusName: 'terminating',
    //     privateImageStatus: { code: 'CREAT', codeName: 'NSI CREATED state' },
    //     privateImageOperation: { code: 'TERMT', codeName: 'NSI TERMINATE OP' },
    //     privateImagePlatformType: { code: 'UBS64', codeName: 'Ubuntu Server 64 Bit' },
    //     createDate: '2017-10-10T21:39:31+0900',
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //     zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //     privateImageBlockStorageTotalRows: 1,
    //     privateImageBlockStorageTotalSize: 53687091200 
    //  }
})
```
