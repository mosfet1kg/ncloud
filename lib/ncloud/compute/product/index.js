var config = require('../../config');
var getQueryString =  require('../../../helpers/oauth').getQueryString;
var axios = require('axios');
var url   = require('url');

function getServerImageProductList( args, _callback ){

    //getServerImageProductList

    var callback = ( arguments.length === 1 && typeof args === 'function') ? args : _callback;

    var query_string = getQueryString( { action: 'getServerImageProductList' }, this.authKey );

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


module.exports = function( authKey ){
    this.authKey = authKey;
    this.requestUrl = config.requestUrl.compute;
    this.requestMethod = 'GET';

    return {
        getServerImageProductList : getServerImageProductList.bind(this)
    }
};