import {
  Oauth,
  InterfaceOauthKey,
  InterfaceRequestInfo,
} from '../../helpers'

import axios from 'axios';
import * as url from 'url';
import { Ncloud } from '../../../';

let serverCreationJobs = 0;

export interface InterfaceFetchClientInput {
  requestMethod: string;
  requestPath: string;
  requestAction: string;
  regionNo?: number | string;
}

export function fetchClient( args, fetchClientInput: InterfaceFetchClientInput, oauthKey: InterfaceOauthKey): any {
  const { requestAction } = fetchClientInput;

  if ( requestAction === 'createServerInstances' ) {
    serverCreationJobs++;

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(fetch.apply(null, [args, fetchClientInput, oauthKey]));
        serverCreationJobs--;
      },serverCreationJobs * 3000);
    });
  } else {
    return fetch.apply(null, arguments);
  }
}

function fetch( args, fetchClientInput: InterfaceFetchClientInput, oauthKey: InterfaceOauthKey ): any {
  const oauth = new Oauth( oauthKey );

  const requestInfo = {
    requestMethod: fetchClientInput.requestMethod,
    requestUrl: url.resolve( Ncloud.baseUrl, fetchClientInput.requestPath ),
    requestAction: fetchClientInput.requestAction,
    regionNo: fetchClientInput.regionNo
  } as InterfaceRequestInfo;

  const queryString: string = oauth.getQueryString( args, requestInfo );

  return axios.get( url.resolve( requestInfo.requestUrl, `?${queryString}`)  )
}

