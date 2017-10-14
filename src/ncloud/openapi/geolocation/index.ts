import {
  InterfaceOauthKey,
  InterfaceRequestInfo,
  InterfaceCallback,
  Validator,
  Oauth,
  errorHandling
} from '../../';
import axios from 'axios';
import paramSet from './paramSet';
import * as url from 'url';

const { ValidIpOnly, ValidParametersOnlyClass, MustIncludeRequiredParametersClass } = Validator;

export interface InterfaceGeoLocation {
  findLocation(req: { ip: string, ext?: string, enc?: string } , callback ): void;
}

@MustIncludeRequiredParametersClass(paramSet)
@ValidParametersOnlyClass(paramSet)
export class GeoLocation implements InterfaceGeoLocation {
  private oauth: Oauth;
  private requestUrl: string;

  constructor(
    oauthKey: InterfaceOauthKey,
  ) {
    this.oauth = new Oauth( oauthKey );
    this.requestUrl = 'https://api.ncloud.com/geolocation/';
  }

  @ValidIpOnly
  public findLocation(args, callback: InterfaceCallback ): void {
    const requestInfo: InterfaceRequestInfo = {
      requestMethod: 'GET',
      requestUrl: this.requestUrl,
      requestAction: 'getLocation',
    };

    const queryString: string = this.oauth
      .getQueryString( args, requestInfo );

    axios.get(
      url.resolve( requestInfo.requestUrl, `?${queryString}` ),
    ).then(response => {
      if ( response.data.returnCode !== 0 ) {
        callback( new Error( response.data.returnMessage ), null );
      } else {
        callback( null, response.data.geoLocation );
      }
    })
      .catch( err=>errorHandling(err, callback));
  }
}
