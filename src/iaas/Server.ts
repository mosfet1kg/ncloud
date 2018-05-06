import {
  InterfaceAuthParams,
  InterfaceNcloudIaaSServer,
} from '../const/interface';
import {
  InterfaceIaaSServerGetServerImageProductListInput,
  InterfaceIaaSServerGetServerProductListInput,
  InterfaceCreateNasVolumeInstanceInput,
  InterfaceDeleteNasVolumeInstanceInput,
  InterfaceGetNasVolumeInstanceListInput, InterfaceChangeNasVolumeSize,
} from '../const/interfaceInputs';
import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetServerProductListResponse,
  InterfaceGetZoneListResponse,
  InterfaceGetRegionListResponse,
  InterfaceNasVolumeInstanceListResponse,
} from '../const/interfaceResponses';
import generateMethods from '../helpers/generateMethods';
import apiDescription from '../helpers/apiDescription';
import {
  get
} from 'lodash';

export default class Server implements InterfaceNcloudIaaSServer {
  private authParams: InterfaceAuthParams;

  constructor(
    {
      authParams: authParamsInput,
    }: any) {

    this.authParams = authParamsInput;
  }

  getServerImageProductList: (input?: InterfaceIaaSServerGetServerImageProductListInput) => Promise<InterfaceGetServerImageProductListResponse>;
  getServerProductList: (input: InterfaceIaaSServerGetServerProductListInput) => Promise<InterfaceGetServerProductListResponse>;
  getZoneList: () => Promise<InterfaceGetZoneListResponse>;
  getRegionList: () => Promise<InterfaceGetRegionListResponse>;
  createNasVolumeInstance: (input: InterfaceCreateNasVolumeInstanceInput) => Promise<InterfaceNasVolumeInstanceListResponse>;
  deleteNasVolumeInstance: (input: InterfaceDeleteNasVolumeInstanceInput) => Promise<InterfaceNasVolumeInstanceListResponse>;
  getNasVolumeInstanceList: (input?: InterfaceGetNasVolumeInstanceListInput) => Promise<InterfaceNasVolumeInstanceListResponse>;
  changeNasVolumeSize: (input: InterfaceChangeNasVolumeSize) => Promise<InterfaceNasVolumeInstanceListResponse>;
}

Object
  .keys( get(apiDescription, 'apis.IaaS.Server') )
  .forEach( action => {
    (Server as any).prototype[action] = function(input={}) {
      return generateMethods({
        actionPath: `apis.IaaS.Server.${action}`,
        input,
        authParams: this.authParams,
      });
    };
  });
