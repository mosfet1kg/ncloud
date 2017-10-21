import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

// import paramSet from './paramSet';
import * as fs from 'fs';
import * as path from 'path';

export interface InterfaceLoginKey {
  findLoginKeys( callback: InterfaceCallback ): void;
  createLoginKey( args: { keyName: string, outputPath?: string }, callback: InterfaceCallback ): void;
}

export function findLoginKeys( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'getLoginKeyList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      const loginKeyList: any[] = responseFilter(response.data.getLoginKeyListResponse.loginKeyList[0], 'loginKey');

      callback( null, loginKeyList );
    })
    .catch( err=>errorHandling(err, callback));

}

export function createLoginKey( args, callback: InterfaceCallback ){
  const requestInfo: InterfaceFetchClientInput = {
    requestMethod: 'GET',
    requestPath: this.requestPath,
    requestAction: 'createLoginKey',
  };

  const { outputPath=null, keyName } = args;
  args = { keyName };

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      const privateKey: string = response.data.createLoginKeyResponse.privateKey;

      if ( outputPath ) {
        fs.writeFileSync(path.join( outputPath, keyName + '.pem'), privateKey, {encoding: "utf8"});
      }

      callback( null , { privateKey } );
    })
    .catch( err=>errorHandling(err, callback));

}
