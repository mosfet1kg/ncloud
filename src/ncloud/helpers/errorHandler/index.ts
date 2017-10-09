import {
  InterfaceCallback
} from '../../'

export function errorHandling( error: any, callback: InterfaceCallback ) {
  if ( error.response.data.responseError ) {
    error.response.data = error.response.data.responseError;
  }

  callback( new Error(`Error: returnCode: ${ error.response.data.returnCode}, returnMessage: ${ error.response.data.returnMessage }`), null );
}
