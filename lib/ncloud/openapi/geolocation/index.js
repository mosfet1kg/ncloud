var n = require('../../../helpers/nonce');
var generateNonce = n(10);
var axios = require('axios');
var CryptoJS = require("crypto-js");
var validator = require('validator');
var url = require('url');
var getQueryString  = require('../../../helpers/oauth').getQueryString;
var config = require('../../config');

var getLocation = function( target_ip_string, callback ){
    if( !isValid( target_ip_string ) ){
        callback( new Error('Invalid IP')); return;
    }

    var query_string = getQueryString( { action: 'getLocation', 'ip': target_ip_string }, this.authKey );

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
    this.requestUrl = config.requestUrl.geolocation;

    return {
        getLocation: getLocation.bind(this)
    }
};

function isValid ( target_ip_string ){
    return validator.isIP( target_ip_string );
}