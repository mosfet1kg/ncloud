# Compute : Zone  
## `findZones`, action `getZoneList` 
Returns lists all possible zones available in the callback `f(err, zones)`.   
Callback returns `f(err, zoneList)` where `zoneList` is an `Array`.  
You can use a `zoneNo` for an option to create VM instance in that zone if needed.     
Refer to `createServer` method. 

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
client.compute.findZones( function( error, response ){
     if( error ){
         console.log( error );
     }else {
         console.log( response );
         // response example =>
         // [ { zoneNo: 2, zoneName: 'KR-1', zoneDescription: '가산 NANG zone' } ]
     }
 });
```