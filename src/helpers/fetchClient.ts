import * as CryptoJS from 'crypto-js';
import * as Base64 from 'crypto-js/enc-base64';
import {
  sortBy,
} from 'lodash';
import axios from 'axios';

const space = ' ';
const newLine = '\n';

// const basePath = '/server/v1/';
// const action = 'getZoneList';

export default function (
  {
    method,
    baseURL,
    basePath,
    action,
    actionParams= {},
    authParams,
  }: {
    method: string;
    baseURL: string;
    basePath: string;
    action: string;
    actionParams?: any;
    authParams: InterfaceAuthParams;
  }): any {
  const {
    accessKey,
    secretKey,
    // apiKey,
  } = authParams;

  const timestamp = Date.now();
  const message = [];
  const params = [];

  actionParams = { ...actionParams, responseFormatType: 'json' };

  for (const key of sortBy(Object.keys(actionParams))) {
    params.push(`${key}=${encodeURIComponent(actionParams[key])}`);
  } // end for loop

  let url = null;

  if (method.toLowerCase() === 'get') {
    url = basePath + action + '?' + params.join('&');
  } else {
    url = basePath + action;
  } // end if

  message.push(method);
  message.push(space);
  message.push(url);
  message.push(newLine);
  message.push(timestamp);
  message.push(newLine);
  // message.push(apiKey);
  // message.push(newLine);
  message.push(accessKey);

  const authSignature = Base64.stringify(CryptoJS.HmacSHA256(message.join(''), secretKey));

  if (method.toLowerCase() === 'get') {
    return axios.request({
      method,
      baseURL,
      url,
      headers: {
        'x-ncp-apigw-timestamp' : timestamp,
        // "x-ncp-apigw-api-key" : apiKey,
        'x-ncp-iam-access-key' : accessKey,
        'x-ncp-apigw-signature-v2' : authSignature,
      },
    });
  } // end if

  /** POST **/
  const headers = {
    'x-ncp-apigw-timestamp': timestamp,
    // "x-ncp-apigw-api-key" : apiKey,
    'x-ncp-iam-access-key': accessKey,
    'x-ncp-apigw-signature-v2': authSignature,
    'content-type': 'application/x-www-form-urlencoded',
  };

  return axios.request({
    method,
    baseURL,
    url,
    headers,
    data: params.join('&'),
  });
}
