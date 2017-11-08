export default {
  findMetrics : {
    param: ['serverInstanceNo' ],
    required: [ 'serverInstanceNo' ],
    request_alias: [
      {'src':'serverInstanceNo', 'dst':'instanceNo' },
    ],
    response_alias: [
      {'src':'instanceNo', 'dst':'serverInstanceNo' },
    ]
  },
  findStatistics : {
    param: [ 'serverInstanceNo', 'metricName', 'startTime', 'endTime', 'period' ],
    required: [ 'serverInstanceNo', 'metricName', 'startTime', 'endTime' ],
    request_alias: [
      {'src':'serverInstanceNo', 'dst':'instanceNoList.1' },
    ],
    response_alias: [
      {'src':'instanceNo', 'dst':'serverInstanceNo' },
    ]
  }
};
