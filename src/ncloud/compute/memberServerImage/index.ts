import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';

export interface InterfaceMemberServerImage {
  findPrivateImages( callback: InterfaceCallback ): void;
  createPrivateImage( args: { privateImageName?: string, privateImageDescription?: string, serverInstanceNo: string | number }, callback: InterfaceCallback ): void;
  destroyPrivateImage( args: { privateImageNo: string | number }, callback: InterfaceCallback ): void;
}

export function findPrivateImages( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getMemberServerImageList'
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let privateImageList = responseFilter(response.data.getMemberServerImageListResponse.memberServerImageList[0], 'memberServerImage');

      privateImageList = alias( privateImageList, paramSet[ 'findPrivateImages' ].response_alias );

      callback( null, privateImageList );
    })
    .catch( err=>errorHandling(err, callback));

}

export function createPrivateImage( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'createMemberServerImage',
  };

  args = alias( args, paramSet[ 'createPrivateImage' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      const result = response.data.createMemberServerImageResponse.memberServerImageList[0].memberServerImage;

      callback( null, alias( result, paramSet['createPrivateImage'].response_alias ) );
    })
    .catch( err=>errorHandling(err, callback));

}

export function destroyPrivateImage( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'deleteMemberServerImages',
  };

  args = alias( args, paramSet[ 'destroyPrivateImage' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      const result = response.data.deleteMemberServerImagesResponse.memberServerImageList[0].memberServerImage;

      callback( null, alias( result, paramSet['destroyPrivateImage'].response_alias ) );
    })
    .catch( err=>errorHandling(err, callback));

}
