module.exports = function( args_object, param_set, callback ){
    const param_array = param_set.param;

    var invalid_param = Object.keys(args_object).map( function(el){

        return param_array.map( function(el){
            if( el.indexOf('|') > 0 ){
                return el.split('|')[0];
            }else
                return el;
        }).includes( el ) === false ? el : null;
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