export default {
  findPublicImages: {
    param: [],required:[],
    request_alias: [], response_alias: [
      { src: 'productCode', dst: 'vmImageId'},
      { src: 'productName', dst: 'vmImageName'},
      { src: 'productType', dst: 'vmImageType'},
      { src: 'productDescription', dst: 'vmImageDescription'}
    ]
  },
  findFlavors: {
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

