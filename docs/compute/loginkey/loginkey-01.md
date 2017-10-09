# Compute : LoginKey  
## `findLoginKeys`, action `getLoginKeyList` 
Get all of login keys you have registered.

### Arguments  
 No Input Arguments
 
### Examples  
```javascript
  client.compute.findLoginKeys( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ { loginKey:
      //   { fingerprint: /** finger print value **/,
      //     keyName: 'ncp',
      //     createDate: '2017-05-24T00:00:24+0900' } } ]
    }
  });
```