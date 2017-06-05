module.exports = {
    getServerImageProductList: {
        order : ['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'platformTypeCodeList.1', 'platformTypeCodeList.2', 'responseFormatType'],
        param : (function(){
            var limit = [
                { exclusionProductCode : 2 },
                { productCode : 20 },
                { platformTypeCodeList : 5 }
            ];
            return limit.reduce( function( prev, curr ){
                var key = Object.keys(curr)[0];
                var value = curr[key];
                var temp = [];

                for( var i=0; i<value; i++){
                    temp.push( key+'.'+(i+1));
                }
                return prev.concat( temp );
            }, []);
        })()
    },
    getServerProductList: {
        order :['action', 'oauth_consumer_key', 'oauth_nonce', 'oauth_signature_method', 'oauth_timestamp', 'oauth_version', 'responseFormatType', 'serverImageProductCode'],
        param: ['serverImageProductCode']
    }
};