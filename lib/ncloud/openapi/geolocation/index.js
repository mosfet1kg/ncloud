var n = require('../../../helpers/nonce');
var generateNonce = n(10);
var axios = require('axios');
var CryptoJS = require("crypto-js");
var validator = require('validator');
var url = require('url');
var getQueryString  = require('../../../helpers/oauth').getQueryString;
var param_order = require('./paramOrder');
var config = require('../../config');
var invalidParamChecker = require('../../../helpers/invalidParamChecker');

var getLocation = function( args, callback ){

    var invalid_param = invalidParamChecker( args, param_order[ arguments.callee.name ] );

    if( invalid_param.length >0 ){
        callback( new Error( 'Invalid Parameters : ' + invalid_param)); return;
    }

    if( !isValid( args.ip ) ){
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

function isValid ( target_ip_string ){
    return validator.isIP( target_ip_string );
}