import {
  InterfaceOauthKey,
  InterfaceCallback,
  Oauth,
  Validator
} from '../';
import * as computeService from './service';
import * as product from './product';
import * as zone    from './zone';
import * as loginKey from './loginKey';
import * as serverInstance from './serverInstance';
import * as accessControlGroup from './accessControlGroup';
import * as memberServerImage from './memberServerImage';

const { ValidParametersOnly, MustIncludeRequiredParameters, ValidLengthOnly } = Validator;

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

  @MustIncludeRequiredParameters(getParams('findFlavors'))
  @ValidParametersOnly(getParams('findFlavors'))
  findFlavors( args, callback: InterfaceCallback ) {
    product.findFlavors.bind(this).apply( this, arguments); }

  /** zone **/
  findZones( callback: InterfaceCallback ){
    zone.findZones.bind(this).apply( this, arguments ); }

  /** loginKey **/
  findLoginKeys( callback: InterfaceCallback ){
    loginKey.findLoginKeys.bind(this).apply( this, arguments );
  }

  @MustIncludeRequiredParameters(getParams('createLoginKey'))
  @ValidParametersOnly(getParams('createLoginKey'))
  @ValidLengthOnly(getParams('createLoginKey'))
  createLoginKey( arg, callback: InterfaceCallback ){
    loginKey.createLoginKey.bind(this).apply( this, arguments );
  }

  /** serverInstance **/
  findServers( callback:InterfaceCallback ){
    serverInstance.findServers.bind(this).apply( this, arguments );
  }

  /** accessControlGroup **/
  findAccessControlGroup( callback: InterfaceCallback ){
    accessControlGroup.findAccessControlGroup.bind(this).apply( this, arguments );
  }

  /** memberServerImage **/
  findPrivateImages( callback: InterfaceCallback ) { memberServerImage.findPrivateImages.bind(this).apply( this, arguments ); }

  @MustIncludeRequiredParameters(getParams('createPrivateImage'))
  @ValidParametersOnly(getParams('createPrivateImage'))
  @ValidLengthOnly(getParams('createPrivateImage'))
  createPrivateImage( args, callback: InterfaceCallback ) { memberServerImage.createPrivateImage.bind(this).apply(this, arguments); }
}

function getParams( fnKey ) {
  return computeService.mergeParams( __dirname )[ fnKey ];
}
