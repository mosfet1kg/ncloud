# OpenAPI : Geolocation

## `findLocation`, action `getLocation` 
See following descriptions.

### Arguments
| Name | Type | Required | Description                | Default |
|------|-----------|----------|----------------------------|---------|
| ip   | `string`  | <b>required</b> | An IP to find the its location |         |
| enc  | `string`  | optional | Encoding Method (either `utf8` or `euckr`) | `utf8`  |
| ext  | `string`  | optional | Flag for additional info (either `t` or `f`) | `f`   |


### Examples
```javascript
client.openapi.geolocation.findLocation({ ip: '143.248.142.77'}, function( error, reply ){
    if(error){
        console.log( error );
    }else{
        console.log( reply );
        // expected Result =>
        // { country: 'KR', code: '3020054000', r1: '대전광역시', r2: '유성구' }

    }
});
```
```javascript
client.openapi.geolocation.findLocation({ ip: '143.248.142.77', ext: 't'}, function( error, reply ){
    if(error){
        console.log( error );
    }else{
        console.log( reply );
        // expected Result =>
        // { country: 'KR',
        //   code: '3020054000',
        //   r1: '대전광역시',
        //   r2: '유성구',
        //   r3: '구성동',
        //   lat: 36.370724,
        //   long: 127.3661,
        //   net: 'Korea Advanced Institute of Science and Technology' }
    }
});
```  