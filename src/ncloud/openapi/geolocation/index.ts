import {
  InterfaceOauthKey,
  InterfaceRequestInfo,
  InterfaceCallback,
  Validator,
  ValidIpOnly,
  ValidParametersOnly,
  MustIncludeRequiredParameters,
  Oauth,
} from '../../';

import axios from 'axios';
import paramSet from './paramSet';
import * as url from 'url';

export interface InterfaceUserGeoLocationInput {
  ip: string;
  ext?: string;
  enc?: string;
}
export interface InterfaceGeoLocation {
  findLocation(req: /**InterfaceUserGeoLocationInput**/{ ip: string, ext?: string, enc?: string } , callback ): void;
}

export class GeoLocation implements InterfaceGeoLocation {
  private oauth: Oauth;
  private requestUrl: string;
  private validator: Validator;

  constructor(
    oauthKey: InterfaceOauthKey,
  ) {
    this.validator = new Validator();
    this.oauth = new Oauth( oauthKey );
    this.requestUrl = 'https://api.ncloud.com/geolocation/';
  }

  @MustIncludeRequiredParameters(paramSet['findLocation'])
  @ValidParametersOnly(paramSet['findLocation'])
  @ValidIpOnly
  public findLocation(args: InterfaceUserGeoLocationInput, callback: InterfaceCallback ): void {
    const requestInfo: InterfaceRequestInfo = {
      requestMethod: 'GET',
      requestUrl: this.requestUrl,
      requestAction: 'getLocation',
    };

    if (
      this.validator.requiredParamChecker( args, paramSet[ 'findLocation' ], callback  )
    ) return;

    const queryString: string = this.oauth
      .getQueryString( args, paramSet['findLocation'], requestInfo );

    axios.get(
      url.resolve( requestInfo.requestUrl, `?${queryString}` ),
    ).then(response => {
      if ( response.data.returnCode !== 0 ) {
        callback( new Error( response.data.returnMessage ), null );
      } else {
        callback( null, response.data.geoLocation );
      }
    })
      .catch( error => {
        callback( new Error(`Error: returnCode: ${ error.response.data.returnCode}, returnMessage: ${ error.response.data.returnMessage }`), null );
      });
  }
}
