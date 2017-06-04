var config = require('../../config');
var getQueryString =  require('../../../helpers/oauth').getQueryString;
var axios = require('axios');
var url   = require('url');

function getServerImageProductList( _args, _callback ){

    var callback = ( arguments.length === 1 && typeof _args === 'function') ? _args : _callback;
    var options = { action: 'getServerImageProductList' };

    if( typeof _args === 'object'){
        Object.assign(options, _args);
    }

    var query_string = getQueryString( options, this.authKey );

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

function getServerProductList( _args, _callback ){
    var callback = ( arguments.length === 1 && typeof _args === 'function') ? _args : _callback;
    var options = { action: 'getServerProductList' };

    if( typeof _args === 'object'){
        Object.assign(options, _args);
    }

    var query_string = getQueryString( options, this.authKey );

    console.log( query_string  );
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