export default {
  findPrivateImages: {
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
    param: ['privateImageName','privateImageDescription','serverInstanceNo'],
    required:['serverInstanceNo'],
    constraints: [
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
  destroyPrivateImage: {
    param: ['privateImageNo'],required:['privateImageNo'],
    request_alias: [
      { src: "privateImageNo", dst: "memberServerImageNoList.1" }
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

