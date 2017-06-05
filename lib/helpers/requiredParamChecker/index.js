module.exports = function( args_object, param_set, callback ){
    var param_required_array = param_set.required || [];
    var param_array = param_set.param;

    var not_exist_required_param = isRequiredParamExist(args_object, param_required_array);
    if( not_exist_required_param.length >0 ) {
        callback(new Error('The following parameters should be defined : ' + not_exist_required_param));
        return false;
    }

    var out_bound_parameters = isParamOutOfBound( args_object, param_array );
    if( out_bound_parameters.length >0 ){
        callback(new Error('The following parameters should be inbound : ' + out_bound_parameters));
        return false;
    }

    return true;
};

function isRequiredParamExist(args_object, param_required_array){
    return param_required_array.reduce( function( prev, curr){
        if( !Object.keys(args_object).includes( curr ) ){
            prev = prev.concat( curr );
        }
        return prev;
    }, [])
    .join(',');
}

function isParamOutOfBound(args_object, param_array){
    return param_array.reduce( function(prev, curr){
        if( curr.indexOf('|') >0 ){
            prev = prev.concat({ name: curr.split('|')[0], maxItems: curr.split('|')[1].split(':')[0]==='maxItems'? parseInt( curr.split('|')[1].split(':')[1] ):null });
        }
        return prev;
    }, [])
    .reduce( function(prev, curr){
        if( isNaN(curr.maxItems) ){
            prev = prev.concat( curr.name + ' must be integer');
        }else if( Object.keys(args_object).includes(curr.name) && args_object[ curr.name ].length > curr.maxItems){
            prev = prev.concat( 'The number of \`' + curr.name + '\` is out of bound ' + curr.maxItems );
        }
        return prev;
    }, [])
    .join(',');
}