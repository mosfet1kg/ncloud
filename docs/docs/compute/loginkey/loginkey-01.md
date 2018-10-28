# Compute : LoginKey  
## `findLoginKeys`, action `getLoginKeyList` 
Get all of login keys you have registered.
Callback returns `f(err, loginKeyList)` where `loginKeyList` is an `Array`.  

### Arguments  
 No Input Arguments
 
### Example  
```javascript
  client.compute.findLoginKeys( function( error, response ){
    if( error ){
      console.log( error );
    }else {
      console.log(response);
      // response example =>
      // [ { fingerprint: /** finger print value **/,
      //     loginKeyName: 'ncp',
      //     createDate: '2017-05-24T00:00:24+0900' } } ]
    }
  });
```

---

## `createLoginKey`, action `createLoginKey` 
Creates loginKey to find root password for SSH login.

### Arguments  

| Input parameter    | Type       | Required     | Description |
|--------------------|------------|--------------|-------------|
| `loginKeyName`     | `string`   | **required** | name for a new login key.   |             
| `outputPath`       | `string`   | optional     | path for the resulting privateKey. It is suggested that you use it to find root password of a server. |  
 
 
### Example  
```javascript
client.compute.createLoginKey( { loginKeyName: "myTest04", outputPath: __dirname }, function( error, response ){
    if ( error ){
      console.log( error.message );
    } else {
      console.log( response );
      //    example=>
      //   { 
      //   loginKeyName: 'myTest04',
      //   privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAs0fJZJWRmxhlYoGCEgyQGtFa6l5dB1N+fZtCqu5XnSUSx/2
      //   p\nYd7wfjsBp1zINIom9vrALr+qzGsBRT0tCSSpULf6SpQJn4hHqkvqhQ8NoBEyLDLW\n+VmZTBkqBm23ZxKlQ+syS2u56j7ntwm+arZ46k7P9
      //   Zbxb3hR4Lr1oPVK6IED30+B\ntVgt3tqZSCChIhUEcNfKuedHeBU0bCLM3IED4d4H7JXWlgBO2EXuAP\n9tB0GQKBgQDKCWBqk2gcHM6heQ1Ey
      //           /** the last part omitted **/
      //   hcRQVDS1SSiJQCg==\n-----END RSA PRIVATE KEY-----\n' }
    }
})
```
