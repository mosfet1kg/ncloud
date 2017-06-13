export default {
  findACG: {
    order : ['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType' ],
    //         param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
    // param : ['exclusionProductCode', 'productCode', 'platformTypeCodeList|maxItems:5']
    param: [],required:[],
    request_alias: [], response_alias: []
  }
};

