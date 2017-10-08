export function isRequiredParamExist(args_object, param_required_array){
  return param_required_array.reduce( function( prev, curr){
    if( !(<any>Object).keys(args_object).includes( curr ) ){
      prev = prev.concat( curr );
    }
    return prev;
  }, [])
    .join(',');
}

export function isParamOutOfBound(args_object, param_array){
  return param_array.reduce( function(prev, curr){
    if( curr.indexOf('|') >0 ){
      prev = prev.concat({ name: curr.split('|')[0], maxItems: curr.split('|')[1].split(':')[0]==='maxItems'? parseInt( curr.split('|')[1].split(':')[1] ):null });
    }
    return prev;
  }, [])
    .reduce( function(prev, curr){
      if( isNaN(curr.maxItems) ){
        prev = prev.concat( curr.name + ' must be integer');
      }else if( (<any>Object).keys(args_object).includes(curr.name) && args_object[ curr.name ].length > curr.maxItems){
        prev = prev.concat( 'The number of \`' + curr.name + '\` is out of bound ' + curr.maxItems );
      }
      return prev;
    }, [])
    .join(',');
}
