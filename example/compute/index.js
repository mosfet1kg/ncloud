var Ncloud = require('../../lib/');

(function(){
    var client = new Ncloud({
        oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
        oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
    });

    client.compute.findImages( function( error, response ){
        if( error ){
            console.log( error );
        }else {
            console.log(response);

            // response example =>
            // [ { vmImageCode: 'SPSW0LINUX000043',
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
            //          /** more items **/
            // ]
        }
    });

    client.compute.findFlavorsByImgCd( { vmImageCode: 'SPSW0LINUX000031' }, function( error, response ){
        if( error ){
            console.log( error );
        }else{
            console.log( response );
            // response example =>
            // [ { vmFlavorCode: 'SPSVRSTAND000056',
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
            //              /** more items**/
            // }]
        }
    });
})();