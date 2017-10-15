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

export interface InterfaceMemberServerImage {
  findPrivateImages( callback: InterfaceCallback ): void;
  createPrivateImage( args: { privateImageName?: string, privateImageDescription?: string, serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  destroyPrivateImage( args: { privateImageNo: string | number }, callback: InterfaceCallback ): void;
}

export function findPrivateImages( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'getMemberServerImageList'
  };

  const queryString: string = this.oauth.getQueryString( {}, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getMemberServerImageListResponse.returnCode !== 0){
      callback( new Error(response.data.getMemberServerImageListResponse.returnMessage ), null);
    } else {

      let privateImageList = responseFilter(response.data.getMemberServerImageListResponse.memberServerImageList[0], 'memberServerImage');

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
  const queryString: string = this.oauth.getQueryString( args, requestInfo );

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

export function destroyPrivateImage( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: this.requestUrl,
    requestAction: 'deleteMemberServerImages',
  };

  args = alias( args, paramSet[ 'destroyPrivateImage' ].request_alias );

  const queryString: string = this.oauth.getQueryString( args, requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.deleteMemberServerImagesResponse.returnCode !== 0){
      callback( new Error(response.data.deleteMemberServerImagesResponse.returnMessage ), null);
    } else {
      const result = response.data.deleteMemberServerImagesResponse.memberServerImageList[0].memberServerImage;

      callback( null, alias( result, paramSet['destroyPrivateImage'].response_alias ) );
    }

  })
    .catch( err=>errorHandling(err, callback));
}
