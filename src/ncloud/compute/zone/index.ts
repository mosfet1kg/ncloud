import {
  InterfaceRequestInfo,
  InterfaceCallback,
  errorHandling
} from '../../';

import axios from 'axios';
import * as url from 'url';
// import paramSet from './paramSet';

export interface InterfaceZone {
  findZones( callback: InterfaceCallback ): void;
}

export function findZones( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
  requestMethod: 'GET',
  requestUrl: this.requestUrl,
  requestAction: 'getZoneList',
  };

  const queryString: string = this.oauth.getQueryString( {}, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getZoneListResponse.returnCode !== 0){
      callback( new Error( response.data.getZoneListResponse.returnMessage ), null);
    }else{
      callback( null, response.data.getZoneListResponse.zoneList );
    }
  })
    .catch( err=>errorHandling(err, callback));

}
