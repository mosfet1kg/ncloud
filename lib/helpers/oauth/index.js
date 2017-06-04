var n = require('../../helpers/nonce');
var generateNonce = n(10);
var CryptoJS = require("crypto-js");

function getQueryString( before, authKey ){

    var query_string;
    var sortedSet = { action: before['action']};

    Object.keys(before).filter( function(el){
        return el !== 'action';
    })
    .reduce( function( prev, key ){
        prev[ key ] = before[key];
        return prev;
    }, sortedSet);

    sortedSet["oauth_consumer_key"]= authKey.getAuthKey.oauth_consumer_key;
    sortedSet["oauth_nonce"] = generateNonce();
    sortedSet["oauth_signature_method" ] = "HMAC-SHA1";
    sortedSet["oauth_timestamp"]= Math.floor((+new Date)/1000);
    sortedSet["oauth_version"]="1.0";
    sortedSet["responseFormatType"] = "json";

    query_string =  Object.keys(sortedSet).reduce( function(prev, curr){
        return prev + curr + '=' + sortedSet[curr] + '&';
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