export default {
  findPrivateImages: {
    order :[ 'action','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','responseFormatType'],
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
  },
  createPrivateImage: {
    order: ['action','memberServerImageDescription','memberServerImageName','oauth_consumer_key','oauth_nonce','oauth_signature_method','oauth_timestamp','oauth_version','responseFormatType','serverInstanceNo'],
    param: ['privateImageName','privateImageDescription','serverInstanceNo'],required:['serverInstanceNo'],
    constraint: [
      { name: 'privateImageName', type: 'string', restrict:"length", minLength: 3, maxLength: 30 },
      { name: 'privateImageDescription', type: 'string', restrict:"length", minLength: 10, maxLength: 1000 },
    ],
    request_alias: [
      { src: 'privateImageName', dst: 'memberServerImageName'},
      { src: 'privateImageDescription', dst: 'memberServerImageDescription'}
    ],
    response_alias: [
      // { src: 'memberServerImageList', dst: 'privateImages'},
      { src: 'memberServerImageBlockStorageTotalRows', dst: 'privateImageBlockStorageTotalRows'},
      { src: 'memberServerImageBlockStorageTotalSize', dst: 'privateImageBlockStorageTotalSize'},
      { src: 'memberServerImageDescription', dst: 'privateImageDescription'},
      { src: 'memberServerImageName', dst: 'privateImageName'},
      { src: 'memberServerImageNo', dst: 'privateImageNo'},
      { src: 'memberServerImageOperation', dst: 'privateImageOperation'},
      { src: 'memberServerImagePlatformType', dst: 'privateImagePlatformType'},
      { src: 'memberServerImageStatus', dst: 'privateImageStatus'},
      { src: 'memberServerImageStatusName', dst: 'privateImageStatusName'},
      { src: 'originalServerImageName', dst: 'originalVmImageName'},
      { src: 'originalServerImageProductCode', dst: 'originalVmImageId'},
      { src: 'originalServerProductCode', dst: 'originalVmFlavorId'},
    ]
  },
  destroyPrivateImages: {
    order: ['action','memberServerImageNoList','oauth_consumer_key','oauth_nonce','oauth_signature_method','oauth_timestamp','oauth_version','responseFormatType'],
    param: ['privateImageNoList'],required:['privateImageNoList'],
    constraint: [
      { name: 'privateImageNoList', type: 'array', restrict:"numItems", minItems: 1 }
    ],
    request_alias: [
      { src: "privateImageNoList", dst: "memberServerImageNoList" }
    ],
    response_alias: [
      { src: 'memberServerImageBlockStorageTotalRows', dst: 'privateImageBlockStorageTotalRows'},
      { src: 'memberServerImageBlockStorageTotalSize', dst: 'privateImageBlockStorageTotalSize'},
      { src: 'memberServerImageDescription', dst: 'privateImageDescription'},
      { src: 'memberServerImageName', dst: 'privateImageName'},
      { src: 'memberServerImageNo', dst: 'privateImageNo'},
      { src: 'memberServerImageOperation', dst: 'privateImageOperation'},
      { src: 'memberServerImagePlatformType', dst: 'privateImagePlatformType'},
      { src: 'memberServerImageStatus', dst: 'privateImageStatus'},
      { src: 'memberServerImageStatusName', dst: 'privateImageStatusName'},
      { src: 'originalServerImageName', dst: 'originalVmImageName'},
      { src: 'originalServerImageProductCode', dst: 'originalVmImageId'},
      { src: 'originalServerProductCode', dst: 'originalVmFlavorId'},
    ]
  }
};

