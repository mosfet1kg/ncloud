export default {
  findPublicImages: {
    order : ['action',  'exclusionProductCode',  'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'platformTypeCodeList', 'productCode', 'responseFormatType' ],
    param: [],required:[],
    request_alias: [], response_alias: [
      { src: 'productCode', dst: 'vmImageId'},
      { src: 'productName', dst: 'vmImageName'},
      { src: 'productType', dst: 'vmImageType'},
      { src: 'productDescription', dst: 'vmImageDescription'}
    ]
  },
  findFlavors: {
    order :[ 'action','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','responseFormatType','serverImageProductCode'],
    param: ['vmImageId'],
    required: ['vmImageId'],
    request_alias: [
      {src:'vmImageId', dst: 'serverImageProductCode'}
    ],
    response_alias: [
      { src:'productCode', dst: 'vmFlavorId' },
      { src:'productName', dst: 'vmFlavorName' },
      { src:'productType', dst: 'vmFlavorType' },
      { src:'productDescription', dst: 'vmFlavorDescription' },
    ]
  },
};

