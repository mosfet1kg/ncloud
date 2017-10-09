export default {
  findPublicImages: {
    order : ['action',  'exclusionProductCode',  'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'platformTypeCodeList', 'productCode', 'responseFormatType' ],
    //         param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
    // param : ['exclusionProductCode', 'productCode', 'platformTypeCodeList|maxItems:5']
    param: [],required:[],
    request_alias: [], response_alias: [
      { src: 'productCode', dst: 'vmImageId'},
      { src: 'productName', dst: 'vmImageName'},
      { src: 'productType', dst: 'vmImageType'},
      { src: 'productDescription', dst: 'vmImageDescription'}
    ]
  },
  findFlavors: {
    // order :[ 'action','exclusionProductCode','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','productCode', 'responseFormatType','serverImageProductCode'],
    order :[ 'action','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','responseFormatType','serverImageProductCode'],
    // param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
    // param: ['exclusionProductCode','productCode','serverImageProductCode'],
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
  findPrivateImages: {
    order :[ 'action','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','responseFormatType'],
    // param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
    // param: ['exclusionProductCode','productCode','serverImageProductCode'],
    param: [],required:[],
    request_alias: [], response_alias: [
      { src: 'memberServerImageNo', dst: 'privateImageNo'},
      { src: 'memberServerImageName', dst: 'privateImageName'},
      { src: 'memberServerImageDescription', dst: 'privateImageDescription'},
      { src: 'originalServerProductCode', dst: 'originalVmFlavorId'},
      { src: 'originalServerImageProductCode', dst: 'originalVmImageId'},
      { src: 'memberServerImageStatusName', dst: 'privateImageStatusName'},
      { src: 'memberServerImageStatus', dst: 'privateImageStatus'},
      { src: 'memberServerImageOperation', dst: 'privateImageOperation'},
      { src: 'memberServerImagePlatformType', dst: 'privateImagePlatformType'},
      { src: 'memberServerImageBlockStorageTotalRows', dst: 'privateImageBlockStorageTotalRows'},
      { src: 'memberServerImageBlockStorageTotalSize', dst: 'privateImageBlockStorageTotalSize'},
    ]
  }
};

