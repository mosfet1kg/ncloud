export default {
  findLocation : {
    order : ['action', 'enc', 'ext', 'ip', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_time' +
    'stamp', 'oauth_version', 'responseFormatType'],
    param: ['ip', 'enc', 'ext' ],
    required: [ 'ip' ],
  }
};
