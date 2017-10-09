export default {
  findACG: {
    order : ['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType' ],
    param: [],required:[],
    request_alias: [], response_alias: [
      // {src:"accessControlGroupConfigurationNo", dst:"securityGroupConfigurationNo"},
      // {src:"accessControlGroupName", dst:"securityGroupName"},
      // {src:"accessControlGroupDescription", dst:"securityGroupDescription"}
    ]
  }
};

