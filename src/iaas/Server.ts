import {
  InterfaceAuthParams,
  InterfaceNcloudIaaSServer,
} from '../const/interface';
import {
  InterfaceIaaSServerGetServerImageProductListInput,
  InterfaceIaaSServerGetServerProductListInput,
  InterfaceCreateNasVolumeInstanceInput,
  InterfaceDeleteNasVolumeInstanceInput,
  InterfaceGetNasVolumeInstanceListInput,
  InterfaceChangeNasVolumeSizeInput,
  InterfaceGetNasVolumeInstanceRatingListInput, InterfaceSetNasVolumeAccessControlInput,
} from '../const/interfaceInputs';
import {
  InterfaceGetServerImageProductListResponse,
  InterfaceGetServerProductListResponse,
  InterfaceGetZoneListResponse,
  InterfaceGetRegionListResponse,
  InterfaceNasVolumeInstanceListResponse,
  InterfaceGetNasVolumeInstanceRatingListResponse,
} from '../const/interfaceResponses';
import generateMethods from '../helpers/generateMethods';
import apiDescription from '../helpers/apiDescription';
import {
  get
} from 'lodash';
import * as moment from 'moment-timezone';

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
  changeNasVolumeSize: (input: InterfaceChangeNasVolumeSizeInput) => Promise<InterfaceNasVolumeInstanceListResponse>;
  getNasVolumeInstanceRatingList(input: InterfaceGetNasVolumeInstanceRatingListInput): Promise<InterfaceGetNasVolumeInstanceRatingListResponse>{
    return (this as any).getNasVolumeInstanceRatingListProto(input)
      .then( responseData => {
        responseData = {
          ...responseData,
          NasVolumeInstanceRatingList: responseData.NasVolumeInstanceRatingList.map((el) => {
            console.log( el.ratingTime );
            return {
              ...el,
              ratingTime: moment( el.ratingTime ).tz('Asia/Seoul').format('YYYY-MM-DDTHH:mm:ssZZ'),
            }
          })
        };

        return responseData;
      });
  }
  setNasVolumeAccessControl: (input: InterfaceSetNasVolumeAccessControlInput) => Promise<InterfaceNasVolumeInstanceListResponse>;
}

Object
  .keys( get(apiDescription, 'apis.IaaS.Server') )
  .filter((action) => {
    return get(apiDescription, `apis.IaaS.Server.${action}.autoCreate`, true);
  })
  .forEach( action => {
    (Server as any).prototype[action] = function(input={}) {
      return generateMethods({
        actionPath: `apis.IaaS.Server.${action}`,
        input,
        authParams: this.authParams,
      });
    };
  });