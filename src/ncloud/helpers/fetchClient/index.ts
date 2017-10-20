import {
  Oauth,
  InterfaceOauthKey,
  InterfaceRequestInfo,
} from '../../helpers'

import axios from 'axios';
import * as url from 'url';
import { Ncloud } from '../../../';

export interface InterfaceFetchClientInput {
  requestMethod: string;
  requestPath: string;
  requestAction: string;
}

export function fetchClient( args, fetchClientInput: InterfaceFetchClientInput, oauthKey: InterfaceOauthKey): any {
  const oauth = new Oauth( oauthKey );

  const requestInfo = {
    requestMethod: fetchClientInput.requestMethod,
    requestUrl: url.resolve( Ncloud.baseUrl, fetchClientInput.requestPath ),
    requestAction: fetchClientInput.requestAction
  } as InterfaceRequestInfo;

  const queryString: string = oauth.getQueryString( args, requestInfo );

  return axios.get( url.resolve( requestInfo.requestUrl, `?${queryString}`)  )
}
