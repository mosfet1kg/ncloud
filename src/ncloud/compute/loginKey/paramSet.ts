export default {
  findLoginKeys: {
    param: [],required:[],
    request_alias: [],
    response_alias: [
      {'src':'keyName', 'dst': 'loginKeyName'}
    ]
  },
  createLoginKey: {
    param: ['loginKeyName', 'outputPath' ],
    required:['loginKeyName'],
    constraints: [{ name: 'loginKeyName', type: 'string', restrict:"length", maxLength: 30, minLength: 3 }],
    request_alias: [
      {'src':'loginKeyName', 'dst': 'keyName'}
    ],
    response_alias: []
  }
};

