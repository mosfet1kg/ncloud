import * as CryptoJS from 'crypto-js';

export class Oauth {

  private authKey: InterfaceOauthKey;

  constructor ( authKey: InterfaceOauthKey ) {
    this.authKey = authKey;
  }

  public getQueryString( args, paramSet, requestInfo: InterfaceRequestInfo ): string {

    const paramOrder = paramSet.order;
    const paramTemp = (<any>Object).assign({}, args);

    paramTemp.action = requestInfo.requestAction;
    paramTemp.oauth_consumer_key = this.authKey.oauth_consumer_key;
    paramTemp.oauth_nonce = this.generateNonce(15)();
    paramTemp.oauth_signature_method = 'HMAC-SHA1';
    paramTemp.oauth_timestamp = Math.floor( Date.now() / 1000 );
    paramTemp.oauth_version = '1.0';

    // param_set['platformTypeCodeList.1']="LNX64";
    paramTemp.responseFormatType = 'json';

    // param_set["serverImageProductCode"] = "SPSW0LINUX000031";

    const sortedSet: object = paramOrder.reduce( ( prev, key ) => {
      if ( (<any>Object).keys( paramTemp ).includes( key ) ) {

        if ( Array.isArray( paramTemp[key]) ) {
          for ( let i: number = 1; i <= paramTemp[key].length ; i++) {
            prev[ key + '.' + i ] = paramTemp[key][i - 1];
          }
        } else {
          prev[ key ] = paramTemp[ key ];
        } // end if
      }
      return prev;
    }, {});

    let queryString: string =  Object.keys(sortedSet).reduce( (prev, curr) => {
      return prev + curr + '=' + sortedSet[curr] + '&';
    }, '' ).slice(0, -1);

    const baseString = this.getBaseString( requestInfo, queryString );
    const authSignature = this.getAuthSignature( baseString );

    queryString +=  '&oauth_signature=' + encodeURIComponent( authSignature );

    return queryString;
  };

  private generateNonce(length) {
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

  private getBaseString ( request: InterfaceRequestInfo,  queryString: string ): string {
    return `${request.requestMethod}&${encodeURIComponent( request.requestUrl )}&${encodeURIComponent( queryString )}`;
  }

  private getAuthSignature ( baseString: string ): string {
    return CryptoJS.HmacSHA1( baseString, this.authKey.oauth_consumer_secret + '&' ).toString(CryptoJS.enc.Base64);
  }
}

export interface InterfaceOauthKey {
  oauth_consumer_key: string;
  oauth_consumer_secret: string;
}

export interface InterfaceRequestInfo {
  requestMethod: string;
  requestUrl: string;
  requestAction: string;
}
