import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

// import paramSet from './paramSet';

export interface InterfaceZone {
  findZones( callback: InterfaceCallback ): void;
}

export function findZones( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
  requestMethod: 'GET',
  requestPath: this.requestPath,
  requestAction: 'getZoneList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.getZoneListResponse.returnCode !== 0){
        callback( new Error( response.data.getZoneListResponse.returnMessage ), null);
      }else{
        const zoneList = responseFilter( response.data.getZoneListResponse.zoneList[0], 'zone');
        callback( null, zoneList );
      }
    })
    .catch( err=>errorHandling(err, callback));

}
