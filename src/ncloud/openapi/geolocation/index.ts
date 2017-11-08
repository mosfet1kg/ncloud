import {
  InterfaceOauthKey,
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  Validator,
  errorHandling
} from '../../';
import paramSet from './paramSet';

const { ValidIpOnly, ValidParametersOnlyClass, MustIncludeRequiredParametersClass } = Validator;

export interface InterfaceGeoLocation {
  findLocation(req: { ip: string, ext?: string, enc?: string } , callback ): void;
}

@MustIncludeRequiredParametersClass(paramSet)
@ValidParametersOnlyClass(paramSet)
export class GeoLocation implements InterfaceGeoLocation {
  private oauthKey: InterfaceOauthKey;
  private requestPath: string;

  constructor(
    oauthKey: InterfaceOauthKey,
  ) {
    this.oauthKey = oauthKey;
    this.requestPath = '/geolocation/';
  }

  get defaultRequestInfo () {
    return {
      requestMethod: 'GET',
      requestPath: this.requestPath,
    }
  }

  @ValidIpOnly
  public findLocation(args, callback: InterfaceCallback ): void {
    const requestInfo: InterfaceFetchClientInput = {
      ...this.defaultRequestInfo,
      requestAction: 'getLocation'
    };

    fetchClient( args, requestInfo, this.oauthKey )
      .then( (response) => {
        callback( null, response.data.geoLocation );
      })
      .catch( err=>errorHandling(err, callback));
  }
}
