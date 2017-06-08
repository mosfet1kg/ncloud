var config = require('../../config');
var getQueryString =  require('../../../helpers/oauth').getQueryString;
var axios = require('axios');
var url   = require('url');
var param_set = require('./param');
var isInvalidParam = require('../../../helpers/invalidParamChecker');
var isThereRequiredParam = require('../../../helpers/requiredParamChecker');
var emptyArrayRemover = require('../../../helpers/emptyArrayRemover');
var alias = require('../../../helpers/alias');

function getZoneList( callback ){

    if( !(typeof callback === 'function' && arguments.length===1) ){
        callback( new Error('first parameter must be function type')); return;
    }

    var options = { action: 'getZoneList' };

    var query_string = getQueryString( options, param_set[ 'getZoneList' ], this.authKey );

    axios.get(
        url.resolve( this.requestUrl ,'?'+query_string )
    )
    .then( function(response){
        if( response.data.getZoneListResponse.returnCode !== 0){
            callback( new Error( response.data.getZoneListResponse.returnMessage) );
        }else{
            callback( null, response.data.getZoneListResponse.zoneList
            );
        }
    })
    .catch( function(error){
        callback( error.response.data );
    })
}

function findZones( args ){
    getZoneList.apply( this, arguments );
}

module.exports = function(){
    this.requestUrl = config.requestUrl.compute;
    this.requestMethod = 'GET';

    return {
        getZoneList: getZoneList.bind(this),
        findZones : findZones.bind(this)
    }
};