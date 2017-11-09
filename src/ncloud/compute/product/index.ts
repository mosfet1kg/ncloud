import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  setFilterReflect,
  InterfaceFilterReflectReturn,
  errorHandling,
  responseFilter
} from '../../';

import { filter, isNull, isNumber } from 'lodash';
import * as bytes from 'bytes';
import paramSet from './paramSet';

export interface InterfaceProduct {
  findPublicImages( callback: InterfaceCallback ): void;
  findFlavors( args: { vmImageId: string; }, callback: InterfaceCallback ): void;
}

export function findPublicImages( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getServerImageProductList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let vmImageList = responseFilter(response.data.getServerImageProductListResponse.productList[0], 'product');
      vmImageList = setFilterReflect( alias( vmImageList, paramSet[ 'findPublicImages' ].response_alias ) );

      callback( null, vmImageList as any | InterfaceFilterReflectReturn );
    })
    .catch( err=>errorHandling(err, callback));

}

export function findFlavors( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getServerProductList',
  };

  args = alias( args, paramSet[ 'findFlavors' ].request_alias );

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let vmFlavorList = responseFilter(response.data.getServerProductListResponse.productList[0], 'product')
        .map( serverProduct=>{

          if ( serverProduct.productName ) {
            serverProduct.productName = serverProduct.productName
              .replace("개","EA")
              .replace("메모리","Memory")
              .replace("디스크","Disk")
              .replace("기본", "default ")
              .replace("추가","additional ")
          }

          if ( serverProduct.productDescription ) {
            serverProduct.productDescription = serverProduct.productDescription
              .replace("개","EA")
              .replace("메모리","Memory")
              .replace("디스크","Disk")
              .replace("기본", "default ")
              .replace("추가","additional ")
          }

          return serverProduct;
        }); // end map

      vmFlavorList = setFlavorListReflect( alias( vmFlavorList, paramSet[ 'findFlavors' ].response_alias ) );

      callback( null, vmFlavorList );
    })
    .catch( err=>errorHandling(err, callback));
}

function setFlavorListReflect( flavorList ) {

  Reflect.defineProperty( flavorList, 'filter', {
    get: ()=>{
      return function (args: { vCpu?: number, memory?: number | string, storage?: number | string, storageType?: string }) {
        if ( ! args ) {
          return flavorList;
        }

        let { vCpu, memory, storage, storageType } = args;

        if ( vCpu && !isNumber( vCpu ) ) {
          throw new Error('Invalid Argument: \'vCpu\' must be numeric.')
        }

        if ( memory ) {
          memory = bytes.parse( memory );
          if ( isNull( memory ) ) {
            throw new Error('Invalid Argument: \'memory\'.');
          }
        }

        if ( storage ) {
          storage = bytes.parse( storage );
          if ( isNull ( storage ) ) {
            throw new Error('Invalid Argument: \'storage\'.');
          }
        }

        if ( storageType && ( storageType.toLowerCase() !== 'ssd' && storageType.toLowerCase() !== 'hdd' ) ) {
          throw new Error('Invalid Arguments: \'storageType\' must be either \'hdd\' or \'ssd\'.');
        }

        return filter( flavorList, ( flavor )=>{
          let result = true;

          if ( vCpu ) {
            result = result && ( vCpu === flavor.cpuCount );
          }

          if ( memory ) {
            result = result && ( memory === flavor.memorySize );
          }

          if ( storage ) {
            result = result && ( storage === (flavor.baseBlockStorageSize + flavor.addBlockStroageSize) );
          }

          if ( storageType ) {
            storageType = storageType.toLowerCase();

            result = result && (( storageType === 'ssd' ) ? ( flavor.vmFlavorName.toLowerCase().indexOf( 'ssd' ) >= 0 ) : (flavor.vmFlavorName.toLowerCase().indexOf( 'ssd' )< 0 ));
          }

          return result;
        })
      }
    },
    configurable: false,
    enumerable: false
  });

  return flavorList;
}


