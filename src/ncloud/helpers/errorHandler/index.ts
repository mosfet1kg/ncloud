import {
  InterfaceCallback
} from '../../'

export function errorHandling( error: any, callback: InterfaceCallback ) {
  if (!error.response) {
    return callback(error, null);
  }

  if (error.response.data.responseError) {
    error.response.data = error.response.data.responseError;
  }

  if ( error.errorOutput ) {
    error.message = error.errorOutput;
    callback( error, null);
  }else if ( error.response.data.returnCode || error.response.data.returnMessage ) {
    error.message = `Error: returnCode: ${ error.response.data.returnCode }, returnMessage: ${ error.response.data.returnMessage }`;
    callback( error, null );
  } else if( error.response && error.response.data ){
    error.message = error.response.data;
    callback( error, null );
  } else {
    callback( error, null );
  }
}
