import {
  InterfaceRequestInfo,
  InterfaceCallback,
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceZone {
  findZones( callback: InterfaceCallback ): void;
}

export function findZones( callback: InterfaceCallback ): void {

  const self = this;

  const requestInfo: InterfaceRequestInfo = {
  requestMethod: 'GET',
  requestUrl: self.requestUrl,
  requestAction: 'getZoneList',
  };

  const queryString: string = self.oauth.getQueryString( {}, paramSet['findZones'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getZoneListResponse.returnCode !== 0){
      callback( new Error( response.data.getZoneListResponse.returnMessage ), null);
    }else{
      callback( null, response.data.getZoneListResponse.zoneList );
    }
  })
  .catch( function(error){
    callback( error, null );
  })

}
