import * as validator from 'validator';
import * as ip from 'ip';
import { isUndefined, indexOf } from 'lodash';

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

export function requiredParamChecker ( args, paramSet={ param: [], required: [] } ) {
  const param_required_array = paramSet.required || [];
  const param_array = paramSet.param || [];

  const not_exist_required_param = isRequiredParamExist(args, param_required_array);
  if( not_exist_required_param.length >0 ) {
    throw new Error('Error: The following parameters should be defined : ' + not_exist_required_param);
  }

  const out_bound_parameters = isParamOutOfBound( args, param_array );
  if( out_bound_parameters.length >0 ){
    throw new Error('Error: The following parameters should be inbound : ' + out_bound_parameters);
  }
}

export function isValidParam ( args, paramSet={ param: []} ) {
  const  { param=[] } = paramSet;

  if ( param.length === 0 ) return;

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
    throw new Error(`Error: Invalid Parameters : ${invalidParam}\nThis function allow following Parameters: ${ param.join(', ')}`);
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

export function isValidConstraints( args, param={ constraints: [], required: [] } ) {

  const { constraints=[], required=[] } = param;

  constraints.forEach( constraint=>{
    if ( isUndefined( args[ constraint.name ]) && indexOf( required, constraint.name ) < 0 ) {
      return;
    }

    if( constraint.type === 'string' && constraint.restrict === 'length' ){
      const testResultMinLength = isUndefined(constraint.minLength) ? true : (constraint.minLength <= args[ constraint.name ].length);
      const testResultMaxLength = isUndefined(constraint.maxLength) ? true : (constraint.maxLength >= args[ constraint.name ].length);

      if( !( testResultMinLength && testResultMaxLength ) ){
        throw new Error(
          [
            `Error: The length of \'${ constraint.name }\' must be `,
            [ isUndefined(constraint.minLength)? '' : `greater than or equals to ${ constraint.minLength }`,
              isUndefined(constraint.maxLength)? '' : `less than or equals to ${ constraint.maxLength }`
            ].filter(el=>el.length>0).join(" and ")
          ].join("")
        ) ;
      } // end if

    } else if ( constraint.type === 'array' && constraint.restrict === 'numItems' ) {
      const testResultMinItems = isUndefined( constraint.minItems ) ? true : ( args[ constraint.name ].length >= constraint.minItems );
      const testResultMaxItems = isUndefined( constraint.maxItems ) ? true : ( args[ constraint.name ].length <= constraint.maxItems );

      if( !( testResultMaxItems && testResultMinItems ) ) {
        throw new Error(
          [ `The length of \'${ constraint.name }\' must be `,
            [ `${ isUndefined(constraint.minItems)? "" : `greater than or equals to ${ constraint.minItems }`}`,
              `${ isUndefined(constraint.maxItems)? "" : `less than or equals to ${ constraint.maxItems }`}`
            ].filter(el=>el.length>0).join(" and ")
          ].join("")
        )
      }
    } else if ( constraint.type === 'array' && constraint.restrict === 'onlyOneExist' ) {
      const keys = Object.keys( args );
      const num = constraint.names.reduce((prev, name)=>{
        if ( indexOf( keys, name ) >=0 ) { prev++ }
        return prev;
      }, 0);

      if ( num === 0 || num > 1 ) {
        throw new Error(`Error: There must be only one of ${ constraint.names.join(', ')} `);
      }

    }// end if
  }); // end forEach
}
