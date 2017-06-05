var n = require('../../../helpers/nonce');
var generateNonce = n(10);
var axios = require('axios');
var CryptoJS = require("crypto-js");
var validator = require('validator');
var url = require('url');
var getQueryString  = require('../../../helpers/oauth').getQueryString;
var param_order = require('./param');
var config = require('../../config');
var isInvalidParam = require('../../../helpers/invalidParamChecker');

var getLocation = function( args, callback ){

    if( isInvalidParam( args, param_order[ arguments.callee.name ], callback ) ) return;

    if( !isValidIP( args.ip ) ){
        callback( new Error('Invalid IP')); return;
    }

    args = Object.assign( {}, args, { action: 'getLocation' });

    var query_string = getQueryString( args, param_order[ arguments.callee.name ], this.authKey );

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

module.exports = function(){
    this.requestMethod = "GET";
    this.requestUrl = config.requestUrl.geolocation;

    return {
        getLocation: getLocation.bind(this)
    }
};

function isValidIP ( target_ip_string ){
    return validator.isIP( target_ip_string );
}