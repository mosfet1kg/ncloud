# Compute : Region  
## `findRegions`, action `getRegionList` 
Returns the whole list of available regions.

### Arguments  
 No Input Arguments
 
### Example  
```javascript
client.compute.findRegions( function( error, response ){
  if( error ){
    console.log( error );
  }else {
    console.log( response  );
    // response example =>
    // [ { regionNo: 1, regionCode: 'KR', regionName: 'Korea' },
    //   { regionNo: 2, regionCode: 'USW', regionName: 'US-West' },
    //   { regionNo: 3, regionCode: 'HK', regionName: 'HongKong' },
    //   { regionNo: 4, regionCode: 'SG', regionName: 'Sigapore' },
    //   { regionNo: 5, regionCode: 'JP', regionName: 'Japan' },
    //   { regionNo: 6, regionCode: 'DE', regionName: 'Germany' } ]
    
    // you can change regionNo variable to handle resources within the specific region.
    client.compute.regionNo = 2;
  }
});

```