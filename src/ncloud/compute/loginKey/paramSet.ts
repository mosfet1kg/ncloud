export default {
  findLoginKeys: {
    order : ['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType' ],
    param: [],required:[],
    request_alias: [], response_alias: []
  },
  createLoginKey: {
    order : ['action',  'keyName', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType'],
    param: ['keyName'],required:['keyName'],
    constraint: [{ name: 'keyName', type: 'string', restrict:"length", maxLength: 30, minLength: 3 }],
    request_alias: [], response_alias: []
  }
};

