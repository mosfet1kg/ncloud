import * as validatorService from './service';

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

export function ValidParametersOnly( paramSet ) {
  return function( target, key, descriptor ) {
    if( descriptor === undefined ) {
      descriptor = Object.getOwnPropertyDescriptor( target, key );
    }

    const originalMethod = descriptor.value;

    descriptor.value = function( args, callback ) {
      try {
        validatorService.isValidParam( args, paramSet );
        return originalMethod.apply( this, arguments );
      } catch (e) {
        return callback( e );
      }
    }; // end descriptor.value

    return descriptor;
  } // end return function
}

export function MustIncludeRequiredParameters( paramSet ) {
  return function( target, key, descriptor ) {
    if( descriptor === undefined ) {
      descriptor = Object.getOwnPropertyDescriptor( target, key );
    }
    const originalMethod = descriptor.value;

    descriptor.value = function( args, callback ) {
      try {
        validatorService.requiredParamChecker( args, paramSet );
        return originalMethod.apply( this, arguments );
      } catch (e) {
        return callback( e );
      }
    }; // end descriptor.value

    return descriptor;
  } // end return function
}

export function ValidLengthOnly( paramSet ) {
  return function( target, key, descriptor ) {
    if( descriptor === undefined ) {
      descriptor = Object.getOwnPropertyDescriptor( target, key );
    }

    const originalMethod = descriptor.value;

    descriptor.value = function( args, callback ) {
      try {
        validatorService.isValidLength( args, paramSet );
        return originalMethod.apply( this, arguments );
      } catch (e) {
        return callback( e );
      }
    }; // end descriptor.value

    return descriptor;
  } // end return function
}
