module.exports = function( args_object ){

    return Object.keys( args_object )
        .reduce( function( prev, key ){
            if( Array.isArray( args_object[key]) && args_object[key].length === 0 ) {
                return prev;
                // }else if( typeof args_object[key] === 'string' || typeof args_object[key] === 'number'){
            }else{
                prev[key] = args_object[key];
                return prev;
            }
        },{})
};