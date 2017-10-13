import {
  InterfaceOauthKey,
  InterfaceCallback,
  mergeParams,
  Oauth,
  Validator
} from '../';
import * as product from './product';
import * as zone    from './zone';
import * as loginKey from './loginKey';
import * as serverInstance from './serverInstance';
import * as accessControlGroup from './accessControlGroup';
import * as memberServerImage from './memberServerImage';
import { isNull } from 'lodash';
const { ValidParametersOnly, MustIncludeRequiredParameters, ValidConstraintsOnly } = Validator;
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

export class Compute implements InterfaceCompute {
  private oauth: Oauth;
  private requestUrl: string;

  constructor (  oauthKey: InterfaceOauthKey ) {
    this.oauth = new Oauth( oauthKey );
    this.requestUrl = 'https://api.ncloud.com/server/';
  };

  /** product **/
  findPublicImages ( callback: InterfaceCallback ) { product.findPublicImages.bind(this).apply( this, arguments ); }

  @MustIncludeRequiredParameters(getParams(__dirname))
  @ValidParametersOnly(getParams(__dirname))
  findFlavors( args, callback: InterfaceCallback ) {
    product.findFlavors.bind(this).apply( this, arguments); }

  /** zone **/
  findZones( callback: InterfaceCallback ){
    zone.findZones.bind(this).apply( this, arguments ); }

  /** loginKey **/
  findLoginKeys( callback: InterfaceCallback ){
    loginKey.findLoginKeys.bind(this).apply( this, arguments );
  }

  @MustIncludeRequiredParameters(getParams(__dirname))
  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  createLoginKey( arg, callback: InterfaceCallback ){
    loginKey.createLoginKey.bind(this).apply( this, arguments );
  }

  /** serverInstance **/
  findServers( callback:InterfaceCallback ){
    serverInstance.findServers.bind(this).apply( this, arguments );
  }

  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  createServer( args, callback: InterfaceCallback ) {
    serverInstance.createServer.bind(this).apply( this, arguments );
  }

  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  destroyServer( args, callback: InterfaceCallback ) {
    serverInstance.destroyServer.bind(this).apply( this, arguments );
  }

  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  rebuildServer( args, callback: InterfaceCallback ) {
    serverInstance.rebuildServer.bind(this).apply( this, arguments );
  }

  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  rebootServer( args, callback: InterfaceCallback ) {
    serverInstance.rebootServer.bind(this).apply( this, arguments );
  }

  /** accessControlGroup **/
  findAccessControlGroup( callback: InterfaceCallback ){
    accessControlGroup.findAccessControlGroup.bind(this).apply( this, arguments );
  }

  /** memberServerImage **/
  findPrivateImages( callback: InterfaceCallback ) { memberServerImage.findPrivateImages.bind(this).apply( this, arguments ); }

  @MustIncludeRequiredParameters(getParams(__dirname))
  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  createPrivateImage( args, callback: InterfaceCallback ) { memberServerImage.createPrivateImage.bind(this).apply(this, arguments); }

  @MustIncludeRequiredParameters(getParams(__dirname))
  @ValidParametersOnly(getParams(__dirname))
  @ValidConstraintsOnly(getParams(__dirname))
  destroyPrivateImage( args, callback: InterfaceCallback ) { memberServerImage.destroyPrivateImage.bind(this).apply(this,arguments); }
}
