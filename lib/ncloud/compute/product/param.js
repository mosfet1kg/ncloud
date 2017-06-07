module.exports = {
    getServerImageProductList: {
        order : ['action',  'exclusionProductCode',  'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'platformTypeCodeList', 'productCode', 'responseFormatType' ],
        //         param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
        // param : ['exclusionProductCode', 'productCode', 'platformTypeCodeList|maxItems:5']
        param: [],required:[],
        request_alias: [], response_alias: [ { src: 'productCode', dst: 'vmImageCode'}]
    },
    getServerProductList: {
        // order :[ 'action','exclusionProductCode','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','productCode', 'responseFormatType','serverImageProductCode'],
        order :[ 'action','oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version','responseFormatType','serverImageProductCode'],
        // param: ['exclusionProductCode|maxItems:2','productCode|maxItems:20','serverImageProductCode|maxItems:20'],
        // param: ['exclusionProductCode','productCode','serverImageProductCode'],
        param: ['serverImageProductCode'],
        required: ['serverImageProductCode'],
        request_alias: [{src:'vmImageCode', dst: 'serverImageProductCode'}], response_alias: [{ src:'productCode', dst: 'vmFlavorCode' }]
    }
};