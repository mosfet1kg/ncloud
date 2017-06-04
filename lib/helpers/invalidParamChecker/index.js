module.exports = function( args_object, param_order_array, callback ){
    var invalid_param = Object.keys(args_object).map( function(el){
        return param_order_array.includes( el ) === false ? el : null;
    }).filter( function(el){
        return el !== null;
    }).join(',');

    if( invalid_param.length >0 ){
        callback( new Error( 'Invalid Parameters : ' + invalid_param));
        return true;
    }else{
        return false;
    }
};