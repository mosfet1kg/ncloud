import { isArray } from 'lodash';

export function responseFilter( response, fieldName: string ) {
  let { [ fieldName ] : responseItemsList=[] } = response;

  if ( !isArray( responseItemsList )  ) {
    responseItemsList = [ responseItemsList ];
  }

  return responseItemsList;
}
