import {
  InterfaceCallback
} from '../../'

export function errorHandling( error: any, callback: InterfaceCallback ) {
  if ( ! error.response ) {
    return callback( error, null );
  }

  if ( error.response.data.responseError ) {
    error.response.data = error.response.data.responseError;
  }

  const newError = new Error(`Error: returnCode: ${ error.response.data.returnCode }, returnMessage: ${ error.response.data.returnMessage }`);
  newError["returnCode"] =  error.response.data.returnCode;
  callback( newError, null );
}
