import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

// import paramSet from './paramSet';

export interface InterfaceRegion {
  findRegions( callback: InterfaceCallback ): void;
}

export function findRegions( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getRegionList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      const regionList = responseFilter( response.data.getRegionListResponse.regionList[0], 'region');
      callback( null, regionList );
    })
    .catch( err=>errorHandling(err, callback));

}
