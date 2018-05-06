import apiDescription from './apiDescription';
import fetchClient from './fetchClient';
import {
  get,
  includes,
  isString,
  isNumber,
  isBolean,
  isArray,
} from 'lodash';
import {
  InterfaceAuthParams,
} from "../const/interface";

const {
  baseURL: apiGwBaseURL,
} = apiDescription;

export default function(
  {
    baseURL=apiGwBaseURL,
    actionPath,
    input,
    authParams,
  }: {
    baseURL?: string;
    actionPath: string;
    input: any;
    authParams: InterfaceAuthParams;
  }
) {
  const {
    method,
    action,
    basePath,
    actionParamList={},
    responseName,
  } = get(apiDescription, actionPath);

  return testInputParams(
    {
      input,
      action,
      actionParamList,
    }
  ).then(async () => {
    return await getActionParams({
      input,
    })
  }).then((actionParams) => {
    return fetchClient({
      method,
      baseURL,
      action,
      basePath,
      actionParams,
      authParams,
    })
      // .then(response=>{ console.log( response.data ); return response;})
      .then(response => get(response.data, responseName));
  })
};

function testInputParams(
  {
    input,
    action,
    actionParamList,
  }
) {
  return new Promise((resolve, reject) => {
    try {
      const inputObjectKeys = Object.keys( input );
      const actionParamsListObjectKeys = Object.keys( actionParamList );

      if ( actionParamsListObjectKeys.length === 0 ) {
        return resolve();
      } // end if

      actionParamsListObjectKeys.forEach((actionParamKey) => {
        const required = get(actionParamList[actionParamKey], 'required', false);

        if ( required && ! get( input, actionParamKey, false ) ) {
          throw new Error(`Parameter Missing: ${ actionParamKey } @${ action } method`);
        } // end if
      });

      inputObjectKeys.forEach( (inputKey) => {
        if ( ! includes( actionParamsListObjectKeys, inputKey ) ) {
          throw new Error(`Invalid Input: ${ inputKey } @${ action } method`);
        } // end if

        const type = get(actionParamList, `${inputKey}.type`);

        switch (type) {
          case 'string': {
            if ( !isString(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method`);
            } // end if

            break;
          }
          case 'string[]': {
            if ( ! isArray(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method`);
            } // end if

            input[ inputKey ].forEach((el) => {
              if ( !isString(el) ) {
                throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method`);
              } // end if
            });
            break;
          }
          case 'number': {
            if ( !isNumber(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method`);
            } // end if

            break;
          }
          case 'boolean': {
            if ( !isBolean(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method`);
            } // end if

            break;
          }
        } // end switch
      }); // end forEach

      resolve();
    } catch (e) {
      reject(e);
    } // end try ~ catch
  })
}

function getActionParams(
  {
    input,
  }
) {
  return new Promise((resolve, reject) => {
    try {
      const actionParams = Object
        .keys( input )
        .reduce(( prev, key ) => {
          if ( isArray( input[key] )) {
            input[key].forEach((el, idx) => {
              prev = { ...prev, [`${ key }.${ idx + 1 }`]: el };
            })
          } else {
            prev = { ...prev, [key]: input[key] }
          } // end if
          return prev;
        }, {});

      resolve( actionParams );
    } catch (e) {
      reject(e);
    } // end try ~ catch
  })
}
