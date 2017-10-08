import * as validator from 'validator';
import * as ip from 'ip';

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

export function requiredParamChecker ( args, paramSet ) {
  const param_required_array = paramSet.required || [];
  const param_array = paramSet.param;

  const not_exist_required_param = isRequiredParamExist(args, param_required_array);
  if( not_exist_required_param.length >0 ) {
    throw new Error('Error: The following parameters should be defined : ' + not_exist_required_param);
  }

  const out_bound_parameters = isParamOutOfBound( args, param_array );
  if( out_bound_parameters.length >0 ){
    throw new Error('Error: The following parameters should be inbound : ' + out_bound_parameters);
  }
}

export function isValidParam ( args, paramSet ) {
  const param = paramSet.param;

  const invalidParam = Object.keys( args ).map( function(el){
    return (<any>param).map( function(el){
      if( el.indexOf('|') > 0 ){
        return el.split('|')[0];
      }else
        return el;
    }).includes( el ) === false ? el : null;
  }).filter( function(el){
    return el !== null;
  }).join(',');

  if( invalidParam.length >0 ){
    throw new Error('Error: Invalid Parameters : ' + invalidParam);
  }
}

export function isValidIp ( targetIp ) {
  if( !validator.isIP( targetIp ) ){
    throw new Error('Error: Invalid IP');
  }

  if( ip.isPrivate( targetIp) ){
    throw new Error('Error: Private IP Cannot be used for generating request');
  }
}

export function isValidLength( args, paramSet ) {
  const constraints = paramSet.constraint;

  constraints.forEach( constraint=>{
    if( constraint.type === 'string' && constraint.restrict === 'length' ){
      const result = ((constraint.minLength <= args[ constraint.name ].length
        && args[ constraint.name ].length <= constraint.maxLength));

      if( !result ){
        throw new Error(`The length of \'${ constraint.name }\' must be greater
         than ${constraint.minLength} and less than ${ constraint.maxLength}`) ;
      } // end if

    } // end if
  }); // end forEach
}
