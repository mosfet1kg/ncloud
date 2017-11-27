import { filter, isEqual, isFunction, isUndefined } from 'lodash';

export interface InterfaceFilterReflectReturn {
  filter(): any[];
}

export function setFilterReflect( list ) {
  Reflect.defineProperty( list, 'filter', {
    get: ()=>{
      return function ( userInput ) {
        if ( isUndefined(userInput) ) {
          return list;
        }

        if ( isFunction(userInput) ) {
          return [...list].filter( userInput );
        }

        return filter( list, (acg) => Object.keys(userInput).every(key => {
            return isEqual( acg[key], userInput[key] );
          })
        );
      }
    },
    configurable: false,
    enumerable: false
  });

  return list;
}
