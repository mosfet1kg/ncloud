export default {
  findPublicIpInstances: {
    param: [],required:[],
    request_alias: [], response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  createPublicIpInstance: {
    param: [
      'serverInstanceNo',
      'publicIpDescription'
    ],
    required:[],
    request_alias: [], response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  attachPublicIpInstance: {
    param: [
      'publicIpInstanceNo',
      'serverInstanceNo'
    ],
    required:[
      'publicIpInstanceNo',
      'serverInstanceNo'
    ],
    request_alias: [], response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  detachPublicIpInstance: {
    param: [
      'publicIpInstanceNo',
    ],
    required:[
      'publicIpInstanceNo',
    ],
    request_alias: [], response_alias: [
      {'src':'serverImageProductCode', 'dst':'vmImageId' },
      {'src':'serverProductCode', 'dst': 'vmFlavorId' }
    ]
  },
  destroyPublicIpInstance: {
    param: [
      'publicIpInstanceNo',
    ],
    required:[
      'publicIpInstanceNo',
    ],
    request_alias: [
      {'src': 'publicIpInstanceNo', 'dst': 'publicIpInstanceNoList.1' }
    ],
    response_alias: []
  },
};
