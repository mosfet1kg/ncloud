var n = require('../../helpers/nonce');
var generateNonce = n(10);
var CryptoJS = require("crypto-js");

function getQueryString( args, param_set, authKey ){

    const param_order = param_set.order;

    var param_temp = Object.assign({}, args);

    param_temp["oauth_consumer_key"]= authKey.getAuthKey.oauth_consumer_key;
    param_temp["oauth_nonce"] = generateNonce();
    param_temp["oauth_signature_method" ] = "HMAC-SHA1";
    param_temp["oauth_timestamp"]= Math.floor((+new Date)/1000);
    param_temp["oauth_version"]="1.0";

    // param_set["platformTypeCodeList.1"]="LNX64";
    param_temp["responseFormatType"] = "json";

    // param_set["serverImageProductCode"] = "SPSW0LINUX000031";
    var sorted_set = param_order.reduce( function( prev, key ){
        if( Object.keys( param_temp ).includes( key ) ){

            if( Array.isArray( param_temp[key]) ){
                for(var i = 1; i <= param_temp[key].length ; i++){
                    prev[ key + '.' + i ] = param_temp[key][i-1];
                }
            }else{
                prev[ key ] = param_temp[ key ];
            }

        }
        return prev;
    }, {});

    var query_string =  Object.keys(sorted_set).reduce( function(prev, curr){
        return prev + curr + '=' + sorted_set[curr] + '&';
    }, "").slice(0, -1);

    var base_string = getBaseString( this.requestMethod, this.requestUrl, query_string );
    var auth_signature = getAuthSignature( base_string, this.authKey );

    query_string +=  '&oauth_signature=' + encodeURIComponent( auth_signature );
    return query_string;
}

function getBaseString(request_method, request_url,  query_string ) {
    return request_method + "&" + encodeURIComponent( request_url ) + "&" + encodeURIComponent( query_string );
}

function getAuthSignature( base_string, authKey) {
    return CryptoJS.HmacSHA1( base_string, authKey.getAuthKey.oauth_consumer_secret +'&').toString(CryptoJS.enc.Base64);
}

module.exports = {
    getQueryString : getQueryString
};