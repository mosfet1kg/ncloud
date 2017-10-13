var ncloud = require('../../../lib/');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

  client.compute.findPrivateImages( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      // console.log( response );
      // [ { privateImageNo: 3762,
      //   privateImageName: 'ext-test-image',
      //   memberServerImageDescription: 'Auto Scailing Test용',
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
      //   { privateImageNo: 3782,
      //     privateImageName: 'myTest',
      //     memberServerImageDescription: 'myDesc',
      //     originalServerInstanceNo: 492964,
      //     originalVmFlavorId: 'SPSVRSSD00000003',
      //     originalServerName: 'ext-test',
      //     originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
      //     originalVmImageId: 'SPSW0LINUX000046',
      //     originalOsInformation: 'CentOS 7.3 (64-bit)',
      //     originalServerImageName: 'centos-7.3-64',
      //     privateImageStatusName: 'created',
      //     privateImageStatus: { code: 'CREAT', codeName: 'NSI CREATED state' },
      //     privateImageOperation: { code: 'NULL', codeName: 'NSI NULLOP' },
      //     privateImagePlatformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
      //     createDate: '2017-10-09T16:34:04+0900',
      //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
      //     zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
      //     privateImageBlockStorageTotalRows: 1,
      //     privateImageBlockStorageTotalSize: 53687091200 } ]
    }
  });
  //
  client.compute.createPrivateImage({serverInstanceNo:492964}, function (err,response ) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( response  );
    // expected Result =>
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
    //   privateImageStatus: 'creating',
    //   privateImageStatus: { code: 'INIT', codeName: 'NSI INIT state' },
    //   privateImageOperation: { code: 'CREAT', codeName: 'NSI CREAT OP' },
    //   privateImagePlatformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
    //   createDate: '2017-10-10T01:28:44+0900',
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //   privateImageBlockStorageTotalRows: 0,
    //     privateImageBlockStorageTotalSize: 0 }

  });


  client.compute.createPrivateImage({serverInstanceNo:492964, privateImageName:"helloWorld", privateImageDescription: "myFirstPrivateImage"}, function (err,response ) {
    if ( err ) {
      return console.log( err.message );
    }
    console.log( response  );
    // expected Result =>
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

  client.compute.destroyPrivateImage({ privateImageNo: 3799 }, function(err, res) {
    if ( err ) {
      return console.log( err.message );
    }

    console.log( res );
    // expected Result =>
    //   {
    //     privateImageNo: 3799,
    //     privateImageName: 'test2',
    //     privateImageDescription: '',
    //     originalServerInstanceNo: 491604,
    //     originalVmFlavorId: 'SPSVRSSD00000003',
    //     originalServerName: 'sqltest',
    //     originalBaseBlockStorageDiskType: { code: 'NET', codeName: 'Network Storage' },
    //     originalVmImageId: 'SPSW0WINNT000034',
    //     originalOsInformation: 'Windows Server 2008 R2 with MSSQL 2008 Standard (64-bit)',
    //     originalVmImageName: 'mssql(2008std)-win-2008-64-R2',
    //     privateImageStatusName: 'terminating',
    //     privateImageStatus: { code: 'CREAT', codeName: 'NSI CREATED state' },
    //     privateImageOperation: { code: 'TERMT', codeName: 'NSI TERMINATE OP' },
    //     privateImagePlatformType: { code: 'WND64', codeName: 'Windows 64 Bit' },
    //     createDate: '2017-10-10T21:39:24+0900',
    //     region: { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //     zone: { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' },
    //     privateImageBlockStorageTotalRows: 1,
    //     privateImageBlockStorageTotalSize: 53687091200 }
  })

})();
