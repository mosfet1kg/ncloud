module.exports = function( args, alias_set_object){
    if( Array.isArray( args )){
        return args.map( function(el){
            return replace_with_alias_set(el, alias_set_object);
        })
    }else{
        return replace_with_alias_set(args, alias_set_object);
    }
};

function replace_with_alias_set( args_object, alias_set_object ){
    return alias_set_object
        .reduce( function( prev, curr) {
            if( Object.keys( args_object ).includes( curr.src ) ){
                var temp = {};
                temp[ curr.dst ] = prev[ curr.src ];  // because of key ordering
                delete prev[curr.src];
                prev = Object.assign(temp, prev);
            }
            return prev;
        }, args_object)
}