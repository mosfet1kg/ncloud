module.exports = {
    getServerImageProductList: {
        order : ['action',  'exclusionProductCode',  'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'platformTypeCodeList', 'productCode', 'responseFormatType' ],
        //         param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
        param : ['exclusionProductCode', 'productCode', 'platformTypeCodeList|maxItems:5']
    },
    getServerProductList: {
        order :['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType','exclusionProductCode','productCode','serverImageProductCode'],
        param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
        required: ['serverImageProductCode']
    }
};