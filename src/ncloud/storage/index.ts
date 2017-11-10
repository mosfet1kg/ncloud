import {
  InterfaceOauthKey,
  InterfaceCallback,
  InterfaceFetchClientInput,
  fetchClient,
  errorHandling,
  responseFilter,
  findValue,
  // Validator
} from '../';


const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

// const { ValidParametersOnlyClass, MustIncludeRequiredParametersClass, ValidConstraintsOnlyClass } = Validator;
// import paramSet from './paramSet';
import * as fs from 'fs';
import * as path from 'path';
import * as mime from 'mime-types';
import { toJson as xml2Json } from 'xml2json';
import { Logger } from "../helpers/Logger";
import { isUndefined, slice, pickBy } from "lodash";
import { ObjTree } from "../helpers/ObjTree";

const logger = Logger.createLogger();

export interface InterfaceStorage
{
  uploadFile(
    args: {
      localFile: string,
      container: string;
      key: string;
      uploadChunkSize?: number;
    }): any;

  downloadFile(
    args: {
      localFile: string,
      container: string;
      key: string;
    }): any;

  deleteFile(
    args: {
      container: string;
      key: string;
    },
    callback: InterfaceCallback ): void;

  findFiles(
    args: {
      container: string;
      key: string;
      listMarker?: string;
      listSize?: number;
    },
    callback: InterfaceCallback ): void;

  findLargeFileParts(
    args: {
      containerName: string;
      key: string;
      partListSize?: number;
      partGt?: number;
    },
    callback: InterfaceCallback ): void;

  commitLargeFile(
    args: {
      container: string;
      key: string;
      commit: boolean;
      largeFileComplete?: any;
    },
    callback: InterfaceCallback ): void;

  findAcl(
    args: {
      container: string;
      key: string;
    },
    callback: InterfaceCallback ): void;

  putAcl(
    args: {
      container: string;
      key: string;
      grantee?: string;
      operations: string;
      policy: string;
    },
    callback: InterfaceCallback ): void;

  makeAclPristine(
    args: {
      container: string;
      key: string;
    },
    callback: InterfaceCallback ): void;

  createFolder(
    args: {
      container: string;
      key: string;
    },
    callback: InterfaceCallback ): void;

  deleteFolder(
    args: {
      container: string;
      key: string;
    },
    callback: InterfaceCallback ): void;
}


// @MustIncludeRequiredParametersClass(paramSet)
// @ValidParametersOnlyClass(paramSet)
// @ValidConstraintsOnlyClass(paramSet)
export class Storage implements InterfaceStorage {
  private oauthKey: InterfaceOauthKey;
  private baseFsUrl: string = 'http://restapi.fs.ncloud.com';

  constructor ( oauthKey: InterfaceOauthKey ) {
    this.oauthKey = oauthKey;
  };

  uploadFile ( args ): any {
    const { localFile, container, key, uploadChunkSize=(10 * 1024 * 1024) } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'PUT',
      requestHeader: {
        'Content-Type': mime.lookup( localFile ),
        'Content-Length': 0
      }
    } as InterfaceFetchClientInput;
    const fileSize = (fs.lstatSync( localFile )).size;
    const myEmitter = new MyEmitter();

    fetchClient({'largefile-initiate': null}, input, this.oauthKey )
      .then(res=>{

        const largeFileComplete = {
          'large-file-complete': {
            'part-info': []
          }
        };
        let largeFilePartId = 1;

        const readStream = fs.createReadStream( localFile, { highWaterMark: uploadChunkSize } as any);
        readStream
          .on('data', (chunk) => {

            const newInput = {
              ...input,
              requestHeader : {
                ...input.requestHeader,
                'Content-Length': chunk.byteLength || chunk.length
              },
              requestBody: chunk
            };

            readStream.pause();
            fetchClient({'largefile-part': null, 'part-id': largeFilePartId }, newInput, this.oauthKey )
              .then((res)=>{

                const currentOffset = ( uploadChunkSize * largeFilePartId > fileSize ? fileSize : uploadChunkSize * largeFilePartId);
                const progressTotal = currentOffset/fileSize;
                myEmitter.emit('progress', { progressTotal });

                const etag = findValue(res.headers, 'etag');
                largeFileComplete['large-file-complete']['part-info'].push({
                  'part-num': largeFilePartId++,
                  etag
                });

                readStream.resume();

                if ( progressTotal >= 1 ) {
                  args = {
                    ...args,
                    largeFileComplete
                  };
                  args.commit = true;

                  this.commitLargeFile.bind(this)( args, (err, res)=>{
                    if ( err ) {
                      myEmitter.emit('error', fileStorageErrorHandler(err));

                    } else {
                      myEmitter.emit('end');
                    }
                  });
                } // end if
              })
              .catch( err=>{
                logger.debug('inner error catch');
                logger.debug( err );

                /** Destroy uploaded files if error occur **/
                args.commit = false;
                this.commitLargeFile.bind(this)( args, (err, res)=>{
                  if ( err ) {
                    myEmitter.emit('error', fileStorageErrorHandler(err));
                  }
                });

                readStream.close();
                readStream.emit('error', err);
              })
          })
          .on('error', (err)=>{
            myEmitter.emit('error', fileStorageErrorHandler(err));
          })

      })
      .catch(err=>{
        logger.debug( err );
        myEmitter.emit('error', fileStorageErrorHandler(err));
      });

    return myEmitter;
  } // end function uploadFile

  downloadFile( args ): any {
    const { localFile, container, key } = args;

    const myEmitter = new MyEmitter();
    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(container, key),
      requestMethod: 'GET',
    } as InterfaceFetchClientInput;

    fetchClient({}, input, this.oauthKey, 'stream')
      .then(response=> {
        const contentSize = findValue( response.headers, 'content-length');
        let progressAmount = 0;

        response.data.pipe( fs.createWriteStream( localFile ));

        response.data.on('data', ( chunk )=>{
          progressAmount += chunk.byteLength;
          const progressTotal = progressAmount/contentSize;

          myEmitter.emit('progress',  {
            progressAmount,
            progressTotal
          });

        });

        response.data.on('end', ()=>{
          myEmitter.emit('end');
        })

      })
      .catch((err)=>{
        myEmitter.emit('error', fileStorageErrorHandler(err));
      });

    return myEmitter;
  }

  deleteFile( args, callback: InterfaceCallback ): void {
    const { container, key } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(container, key),
      requestMethod: 'DELETE',
    } as InterfaceFetchClientInput;

    fetchClient({}, input, this.oauthKey )
      .then(res=> {
        callback(null, {
          status: res.status,
          statusText: res.statusText
        });
      })
      .catch(err=>{
        logger.debug( err );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  findFiles( args, callback: InterfaceCallback ): void {
    const { container, key, listMarker, listSize=999 } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'GET',
    } as InterfaceFetchClientInput;

    fetchClient(pickBy({ list: null, 'list-marker': listMarker, 'list-size': (listSize+1) }, (el)=>!isUndefined(el)), input, this.oauthKey )
      .then(res=> {

        const entries = responseFilter( res.data['list-result'].entries, 'entry');

        callback(null, {
          Contents: slice(entries,0,listSize),
          NextMarker: entries.length > listSize ? slice(entries,listSize,entries.length)[0] : null
        });

      })
      .catch(err=>{
        logger.debug( err );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  commitLargeFile ( args, callback: InterfaceCallback ): void {
    const { container, key } = args;
    let { commit, largeFileComplete } = args;
    commit = commit ? 'Y' : 'N';

    const requestHandler = ( commit, requestMessage )=>{
      let input = {
        requestUrl: this.baseFsUrl,
        requestPath: '/' + path.join(container, key),
        requestMethod: 'put',
        requestHeader: {
          'Content-Type': 'application/xml',
          'Content-Length': requestMessage.length
        },
        requestBody: requestMessage
      } as InterfaceFetchClientInput;

      fetchClient({ 'largefile-complete': null , commit }, input, this.oauthKey )
        .then(res=> {
          callback(null, {
            status: res.status,
            statusText: res.statusText
          });
        })
        .catch(err=>{
          logger.debug( err );
          errorHandling( fileStorageErrorHandler(err), callback)}
        );
    };

    if ( commit === 'Y' && isUndefined(largeFileComplete) ) {
      this.findLargeFileParts.bind(this)(args, (error, listPartResult) => {
        if (error) {
          return callback(error, null);
        }

        const parts = responseFilter(listPartResult['list-part-result'], 'part');
        largeFileComplete = parts.reduce((prev, curr) => {
          const partNum = curr['part-num'];
          const etag = curr['etag'];

          prev['large-file-complete']['part-info'].push({
            'part-num': partNum,
            etag
          });

          return prev;
        }, {
          'large-file-complete': {
            'part-info': []
          }
        });

        const xmlMessage = ObjTree.writeXML(largeFileComplete);
        requestHandler(commit, xmlMessage);
      })
    } else if( commit === 'Y' && ! isUndefined(largeFileComplete) ) {
      const xmlMessage = ObjTree.writeXML(largeFileComplete);
      requestHandler(commit, xmlMessage);
    } else {
      requestHandler( commit, '');
    }

  }

  findLargeFileParts ( args, callback: InterfaceCallback ): void {
    const { container, key } = args;
    const { partGt = 0, partListSize = 100 } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(container, key),
      requestMethod: 'get',
    } as InterfaceFetchClientInput;

    fetchClient({ 'largefile-part-list': null , 'part-list-size': partListSize, 'part-gt' : partGt}, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>{
        logger.debug( err.response.data );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  findAcl( args, callback: InterfaceCallback ): void {
    const { container, key } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'get',
    } as InterfaceFetchClientInput;

    fetchClient({ 'acl': null }, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>{
        logger.debug( 'error:',  { ...err.response.config.headers, url: err.response.config.url} );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  putAcl ( args, callback: InterfaceCallback ): void {
    const { container, key, grantee='*', operations, policy } = args;

    const requestBody =
      `<?xml version="1.0" encoding="UTF-8"?>
       <acl>
          <access-control grantee="${ grantee }" operations="${ operations.toLowerCase() }" policy="${ policy.toUpperCase() }"/>
       </acl>`;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'put',
      requestHeader: {
        'Content-Type': 'application/xml',
        'Content-Length': requestBody.length
      },
      requestBody
    } as InterfaceFetchClientInput;

    fetchClient({ 'acl': null }, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>{
        logger.debug( 'error:',  { ...err.response.config.headers, url: err.response.config.url} );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  makeAclPristine ( args, callback: InterfaceCallback ): void {
    const { container, key } = args;

    const requestBody =
      `<?xml version="1.0" encoding="UTF-8"?>
       <acl>
       </acl>`;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'put',
      requestHeader: {
        'Content-Type': 'application/xml',
        'Content-Length': requestBody.length
      },
      requestBody
    } as InterfaceFetchClientInput;

    fetchClient({ 'acl': null }, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>{
        logger.debug( 'error:',  { ...err.response.config.headers, url: err.response.config.url} );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  createFolder( args, callback: InterfaceCallback ): void {
    const { container, key } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'put'
    } as InterfaceFetchClientInput;

    fetchClient({ 'folder': null }, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>
        errorHandling( fileStorageErrorHandler(err), callback)
      );
  }

  deleteFolder( args, callback: InterfaceCallback ): void {
    const { container, key } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( container, key ),
      requestMethod: 'delete'
    } as InterfaceFetchClientInput;

    fetchClient({ 'folder': null }, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>
        errorHandling( fileStorageErrorHandler(err), callback)
      );
  }

}


function fileStorageErrorHandler (err ) {
  const errMsg = JSON.parse( xml2Json( err.response.data || err.data ) );
  if ( errMsg.error.message && errMsg.error.message.indexOf('{') >= 0 ) {
    errMsg.error.message = JSON.parse( errMsg.error.message.replace(/\'/g, '"') );
  }

  const message = errMsg.error.message.message || errMsg.error.message;

  (err as any).errorOutput = 'Error: ' + errMsg.error.code + ', Message: ' + message + ', location: ' + errMsg.error.uri;

  return err;
}
