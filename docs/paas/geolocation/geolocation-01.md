# PaaS : Geolocation
## action `getLocation`
### Arguments
| Name | Data Type | Required | Description                | Default |
|------|-----------|----------|----------------------------|---------|
| ip   | `string`  | <b>required</b> | An IP to find the its location |         |
| enc  | `string`  | optional | Encoding Method (either `utf8` or `euckr`) | `utf8`  |
| ext  | `string`  | optional | Flag for additional info (either `t` or `f`) | `f`   |


#### Examples
```javascript
const geoLocation = client.PaaS.geoLocation();

const geolocationResponse = await geoLocation.geoLocation({
  ip: '143.248.142.77'
});

console.log(geolocationResponse);
//  { returnCode: 0,
//   requestId: 'e03c4779-0740-45dc-9462-9cc0620ea597',
//   geoLocation: { country: 'KR', code: '3020054000', r1: '대전광역시', r2: '유성구' } }
```


```javascript
const geoLocation = client.PaaS.geoLocation();

const geolocationResponse = await geoLocation.geoLocation({
  ip: '143.248.142.77',
  ext: 't'
});

console.log(geolocationResponse);
// expected Result =>
// { country: 'KR',
//   code: '3020054000',
//   r1: '대전광역시',
//   r2: '유성구',
//   r3: '구성동',
//   lat: 36.370724,
//   long: 127.3661,
//   net: 'Korea Advanced Institute of Science and Technology' }
```
