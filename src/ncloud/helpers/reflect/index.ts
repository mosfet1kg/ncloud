import { filter, isEqual } from 'lodash';

export function setFilterReflect(acgList ) {
  Reflect.defineProperty( acgList, 'filter', {
    get: ()=>{
      return function ( userInput ) {
        if ( ! userInput ) {
          return acgList;
        }

        return filter( acgList, (acg) => Object.keys(userInput).every(key => {
            return isEqual( acg[key], userInput[key] );
          })
        );
      }
    },
    configurable: false,
    enumerable: false
  });

  return acgList;
}
