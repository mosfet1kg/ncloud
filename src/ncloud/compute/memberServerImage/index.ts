import {
  InterfaceRequestInfo,
  InterfaceCallback,
  alias,
  errorHandling
} from '../../';

import axios from 'axios';
import * as url from 'url';
import { isArray } from 'lodash';
import paramSet from './paramSet';

export interface InterfaceMemberServerImage {
  findPrivateImages( callback: InterfaceCallback ): void;
  createPrivateImage( args: { privateImageName?: string, privateImageDesc?: string, serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  destroyPrivateImages( args: { privateImageNoList: string[] | number[] }, callback: InterfaceCallback ): void;
}

export function findPrivateImages( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getMemberServerImageList'
  };

  const queryString: string = this.oauth.getQueryString( {}, paramSet[ 'findPrivateImages' ], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getMemberServerImageListResponse.returnCode !== 0){
      callback( new Error(response.data.getMemberServerImageListResponse.returnMessage ), null);
    } else {
      let { memberServerImage: privateImageList=[] } = response.data.getMemberServerImageListResponse.memberServerImageList[0];
      if ( !isArray( privateImageList )  ) {
        privateImageList = [ privateImageList ];
      }

      privateImageList = alias( privateImageList, paramSet[ 'findPrivateImages' ].response_alias );

      callback( null, privateImageList );
    }

  })
    .catch( err=>errorHandling(err, callback));
}

export function createPrivateImage( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'createMemberServerImage',
  };

  args = alias( args, paramSet[ 'createPrivateImage' ].request_alias );
  const queryString: string = this.oauth.getQueryString( args, paramSet[ 'createPrivateImage' ], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.createMemberServerImageResponse.returnCode !== 0){
      callback( new Error(response.data.createMemberServerImageResponse.returnMessage ), null);
    } else {
      const result = response.data.createMemberServerImageResponse.memberServerImageList[0].memberServerImage;

      callback( null, alias( result, paramSet['createPrivateImage'].response_alias ) );
    }

  })
    .catch( err=>errorHandling(err, callback));
}

export function destroyPrivateImages( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'deleteMemberServerImages',
  };

  args = alias( args, paramSet[ 'destroyPrivateImages' ].request_alias );

  const queryString: string = this.oauth.getQueryString( args, paramSet[ 'destroyPrivateImages' ], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){
    // res
    // { deleteMemberServerImagesResponse:
    // { requestId: 'a723573b-75a9-4c03-ba0b-3b5565b446fd',
    //   returnCode: 0,
    //   returnMessage: 'success',
    //   totalRows: 2,
    //   memberServerImageList: [ [Object] ] } }

    if( response.data.deleteMemberServerImagesResponse.returnCode !== 0){
      callback( new Error(response.data.deleteMemberServerImagesResponse.returnMessage ), null);
    } else {
      const result = response.data.deleteMemberServerImagesResponse.memberServerImageList[0].memberServerImage;

      callback( null, alias( result, paramSet['destroyPrivateImages'].response_alias ) );
    }

  })
    .catch( err=>errorHandling(err, callback));
}
