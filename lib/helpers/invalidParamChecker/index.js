module.exports = function( args_object, param_order_array ){
    return Object.keys(args_object).map( function(el){
        return param_order_array.includes( el ) === false ? el : null;
    }).filter( function(el){
        return el !== null;
    }).join(',');
};