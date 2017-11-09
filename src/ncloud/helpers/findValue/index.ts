import { indexOf } from 'lodash';

export function findValue( object, key: string ) {
  const keys = Object.keys( object );
  const index = indexOf( keys.map(el=>el.toLowerCase()), key.toLowerCase());

  if ( index < 0 ) {
   return false;
  } else {
    return object[ keys[ index ] ];
  }
}
