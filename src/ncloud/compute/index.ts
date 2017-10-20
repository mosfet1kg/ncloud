import {
  InterfaceOauthKey,
  InterfaceCallback,
  mergeParams,
  Validator
} from '../';
import * as product from './product';
import * as zone    from './zone';
import * as loginKey from './loginKey';
import * as serverInstance from './serverInstance';
import * as accessControlGroup from './accessControlGroup';
import * as memberServerImage from './memberServerImage';
import { isNull } from 'lodash';
const { ValidParametersOnlyClass, MustIncludeRequiredParametersClass, ValidConstraintsOnlyClass } = Validator;
let params = null;

function getParams( dir ) {
  if ( isNull(params) ) { params =  mergeParams( dir ); }
  return params;
}

export interface InterfaceCompute
  extends
    product.InterfaceProduct,
    zone.InterfaceZone,
    loginKey.InterfaceLoginKey,
    serverInstance.InterfaceServerInstance,
    accessControlGroup.InterfaceSecurityGroup,
    memberServerImage.InterfaceMemberServerImage
{ }

@MustIncludeRequiredParametersClass(getParams(__dirname))
@ValidParametersOnlyClass(getParams(__dirname))
@ValidConstraintsOnlyClass(getParams(__dirname))
export class Compute implements InterfaceCompute {
  private oauthKey: InterfaceOauthKey;
  private requestPath: string;

  constructor (  oauthKey: InterfaceOauthKey ) {
    this.oauthKey = oauthKey;
    this.requestPath = '/server/';
  };

  /** product **/
  findPublicImages ( callback: InterfaceCallback ) {
    product.findPublicImages.bind(this).apply( this, arguments );
  }
  findFlavors( args, callback: InterfaceCallback ) {
    product.findFlavors.bind(this).apply( this, arguments);
  }
  /** zone **/
  findZones( callback: InterfaceCallback ){
    zone.findZones.bind(this).apply( this, arguments ); }

  /** loginKey **/
  findLoginKeys( callback: InterfaceCallback ){
    loginKey.findLoginKeys.bind(this).apply( this, arguments );
  }
  createLoginKey( args, callback: InterfaceCallback ){
    loginKey.createLoginKey.bind(this).apply( this, arguments );
  }

  /** serverInstance **/
  findServer( args, callback: InterfaceCallback ) {
    serverInstance.findServer.bind(this).apply( this, arguments );
  }
  findServers( callback:InterfaceCallback ){
    serverInstance.findServers.bind(this).apply( this, arguments );
  }
  createServer( args, callback: InterfaceCallback ) {
    serverInstance.createServer.bind(this).apply( this, arguments );
  }
  destroyServer( args, callback: InterfaceCallback ) {
    serverInstance.destroyServer.bind(this).apply( this, arguments );
  }
  rebuildServer( args, callback: InterfaceCallback ) {
    serverInstance.rebuildServer.bind(this).apply( this, arguments );
  }
  rebootServer( args, callback: InterfaceCallback ) {
    serverInstance.rebootServer.bind(this).apply( this, arguments );
  }
  startServer( args, callback: InterfaceCallback ) {
    serverInstance.startServer.bind(this).apply( this, arguments );
  }
  stopServer( args, callback: InterfaceCallback ) {
    serverInstance.stopServer.bind(this).apply( this, arguments );
  }
  findRootPassword( args, callback: InterfaceCallback ) {
    serverInstance.findRootPassword.bind(this).apply( this, arguments );
  }

  /** accessControlGroup **/
  findAccessControlGroup( callback: InterfaceCallback ){
    accessControlGroup.findAccessControlGroup.bind(this).apply( this, arguments );
  }

  /** memberServerImage **/
  findPrivateImages( callback: InterfaceCallback ) {
    memberServerImage.findPrivateImages.bind(this).apply( this, arguments );
  }
  createPrivateImage( args, callback: InterfaceCallback ) {
    memberServerImage.createPrivateImage.bind(this).apply(this, arguments);
  }
  destroyPrivateImage( args, callback: InterfaceCallback ) {
    memberServerImage.destroyPrivateImage.bind(this).apply(this,arguments);
  }
}
