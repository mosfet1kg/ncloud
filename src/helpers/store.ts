import {
  InterfaceAuthParams,
} from '../const/interface';

let store = {};
let authParams: InterfaceAuthParams = {} as any;

export function setValues ( values: any ) {
  const {
    accessKey,
    secretKey,
    apiKey,
    ...remains,
  } = values;

  store = {
    ...store,
    ...remains,
  };

  authParams = {
    accessKey,
    secretKey,
    apiKey
  };
}

export function getValues () {
  return store;
}

export function getAuthParams () {
  return authParams;
}

// export function setAuthParams ( values: any ) {
//   const {
//     accessKey,
//     secretKey,
//     apiKey,
//   } = values;
//
//   authParams = {
//     accessKey,
//     secretKey,
//     apiKey
//   };
// }
