import * as CryptoJS from 'crypto-js';
import { isNull } from 'lodash';
import {isUndefined} from "util";
import { Logger } from '../../helpers';

const logger = Logger.createLogger();

export interface InterfaceOauthKey {
  oauth_consumer_key: string;
  oauth_consumer_secret: string;
}

export interface InterfaceRequestInfo {
  requestMethod: string;
  requestUrl: string;
  requestAction?: string;
  regionNo?: string | number;
}

export class Oauth {
  private authKey: InterfaceOauthKey;

  constructor ( authKey: InterfaceOauthKey ) {
    this.authKey = authKey;
  }

  public makeAuthorizationHeader( args, requestInfo: InterfaceRequestInfo ) {
    let { significantParameters, authSignature } = Oauth.getParametersForAuth( args, requestInfo, this.authKey );

    let authHeaderString = Object.keys(significantParameters).map((key)=>{
      if ( !isNull( significantParameters[key] ) ) {
        return (key + '=\"' + significantParameters[key] + '\"');
      }
    }).filter(el=>!isUndefined(el)).join(', ');

    return 'OAuth ' + authHeaderString + ', oauth_signature=\"' + encodeURIComponent(authSignature) + '\"';
  }

  static getParametersForAuth( args, requestInfo, authKey ) {
    let paramTemp = {...args};

    if ( requestInfo.regionNo ) {
      paramTemp.regionNo = requestInfo.regionNo;
    }

    if ( requestInfo.requestAction ) {
      paramTemp.action = requestInfo.requestAction;
    }

    paramTemp = {
      ...paramTemp,
      ...Oauth.getSignificantParameters( authKey )
    };

    /** Get Significant Parameters For Signature Base String **/
    const significantParameters: object = Oauth.getSortedSet( paramTemp );
    const sortedSignificantParameters = Oauth.getSortedSet( significantParameters );

    const queryString = Object.keys(sortedSignificantParameters).map( (key) => {
      const value = sortedSignificantParameters[key];
      return key + '=' + ( isNull(value) ? "" : encodeURIComponent(value));
    }).filter(el=>!isUndefined(el)).join('&');

    const baseString = Oauth.getBaseString( requestInfo, queryString );
    const authSignature = Oauth.getAuthSignature( baseString, authKey );

    logger.debug( queryString );
    logger.debug( baseString );
    logger.debug( authSignature );
    return {
      queryString,
      baseString,
      authSignature,
      significantParameters
    }
  }

  static getQueryStringForRequest( significantParameters ): string {
    if ( Object.keys( significantParameters ).length === 0 || isUndefined( significantParameters ) )
      return "";

    const sortedSignificantParameters = Oauth.getSortedSet( significantParameters );

    return Object.keys(sortedSignificantParameters).map( (key) => {
      const value = sortedSignificantParameters[key];

      return key + ( isNull(value) ? "" : "=" + encodeURIComponent(value) );
    }).filter(el=>!isUndefined(el)).join('&');
  }

  static getSortedSet( targetObject ) {
    return Object.keys( targetObject ).sort().reduce((prev, key)=>{
      if ( Array.isArray( targetObject[key]) ) {
        for ( let i: number = 1; i <= targetObject[key].length ; i++) {
          prev[ key + '.' + i ] = targetObject[key][i - 1];
        }
      } else {
        prev[ key ] = targetObject[ key ];
      } // end if

      return prev;
    }, {});
  }

  static getSignificantParameters ( authKey ) {
    return {
      oauth_consumer_key : authKey.oauth_consumer_key,
      oauth_nonce : Oauth.generateNonce(15)(),
      oauth_signature_method : 'HMAC-SHA1',
      oauth_timestamp : Math.floor(Date.now() / 1000),
      oauth_version : '1.0',
    }
  }

  static getBaseString ( request: InterfaceRequestInfo,  queryString: string ): string {
    return `${request.requestMethod.toUpperCase()}&${encodeURIComponent( request.requestUrl )}&${encodeURIComponent( queryString )}`;
  }

  static getAuthSignature ( baseString: string, authKey: InterfaceOauthKey ): string {
    return CryptoJS.HmacSHA1( baseString, authKey.oauth_consumer_secret + '&' ).toString(CryptoJS.enc.Base64);
  }

  static generateNonce(length) {
    let last: number  = null;
    let repeat: number = 0;

    if ( typeof length === 'undefined') {
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
}
