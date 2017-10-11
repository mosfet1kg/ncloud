export default {
  findServers: {
    order : ['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType' ],
    param: [],required:[],
    request_alias: [],
    response_alias: []
  },
  createServer : {
    order : ['accessControlGroupConfigurationNoList','action','feeSystemTypeCode','loginKeyName', 'memberServerImageNo', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType', 'serverDescription', 'serverImageProductCode','serverName', 'serverProductCode', 'userData','zoneNo', ],
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

