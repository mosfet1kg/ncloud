import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';

export interface InterfaceProduct {
  findPublicImages( callback: InterfaceCallback ): void;
  findFlavors( args: { vmImageId: string; }, callback: InterfaceCallback ): void;
}

export function findPublicImages( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getServerImageProductList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.getServerImageProductListResponse.returnCode !== 0){
        callback( new Error( response.data.getServerImageProductListResponse.returnMessage), null );
      }else{
        const vmImageList = responseFilter(response.data.getServerImageProductListResponse.productList[0], 'product');

        callback( null, alias( vmImageList,
          paramSet[ 'findPublicImages' ].response_alias )
        );
      }
    })
    .catch( err=>errorHandling(err, callback));

}

export function findFlavors( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getServerProductList',
  };

  args = alias( args, paramSet[ 'findFlavors' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      if( response.data.getServerProductListResponse.returnCode  !== 0){
        callback( new Error( response.data.getServerProductListResponse.returnMessage ), null );
      }else{
        const vmFlavorList = responseFilter(response.data.getServerProductListResponse.productList[0], 'product');

        callback( null, alias( vmFlavorList,
          paramSet[ 'findFlavors' ].response_alias )
        );
      }
    })
    .catch( err=>errorHandling(err, callback));

}
