var config = require('../../config');
var getQueryString =  require('../../../helpers/oauth').getQueryString;
var axios = require('axios');
var url   = require('url');
var param_order = require('./paramOrder');
var invalidParamChecker = require('../../../helpers/invalidParamChecker');

function getServerImageProductList( _args, _callback ){

    var callback = ( arguments.length === 1 && typeof _args === 'function') ? _args : _callback;

    var invalid_param = invalidParamChecker( _args, param_order[ arguments.callee.name ] );
    if( invalid_param.length >0 ){
        callback( new Error( 'Invalid Parameters : ' + invalid_param)); return;
    }

    var options = { action: 'getServerImageProductList' };

    if( typeof _args === 'object'){
        Object.assign(options, _args);
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

    var invalid_param = invalidParamChecker( args, param_order[ arguments.callee.name ] );
    if( invalid_param.length >0 ){
        callback( new Error( 'Invalid Parameters : ' + invalid_param)); return;
    }

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