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
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string
      }}): any;

  downloadFile(
    args: {
      localFile: string,
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string
      }}): any;

  deleteFile(
    args: {
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string
      }},
    callback: InterfaceCallback ): void;

  findFiles(
    args: {
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string
      }},
    callback: InterfaceCallback ): void;

  findLargeFileParts(
    args: {
      partListSize?: number;
      localFile: string,
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string
        commit?: string,
      }},
    callback: InterfaceCallback ): void;

  findAcl(
    args: {
      localFile: string,
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string
      }},
    callback: InterfaceCallback ): void;

  commitLargeFile(
    args: {
      localFile: string,
      ncloudParams: {
        containerName: string;
        key: string,
        prefix?: string,
        commit: boolean,
      }},
    callback: InterfaceCallback ): void;
}

// @MustIncludeRequiredParametersClass(paramSet)
// @ValidParametersOnlyClass(paramSet)
// @ValidConstraintsOnlyClass(paramSet)
export class Storage implements InterfaceStorage {
  private oauthKey: InterfaceOauthKey;
  private baseFsUrl: string = 'http://restapi.fs.ncloud.com';

  public uploadChunkSize = 10 * 1024 * 1024;

  constructor ( oauthKey: InterfaceOauthKey ) {
    this.oauthKey = oauthKey;
  };

  uploadFile ( args ): any {
    const { localFile } = args;
    const { ncloudParams } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(ncloudParams.containerName, ncloudParams.key ),
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

        const readStream = fs.createReadStream( localFile, { highWaterMark: this.uploadChunkSize } as any);
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

                const currentOffset = (this.uploadChunkSize * largeFilePartId > fileSize ? fileSize : this.uploadChunkSize * largeFilePartId);
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
                  args.ncloudParams.commit = true;

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
                args.ncloudParams.commit = false;
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
    const { localFile } = args;
    const { ncloudParams } = args;
    const myEmitter = new MyEmitter();
    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(ncloudParams.containerName, ncloudParams.key ),
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
    const { ncloudParams } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(ncloudParams.containerName, ncloudParams.key ),
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
    const { ncloudParams } = args;
    let { listMarker, listSize=999 }: { listMarker: string, listSize: number } = ncloudParams;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(ncloudParams.containerName, ncloudParams.key ),
      requestMethod: 'GET',
    } as InterfaceFetchClientInput;

    fetchClient(pickBy({ list: null, 'list-marker': listMarker, 'list-size': (listSize+1) }, (el)=>!isUndefined(el)), input, this.oauthKey )
      .then(res=> {

        const entries = responseFilter( res.data['list-result'].entries, 'entry');

        callback(null, {
          Contents: slice(entries,0,listSize),
          NextMarker: entries.length > listSize ? slice(entries,listSize,entries.length) : null
        });

      })
      .catch(err=>{
        logger.debug( err );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  commitLargeFile ( args, callback: InterfaceCallback ): void {
    const { ncloudParams } = args;
    let { commit } = ncloudParams;
    let { largeFileComplete } = args;
    commit = commit ? 'Y' : 'N';

    const requestHandler = ( commit, requestMessage )=>{
      let input = {
        requestUrl: this.baseFsUrl,
        requestPath: '/' + path.join(ncloudParams.containerName, ncloudParams.key ),
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
    const { ncloudParams } = args;
    const { partListSize = 100 } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join(ncloudParams.containerName, ncloudParams.key ),
      requestMethod: 'get',
    } as InterfaceFetchClientInput;

    fetchClient({ 'largefile-part-list': null , 'part-list-size': partListSize, 'part-gt' : 0}, input, this.oauthKey )
      .then(res=> {
        callback(null, res.data);
      })
      .catch(err=>{
        logger.debug( err.response.data );
        errorHandling( fileStorageErrorHandler(err), callback)}
      );
  }

  findAcl( args, callback: InterfaceCallback ): void {
    const { ncloudParams } = args;

    let input = {
      requestUrl: this.baseFsUrl,
      requestPath: '/' + path.join( ncloudParams.containerName, ncloudParams.key ),
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
