import {
  InterfaceRequestInfo,
  InterfaceCallback,
  errorHandling,
  responseFilter
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
      const zoneList = responseFilter( response.data.getZoneListResponse.zoneList[0], 'zone');
      callback( null, zoneList );
    }
  })
    .catch( err=>errorHandling(err, callback));

}
