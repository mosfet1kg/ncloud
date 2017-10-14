export default {
  findServers: {
    param: [],required:[],
    request_alias: [],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  createServer : {
    constraints: [
      { names: ['vmImageId','privateImageNo'], type: 'array', restrict:"onlyOneExist" },
      { name: 'accessControlGroupConfigurationNoList', type: 'array', restrict:"numItems", minItems: 1, maxItems:5 },
      { name: 'userData', type: 'string', restrict: 'length', minLength: 1, maxLength: 21847 }
    ],
    param: ['vmImageId','vmFlavorId','privateImageNo','serverName','serverDescription','loginKeyName','feeSystemTypeCode',
      'zoneNo','accessControlGroupConfigurationNoList','userData'],
    required:[],
    request_alias: [
      {'src':'vmImageId', 'dst': 'serverImageProductCode'},
      {'src':'vmFlavorId', 'dst': 'serverProductCode'},
      {'src':'privateImageNo', 'dst': 'memberServerImageNo'},
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  destroyServer: {
    param: [ 'serverInstanceNo' ],
    required: [ 'serverInstanceNo' ],
    request_alias: [
      {'src': 'serverInstanceNo', 'dst': "serverInstanceNoList.1"}
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  rebuildServer: {
    param: [ 'serverInstanceNo', 'vmFlavorId' ],
    required: [ 'serverInstanceNo', 'vmFlavorId' ],
    request_alias: [
      { 'src': 'vmFlavorId', 'dst': 'serverProductCode' }
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  rebootServer: {
    param: [ 'serverInstanceNo' ],
    required: [ 'serverInstanceNo' ],
    request_alias: [
      {'src': 'serverInstanceNo', 'dst': 'serverInstanceNoList.1'}
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  startServer: {
    param: [ 'serverInstanceNo' ],
    required: [ 'serverInstanceNo' ],
    request_alias: [
      {'src': 'serverInstanceNo', 'dst': 'serverInstanceNoList.1'}
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  stopServer: {
    param: [ 'serverInstanceNo' ],
    required: [ 'serverInstanceNo' ],
    request_alias: [
      {'src': 'serverInstanceNo', 'dst': 'serverInstanceNoList.1'}
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  findRootPassword: {
    param: [ 'serverInstanceNo', 'privateKey' ],
    required: [ 'serverInstanceNo', 'privateKey' ],
    request_alias: [
    ],
    response_alias: [
    ]
  }
};

