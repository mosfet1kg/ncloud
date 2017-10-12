export default {
  findLoginKeys: {
    param: [],required:[],
    request_alias: [], response_alias: []
  },
  createLoginKey: {
    param: ['keyName'],required:['keyName'],
    constraint: [{ name: 'keyName', type: 'string', restrict:"length", maxLength: 30, minLength: 3 }],
    request_alias: [], response_alias: []
  }
};

