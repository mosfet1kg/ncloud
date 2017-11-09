import { filter, isEqual } from 'lodash';

export interface InterfaceFilterReflectReturn {
  filter(): any[];
}

export function setFilterReflect( list ) {
  Reflect.defineProperty( list, 'filter', {
    get: ()=>{
      return function ( userInput ) {
        if ( ! userInput ) {
          return list;
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
