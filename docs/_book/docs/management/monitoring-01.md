# Management : Monitoring

## `findMetrics`, action `getListMetrics` 
Returns which metrics we can query.

### Arguments
| Name               | Type      | Required     | Description                     |
|--------------------|-----------|--------------|---------------------------------|
| `serverInstanceNo` | `string`  | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |         


### Examples
```javascript
client.management.monitoring.findMetrics({serverInstanceNo: 512641 }, function( err, metrics ) {
  if (err) {
    return console.log(err.message);
  }

  console.log(metrics);
  // result example =>
  // [ { serverInstanceNo: 512641, metricName: 'CPUUtilization' },
  //   { serverInstanceNo: 512641, metricName: 'DiskReadBytes' },
  //   { serverInstanceNo: 512641, metricName: 'DiskWriteBytes' },
  //   { serverInstanceNo: 512641, metricName: 'NetworkIn' },
  //   { serverInstanceNo: 512641, metricName: 'NetworkOut' } ]
});
```

---

## `findStatistics`, action `getMetricStatistics` 
Returns statistics according to the specified metric you chosen.  

### Arguments
| Name               | Type      | Required     | Description                     |
|--------------------|-----------|--------------|---------------------------------|
| `serverInstanceNo` | `string`  | **required** | Unique Id of a running server that can be got from `findServers` method(action `getServerInstanceList`). |
| `metricName`       | `string`  | **required** | Metric name to be queried that can be obtained from `findMetrics` method(action `getListMetrics`). |
| `startTime`        | `string`  | **required** | The start time for the query. ISO date format is only allowed. |
| `endTime`          | `string`  | **required** | The end time for the query. ISO date format is only allowed. |
| `period`           | `number`  | optional     | Time interval between points. <br/> **Default**: 1800 (30minutes)

### Examples
```javascript
var moment = require('moment-timezone');

var startTime_2daysAgo = moment().subtract(2, 'day').startOf('day').toDate().toISOString();
var endTime_now = moment().toDate().toISOString();
  
client.management.monitoring.findStatistics({serverInstanceNo: 503087, metricName: 'CPUUtilization', startTime: startTime_2daysAgo, endTime: endTime_now },
  function( err, stats ) {
    if (err) {
      return console.log(err.message);
    }
  
    console.log( stats.dataPoints.member );
    // [ { timestamp: '2017-10-24T15:00:00.000Z',
    //   average: 0.057,
    //   unit: 'Percent' },
    //   { timestamp: '2017-10-24T15:30:00.000Z',
    //     average: 0.056667,
    //     unit: 'Percent' },
    //   { timestamp: '2017-10-24T16:00:00.000Z',
    //     average: 0.058333,
    //     unit: 'Percent' },
    //   { timestamp: '2017-10-24T16:30:00.000Z',
    //     average: 0.056667,
    //     unit: 'Percent' },
    //   { timestamp: '2017-10-24T17:00:00.000Z',
    //     average: 0.056667,
    //     unit: 'Percent' },
    //   { timestamp: '2017-10-24T17:30:00.000Z',
    //     average: 0.057,
    //     unit: 'Percent' },
    //   { timestamp: '2017-10-24T18:00:00.000Z',
    //     average: 0.065333,
    //    /** more items **/
    // ]
});
```
