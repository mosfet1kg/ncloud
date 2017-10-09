# Compute : ServerInstance  
## `findServers`, action `getServerInstanceList` 
Lists all servers that are available to use on your ncloud account.  
Callback returns `f(err, servers)` where `servers` is an `Array`.

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
client.compute.findServers( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ { serverInstanceNo: 362133,
      //   serverName: '/** instance name **/',
      //   serverDescription: '',
      //   cpuCount: 2,
      //   memorySize: 4294967296,
      //   baseBlockStorageSize: 53687091200,
      //   platformType: { code: 'LNX64', codeName: 'Linux 64 Bit' },
      //   loginKeyName: 'ncp',
      //     /*** more items  **/
    }
});
```