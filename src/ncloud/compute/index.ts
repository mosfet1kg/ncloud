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
import * as publicInstance from './publicIpInstance';
import * as portForwarding from './portForwarding';
import * as region from './region';

import { isNull } from 'lodash';
const { ValidParametersOnlyClass, MustIncludeRequiredParametersClass, ValidConstraintsOnlyClass } = Validator;
let params = null;

function getParams( dir ) {
  if ( isNull(params) ) { params =  mergeParams( dir ); }
  return params;
}

export interface InterfaceCompute
  extends
    accessControlGroup.InterfaceSecurityGroup,
    loginKey.InterfaceLoginKey,
    memberServerImage.InterfaceMemberServerImage,
    product.InterfaceProduct,
    portForwarding.InterfacePortForwarding,
    publicInstance.InterfacePublicIpInstance,
    serverInstance.InterfaceServerInstance,
    region.InterfaceRegion,
    zone.InterfaceZone
{ }

@MustIncludeRequiredParametersClass(getParams(__dirname))
@ValidParametersOnlyClass(getParams(__dirname))
@ValidConstraintsOnlyClass(getParams(__dirname))
export class Compute implements InterfaceCompute {
  private oauthKey: InterfaceOauthKey;
  private requestPath: string;

  public regionNo: number | string;

  constructor ( oauthKey: InterfaceOauthKey ) {
    this.oauthKey = oauthKey;
    this.requestPath = '/server/';
  };

  get defaultRequestInfo () {
    return {
      requestMethod: 'GET',
      requestPath: this.requestPath,
      regionNo: this.regionNo
    }
  }

  /** product **/
  findPublicImages ( callback: InterfaceCallback ) {
    product.findPublicImages.apply( this, arguments );
  }
  findFlavors( args, callback: InterfaceCallback ) {
    product.findFlavors.apply( this, arguments);
  }
  /** zone **/
  findZones( callback: InterfaceCallback ){
    zone.findZones.apply( this, arguments ); }

  /** loginKey **/
  findLoginKeys( callback: InterfaceCallback ){
    loginKey.findLoginKeys.apply( this, arguments );
  }
  createLoginKey( args, callback: InterfaceCallback ){
    loginKey.createLoginKey.apply( this, arguments );
  }

  /** serverInstance **/
  findServer( args, callback: InterfaceCallback ) {
    serverInstance.findServer.apply( this, arguments );
  }
  findServers( callback:InterfaceCallback ){
    serverInstance.findServers.apply( this, arguments );
  }
  createServer( args, callback: InterfaceCallback ) {
    serverInstance.createServer.apply( this, arguments );
  }
  destroyServer( args, callback: InterfaceCallback ) {
    serverInstance.destroyServer.apply( this, arguments );
  }
  rebuildServer( args, callback: InterfaceCallback ) {
    serverInstance.rebuildServer.apply( this, arguments );
  }
  rebootServer( args, callback: InterfaceCallback ) {
    serverInstance.rebootServer.apply( this, arguments );
  }
  startServer( args, callback: InterfaceCallback ) {
    serverInstance.startServer.apply( this, arguments );
  }
  stopServer( args, callback: InterfaceCallback ) {
    serverInstance.stopServer.apply( this, arguments );
  }
  findRootPassword( args, callback: InterfaceCallback ) {
    serverInstance.findRootPassword.apply( this, arguments );
  }

  /** accessControlGroup **/
  findAccessControlGroup( callback: InterfaceCallback ){
    accessControlGroup.findAccessControlGroup.apply( this, arguments );
  }
  findAccessControlRules( args, callback: InterfaceCallback ) {
    accessControlGroup.findAccessControlRules.apply( this, arguments );
  }

  /** memberServerImage **/
  findPrivateImages( callback: InterfaceCallback ) {
    memberServerImage.findPrivateImages.apply( this, arguments );
  }
  createPrivateImage( args, callback: InterfaceCallback ) {
    memberServerImage.createPrivateImage.apply(this, arguments);
  }
  destroyPrivateImage( args, callback: InterfaceCallback ) {
    memberServerImage.destroyPrivateImage.apply(this,arguments);
  }

  /** publicInstance **/
  findPublicIpInstances( callback: InterfaceCallback ) {
    publicInstance.findPublicIpInstances.apply(this, arguments);
  }
  createPublicIpInstance(args, callback?: InterfaceCallback ) {
    publicInstance.createPublicIpInstance.apply(this, arguments);
  }
  attachPublicIpInstance(args, callback: InterfaceCallback ) {
    publicInstance.attachPublicIpInstance.apply(this, arguments);
  }
  detachPublicIpInstance(args, callback: InterfaceCallback ) {
    publicInstance.detachPublicIpInstance.apply(this, arguments);
  }
  destroyPublicIpInstance(args, callback: InterfaceCallback ) {
    publicInstance.destroyPublicIpInstance.apply(this, arguments);
  }

  /** portForwarding **/
  findPortForwardingRules( callback: InterfaceCallback ) {
    portForwarding.findPortForwardingRules.apply(this, arguments);
  }
  createPortForwardingRule( args, callback: InterfaceCallback ) {
    portForwarding.createPortForwardingRule.apply(this, arguments);
  }
  destroyPortForwardingRule( args, callback: InterfaceCallback ) {
    portForwarding.destroyPortForwardingRule.apply(this, arguments);
  }

  /** region **/
  findRegions( callback: InterfaceCallback ) {
    region.findRegions.apply(this, arguments);
  }
}
