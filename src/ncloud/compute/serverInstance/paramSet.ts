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
    constraint: [
      { names: ['vmImageId','privateImageNo'], type: 'array', restrict:"onlyOneExist" },
      { name: 'accessControlGroupConfigurationNoList', type: 'array', restrict:"numItems", minItems: 1, maxItems:5, required: false },
      { name: 'userData', type: 'string', restrict: 'length', minLength: 1, maxLength: 21847, required: false }
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
  }
};

