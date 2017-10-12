import * as CryptoJS from 'crypto-js';

export interface InterfaceOauthKey {
  oauth_consumer_key: string;
  oauth_consumer_secret: string;
}

export interface InterfaceRequestInfo {
  requestMethod: string;
  requestUrl: string;
  requestAction: string;
}

export class Oauth {
  private authKey: InterfaceOauthKey;

  constructor ( authKey: InterfaceOauthKey ) {
    this.authKey = authKey;
  }

  public getQueryString( args, requestInfo: InterfaceRequestInfo ): string {
    const paramTemp = {...args};

    paramTemp.action = requestInfo.requestAction;
    paramTemp.oauth_consumer_key = this.authKey.oauth_consumer_key;
    paramTemp.oauth_nonce = Oauth.generateNonce(15)();
    paramTemp.oauth_signature_method = 'HMAC-SHA1';
    paramTemp.oauth_timestamp = Math.floor( Date.now() / 1000 );
    paramTemp.oauth_version = '1.0';
    paramTemp.responseFormatType = 'json';

    const sortedSet: object = Object.keys( paramTemp ).sort().reduce((prev, key)=>{
      prev = {
        ...prev,
        [ key ] : paramTemp[key]
      };
      return prev;
    }, {});

    let queryString: string =  Object.keys(sortedSet).reduce( (prev, curr) => {
      return prev + curr + '=' + encodeURIComponent(sortedSet[curr]) + '&';
    }, '' ).slice(0, -1);

    const baseString = Oauth.getBaseString( requestInfo, queryString );
    const authSignature = Oauth.getAuthSignature( baseString, this.authKey );

    queryString +=  '&oauth_signature=' + encodeURIComponent( authSignature );

    return queryString;
  };

  static generateNonce(length) {
    let last: number  = null;
    let repeat: number = 0;

    if ( length === 'undefined') {
      length = 15;
    }

    return (): string => {
      let now: number = Math.pow(10, 2) * +new Date();

      if (now === last) {
        repeat++;
      } else {
        repeat = 0;
        last = now;
      }

      let s: string = (now + repeat) + '';
      return +s.substr(s.length - length) + '';
    };
  };

  static getBaseString ( request: InterfaceRequestInfo,  queryString: string ): string {
    return `${request.requestMethod}&${encodeURIComponent( request.requestUrl )}&${encodeURIComponent( queryString )}`;
  }

  static getAuthSignature ( baseString: string, authKey: InterfaceOauthKey ): string {
    return CryptoJS.HmacSHA1( baseString, authKey.oauth_consumer_secret + '&' ).toString(CryptoJS.enc.Base64);
  }
}
