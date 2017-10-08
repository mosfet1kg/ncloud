import {
  InterfaceOauthKey,
  InterfaceRequestInfo,
  InterfaceCallback,
  Validator,
  Oauth,
} from '../../';
import axios from 'axios';
import paramSet from './paramSet';
import * as url from 'url';

const { ValidIpOnly, ValidParametersOnly, MustIncludeRequiredParameters } = Validator;

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

  constructor(
    oauthKey: InterfaceOauthKey,
  ) {
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
