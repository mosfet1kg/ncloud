var ncloud = require('../../lib/');
var moment = require('moment-timezone');

(function(){
  var client = ncloud.createClient({
    oauth_consumer_key:'%YOUR_CONSUMER_KEY%',
    oauth_consumer_secret:'%YOUR_CONSUMER_SECRET%'
  });

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

  const startTime_2daysAgo = moment().subtract(2, 'day').startOf('day').toDate().toISOString();
  const endTime_now = moment().toDate().toISOString();

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

})();

//
