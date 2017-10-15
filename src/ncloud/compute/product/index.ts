import {
  InterfaceRequestInfo,
  InterfaceCallback,
  alias,
  errorHandling,
  responseFilter
} from '../../';

import axios from 'axios';
import * as url from 'url';
import paramSet from './paramSet';

export interface InterfaceProduct {
  findPublicImages( callback: InterfaceCallback ): void;
  findFlavors( args: { vmImageId: string; }, callback: InterfaceCallback ): void;
}

export function findPublicImages( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getServerImageProductList',
  };

  const queryString: string = this.oauth.getQueryString( {}, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

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
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getServerProductList',
  };

  args = alias( args, paramSet[ 'findFlavors' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

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
