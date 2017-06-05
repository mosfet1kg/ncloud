var n = require('../../../helpers/nonce');
var generateNonce = n(10);
var axios = require('axios');
var CryptoJS = require("crypto-js");
var validator = require('validator');
var url = require('url');
var getQueryString  = require('../../../helpers/oauth').getQueryString;
var param_set = require('./param');
var config = require('../../config');
var isInvalidParam = require('../../../helpers/invalidParamChecker');
var isThereRequiredParam = require('../../../helpers/requiredParamChecker');
var ip = require('ip');

var getLocation = function( args, callback ){

    if( isInvalidParam( args, param_set[ arguments.callee.name ], callback ) ||
        !isThereRequiredParam( args, param_set[ arguments.callee.name ], callback ) ||
        !isValidIP( args.ip, callback )
    ) return;

    args = Object.assign( {}, args, { action: 'getLocation' });

    var query_string = getQueryString( args, param_set[ arguments.callee.name ], this.authKey );

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

function isValidIP ( target_ip_string, callback){
    if( !validator.isIP( target_ip_string ) ){
        callback( new Error('Invalid IP'));
        return false;
    }

    if( ip.isPrivate( target_ip_string) ){
        callback( new Error('Private IP Cannot be used for generating request'));
        return false;
    }

    return true;
}