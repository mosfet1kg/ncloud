export default {
  findPortForwardingRules: {
    param: [],required:[],
    request_alias: [], response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  createPortForwardingRule: {
    param: [
      'portForwardingConfigurationNo',
      'serverInstanceNo',
      'externalPort',
      'internalPort'
    ],
    required:[
      'serverInstanceNo',
      'externalPort',
      'internalPort'
    ],
    request_alias: [
      {'src':'serverInstanceNo', 'dst': 'portForwardingRuleList.1.serverInstanceNo'},
      {'src':'externalPort', 'dst': 'portForwardingRuleList.1.portForwardingExternalPort'},
      {'src':'internalPort', 'dst': 'portForwardingRuleList.1.portForwardingInternalPort'}
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  destroyPortForwardingRule: {
    param: [
      'portForwardingConfigurationNo',
      'serverInstanceNo',
      'externalPort',
      'internalPort'
    ],
    required:[
      'serverInstanceNo',
      'externalPort',
      'internalPort'
    ],
    request_alias: [
      {'src':'serverInstanceNo', 'dst': 'portForwardingRuleList.1.serverInstanceNo'},
      {'src':'externalPort', 'dst': 'portForwardingRuleList.1.portForwardingExternalPort'},
      {'src':'internalPort', 'dst': 'portForwardingRuleList.1.portForwardingInternalPort'}
    ],
    response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  }
};
