import {
  Oauth,
  InterfaceOauthKey,
  findValue
  // InterfaceRequestInfo,
} from '../../helpers'

import axios from 'axios';
import * as url from 'url';
import { Ncloud } from '../../../';
import { pickBy, indentity, isUndefined } from 'lodash';
import { toJson as xml2Json } from 'xml2json';
import { Logger } from "../Logger/index";

const logger = Logger.createLogger();

let creationJobs = 0;

export interface InterfaceFetchClientInput {
  requestUrl?: string;
  requestMethod: string;
  requestPath: string;
  requestAction?: string;
  requestHeader?: any;
  requestBody?: any;
  regionNo?: number | string;
}

export function fetchClient( args, fetchClientInput: InterfaceFetchClientInput, oauthKey: InterfaceOauthKey, responseType? ): any {
  const { requestAction } = fetchClientInput;

  if ( ['createServerInstances'].some(el => (el === requestAction)) ) {
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(fetch.apply(null, [args, fetchClientInput, oauthKey, responseType]));
        creationJobs--;
      },creationJobs * 3000);
    });

    creationJobs++;

    return promise;
  } else {
    return fetch.apply(null, arguments);
  }
}

function fetch( args, fetchClientInput: InterfaceFetchClientInput, oauthKey: InterfaceOauthKey, responseType? ): any {
  const oauth = new Oauth( oauthKey );

  args = {
    ...args,
    'responseFormatType': 'json'
  };

  const authHeaderString: string = oauth.makeAuthorizationHeader( args, {
    requestMethod: fetchClientInput.requestMethod,
    requestUrl: fetchClientInput.requestUrl ? url.resolve(fetchClientInput.requestUrl,fetchClientInput.requestPath) :
      url.resolve(Ncloud.baseUrl, fetchClientInput.requestPath),
    requestAction: fetchClientInput.requestAction
  });

  const queryString = Oauth.getQueryStringForRequest( pickBy( { ...args, action: fetchClientInput.requestAction }, (value, key)=>!isUndefined(value)));

  const axiosRequest = pickBy({
    method: fetchClientInput.requestMethod,
    baseURL: fetchClientInput.requestUrl || Ncloud.baseUrl,
    url: (fetchClientInput.requestPath ) + ((queryString.length > 0) ? '?'+ queryString : ""),
    data: fetchClientInput.requestBody,
    headers: {
      ...fetchClientInput.requestHeader,
      Authorization: authHeaderString
    },
    responseType
  }, indentity);

  logger.debug( axiosRequest );

  return axios( axiosRequest ).then((response: any)=>{

    if ( findValue(response.headers,'content-type') && findValue(response.headers,'content-type').toLowerCase().indexOf( 'application/xml' ) >= 0 ) {
      logger.debug( response.data );
      logger.debug( response.headers );
      logger.debug( response.data.length );
      response.data =  JSON.parse(xml2Json(response.data));
    }

    return response;
  });

}

