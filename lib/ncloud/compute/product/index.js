var config = require('../../config');
var getQueryString =  require('../../../helpers/oauth').getQueryString;
var axios = require('axios');
var url   = require('url');
var param_order = require('./paramOrder');
var isInvalidParam = require('../../../helpers/invalidParamChecker');

function getServerImageProductList( args, _callback ){

    var callback = ( arguments.length === 1 && typeof args === 'function') ? args : _callback;

    if( isInvalidParam( args, param_order[ arguments.callee.name ], callback ) ) return;

    var options = { action: 'getServerImageProductList' };

    if( typeof args === 'object'){
        Object.assign(options, args);
    }

    var query_string = getQueryString( options, param_order[ arguments.callee.name ], this.authKey );

    axios.get(
        url.resolve( this.requestUrl ,'?'+query_string )
    )
    .then( function(response){
        callback( null, response.data );
    })
    .catch( function(error){
        callback( error.response.data );
    })
}

function getServerProductList( args, callback ){

    if( isInvalidParam( args, param_order[ arguments.callee.name ], callback ) ) return;

    var options = { action: 'getServerProductList' };

    if( typeof args === 'object'){
        Object.assign(options, args);
    }

    var query_string = getQueryString( options, param_order[ arguments.callee.name ], this.authKey );

    axios.get(
        url.resolve( this.requestUrl ,'?'+query_string )
    )
    .then( function(response){
        callback( null, response.data );
    })
    .catch( function(error){
        callback( error.response.data );
    })
}


module.exports = function(){
    this.requestUrl = config.requestUrl.compute;
    this.requestMethod = 'GET';

    return {
        getServerImageProductList : getServerImageProductList.bind(this),
        getServerProductList : getServerProductList.bind(this)
    }
};