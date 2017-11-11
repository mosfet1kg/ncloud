import * as validatorService from './service';
import { isFunction, isArray } from 'lodash';

export function ValidIpOnly( target, key, descriptor ) {
  if( descriptor === undefined ) {
    descriptor = Object.getOwnPropertyDescriptor( target, key );
  }

  const originalMethod = descriptor.value;

  descriptor.value = function( args: { ip: string }, callback ) {
    try {
      validatorService.isValidIp( args.ip );
      return originalMethod.apply( this, arguments );
    } catch( e ) {
      return callback( e );
    }
  }; // end descriptor.value

  return descriptor;
}

const test = (paramSet, paramKey, testFunction)=>{
  return (target: object)=>{
    // save a reference to the original constructor
    const original = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {

      Object.getOwnPropertyNames( constructor['prototype'] ).forEach( methodName=>{
        const { get, set } = Object.getOwnPropertyDescriptor( constructor['prototype'], methodName);
        if ( get || set ) return;

        const originalMethod = constructor['prototype'][ methodName ];

        constructor['prototype'][ methodName ] = function(){
          let callback = arguments[ arguments.length - 1 ];

          if ( ! isFunction(callback) ) {
            arguments[ arguments.length++ ]=(error, response)=>{
              if ( error ) {
                throw error;
              }
            };
            callback = arguments[ arguments.length - 1 ];
          } // end if

          try {
            if ( ! isFunction(arguments[0]) ) {
              const param = ( !!paramKey ) ? paramSet[paramKey] : paramSet[methodName];

              if ( isArray( arguments[0])) {
                arguments[0].forEach( el=>{
                  testFunction( el, param );
                })
              } else {
                testFunction( arguments[0], param );
              }
            } // end if

            originalMethod.apply( this, arguments );
          } catch (e) {
            return callback(e);
          }
        };
      });

      const c : any = function () {
        return constructor.apply(this, args);
      };

      c.prototype = constructor.prototype;

      return new c();
    }

    // the new constructor behaviour
    const f : any = function (...args) {
      return construct(original, args);
    };

    // // copy prototype so intanceof operator still works
    f.prototype = original['prototype'];

    // return new constructor (will override original)
    return f;
  }
};


export function ValidParametersOnlyClass( paramSet, paramKey=null ) {
  if ( ! paramSet ) return;
  return test( paramSet, paramKey, validatorService.isValidParam);
}

export function MustIncludeRequiredParametersClass( paramSet, paramKey=null ) {
  if ( ! paramSet ) return;
  return test( paramSet, paramKey, validatorService.requiredParamChecker);
}

export function ValidConstraintsOnlyClass( paramSet, paramKey=null ) {
  if ( ! paramSet ) return;
  return test( paramSet, paramKey, validatorService.isValidConstraints);
}

// export function ValidParametersOnly( paramSet, paramKey=null ) {
//   return function( target, key, descriptor ) {
//     if( descriptor === undefined ) {
//       descriptor = Object.getOwnPropertyDescriptor( target, key );
//     }
//
//     if ( !!paramKey ) {
//       paramSet = paramSet[paramKey];
//     } else {
//       paramSet = paramSet[ key ];
//     }
//
//     const originalMethod = descriptor.value;
//
//     descriptor.value = function( args, callback ) {
//       try {
//         validatorService.isValidParam( args, paramSet );
//         return originalMethod.apply( this, arguments );
//       } catch (e) {
//         return callback( e );
//       }
//     }; // end descriptor.value
//
//     return descriptor;
//   } // end return function
// }
//
// export function MustIncludeRequiredParameters( paramSet, paramKey=null  ) {
//   return function( target, key, descriptor ) {
//     if( descriptor === undefined ) {
//       descriptor = Object.getOwnPropertyDescriptor( target, key );
//     }
//
//     if ( !!paramKey ) {
//       paramSet = paramSet[paramKey];
//     } else {
//       paramSet = paramSet[ key ];
//     }
//
//     const originalMethod = descriptor.value;
//
//     descriptor.value = function( args, callback ) {
//       try {
//         validatorService.requiredParamChecker( args, paramSet );
//         return originalMethod.apply( this, arguments );
//       } catch (e) {
//         return callback( e );
//       }
//     }; // end descriptor.value
//
//     return descriptor;
//   } // end return function
// }
//
// export function ValidConstraintsOnly( paramSet, paramKey=null ) {
//   return function( target, key, descriptor ) {
//     if( descriptor === undefined ) {
//       descriptor = Object.getOwnPropertyDescriptor( target, key );
//     }
//
//     if ( !!paramKey ) {
//       paramSet = paramSet[paramKey];
//     } else {
//       paramSet = paramSet[ key ];
//     }
//
//     const originalMethod = descriptor.value;
//
//     descriptor.value = function( args, callback ) {
//       try {
//         validatorService.isValidConstraints( args, paramSet );
//         return originalMethod.apply( this, arguments );
//       } catch (e) {
//         return callback( e );
//       }
//     }; // end descriptor.value
//
//     return descriptor;
//   } // end return function
// }
