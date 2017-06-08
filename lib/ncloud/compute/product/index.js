var config = require('../../config');
var getQueryString =  require('../../../helpers/oauth').getQueryString;
var axios = require('axios');
var url   = require('url');
var param_set = require('./param');
var isInvalidParam = require('../../../helpers/invalidParamChecker');
var isThereRequiredParam = require('../../../helpers/requiredParamChecker');
var emptyArrayRemover = require('../../../helpers/emptyArrayRemover');
var alias = require('../../../helpers/alias');

function getServerImageProductList( args, _callback ){

    var callback = ( arguments.length === 1 && typeof args === 'function') ? args : _callback;

    // args = emptyArrayRemover(args);  //argument에서 빈 array를 가지는 속성을 제거한다.

    if( isInvalidParam( args, param_set[ 'getServerImageProductList' ], callback ) ||
        !isThereRequiredParam( args, param_set[ 'getServerImageProductList' ], callback )
    ) return;

    var options = { action: 'getServerImageProductList' };

    if( typeof args === 'object'){
        Object.assign(options, args);
    }

    var query_string = getQueryString( options, param_set[ 'getServerImageProductList' ], this.authKey );

    axios.get(
        url.resolve( this.requestUrl ,'?'+query_string )
    )
    .then( function(response){

        if( response.data.getServerImageProductListResponse.returnCode !== 0){
            callback( new Error( response.data.getServerImageProductListResponse.returnMessage) );
        }else{
            callback( null, alias( response.data.getServerImageProductListResponse.productList[0].product,
                                    param_set[ 'getServerImageProductList' ].response_alias )
            );
        }
    })
    .catch( function(error){
        callback( error.response.data );
    })
}

function getServerProductList( args, callback ){
    if( typeof args !== 'object'){ callback( new Error('Input parameter must be object')); return; }

    args = alias( args, param_set[ 'getServerProductList' ].request_alias );

    if( isInvalidParam( args, param_set[ 'getServerProductList' ], callback ) ) return;

    var options = { action: 'getServerProductList' };

    if( typeof args === 'object'){
        Object.assign(options, args);
    }

    var query_string = getQueryString( options, param_set[ 'getServerProductList' ], this.authKey );

    axios.get(
        url.resolve( this.requestUrl ,'?'+query_string )
    )
    .then( function(response){

        if( response.data.getServerProductListResponse.returnCode !== 0){
            callback( new Error( response.data.getServerProductListResponse.returnMessage) );
        }else{
            callback( null, alias( response.data.getServerProductListResponse.productList[0].product,
                                   param_set[ 'getServerProductList' ].response_alias )
            );
        }

    })
    .catch( function(error){
        callback( error.response.data );
    })
}

function findImages( args ){
    getServerImageProductList.apply( this, arguments);
}

function findFlavorsByImgCd( args ){
    getServerProductList.apply( this, arguments );
}

module.exports = function(){
    this.requestUrl = config.requestUrl.compute;
    this.requestMethod = 'GET';

    return {
        getServerImageProductList : getServerImageProductList.bind(this),
        getServerProductList : getServerProductList.bind(this),
        findImages : findImages.bind(this),
        findFlavorsByImgCd : findFlavorsByImgCd.bind(this)
    }
};