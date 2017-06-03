var n = require('../../helpers/nonce');
var generateNonce = n(10);
var axios = require('axios');
var CryptoJS = require("crypto-js");
var validator = require('validator');
var url = require('url');

var getLocation = function( target_ip, callback ){
    if( !isValid( target_ip ) ){
        callback( new Error('Invalid IP')); return;
    }

    var query_string = getQueryString( target_ip, this.authKey );
    var base_string = getBaseString( this.requestMethod, this.requestUrl, query_string );
    var auth_signature = getAuthSignature( base_string, this.authKey );

    query_string +=  '&oauth_signature=' + encodeURIComponent( auth_signature );

    axios.get(
        url.resolve( this.requestUrl ,'?'+query_string )
    )
    .then( function(response){
        callback( null, response.data );
    })
    .catch( function(error){
        callback( error.response.data );
    })
};

module.exports = function( authKey ){
    this.authKey = authKey;
    this.requestMethod = "GET";
    this.requestUrl= 'https://api.ncloud.com/geolocation/';

    return {
        getLocation: getLocation.bind(this)
    }
};

function isValid ( target_ip_string ){
    return validator.isIP( target_ip_string );
}

function getQueryString( target_ip_string, authKey ){
    var sortedSet = {};

    sortedSet["action"]="getLocation";
    sortedSet["ip"] = target_ip_string;
    sortedSet["oauth_consumer_key"]= authKey.getAuthKey.oauth_consumer_key;
    sortedSet["oauth_nonce"] = generateNonce();
    sortedSet["oauth_signature_method" ] = "HMAC-SHA1";
    sortedSet["oauth_timestamp"]= Math.floor((+new Date)/1000);
    sortedSet["oauth_version"]="1.0";
    sortedSet["responseFormatType"] = "json";

    return Object.keys(sortedSet).reduce( function(prev, curr){
        return prev + curr + '=' + sortedSet[curr] + '&';
    }, "").slice(0, -1);
}

function getBaseString(request_method, request_url,  query_string ) {
    return request_method + "&" + encodeURIComponent( request_url ) + "&" + encodeURIComponent( query_string );
}

function getAuthSignature( base_string, authKey) {
    return CryptoJS.HmacSHA1( base_string, authKey.getAuthKey.oauth_consumer_secret +'&').toString(CryptoJS.enc.Base64);
}

