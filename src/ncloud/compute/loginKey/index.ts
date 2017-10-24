import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';
import * as fs from 'fs';
import * as path from 'path';

export interface InterfaceLoginKey {
  findLoginKeys( callback: InterfaceCallback ): void;
  createLoginKey( args: { keyName: string, outputPath?: string }, callback: InterfaceCallback ): void;
}

export function findLoginKeys( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getLoginKeyList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let loginKeyList: any[] = responseFilter(response.data.getLoginKeyListResponse.loginKeyList[0], 'loginKey');
      loginKeyList = alias( loginKeyList, paramSet['findLoginKeys'].response_alias );

      callback( null, loginKeyList );
    })
    .catch( err=>errorHandling(err, callback));

}

export function createLoginKey( args, callback: InterfaceCallback ){
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'createLoginKey',
  };

  const { outputPath=null, loginKeyName } = args;
  args = { loginKeyName };
  args = alias(args, paramSet['createLoginKey'].request_alias);

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      const privateKey: string = response.data.createLoginKeyResponse.privateKey;

      if ( outputPath ) {
        fs.writeFileSync(path.join( outputPath, loginKeyName + '.pem'), privateKey, {encoding: "utf8"});
      }

      callback( null , { loginKeyName, privateKey } );
    })
    .catch( err=>errorHandling(err, callback));

}
