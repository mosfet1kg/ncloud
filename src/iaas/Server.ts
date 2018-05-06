import {
  InterfaceAuthParams,
  InterfaceNcloudIaaSServer,
} from '../const/interface';
import {
  InterfaceGetNasVolumeInstanceRatingListInput,
} from '../const/interfaceInputs';
import {
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

  getServerImageProductList: InterfaceNcloudIaaSServer['getServerImageProductList'];
  getServerProductList: InterfaceNcloudIaaSServer['getServerProductList'];
  getZoneList: InterfaceNcloudIaaSServer['getZoneList'];
  getRegionList: InterfaceNcloudIaaSServer['getRegionList'];
  createNasVolumeInstance: InterfaceNcloudIaaSServer['createNasVolumeInstance'];
  deleteNasVolumeInstance: InterfaceNcloudIaaSServer['deleteNasVolumeInstance'];
  getNasVolumeInstanceList:  InterfaceNcloudIaaSServer['getNasVolumeInstanceList'];
  changeNasVolumeSize: InterfaceNcloudIaaSServer['changeNasVolumeSize'];
  getNasVolumeInstanceRatingList(input: InterfaceGetNasVolumeInstanceRatingListInput): Promise<InterfaceGetNasVolumeInstanceRatingListResponse>{
    return (this as any).getNasVolumeInstanceRatingListProto(input)
      .then( responseData => {
        responseData = {
          ...responseData,
          NasVolumeInstanceRatingList: responseData.NasVolumeInstanceRatingList.map((el) => {
            console.log( el.ratingTime );
            return {
              ...el,
              ratingTime: moment.tz( el.ratingTime , 'Asia/Seoul').format('YYYY-MM-DDTHH:mm:ssZZ'),
            }
          })
        };

        return responseData;
      });
  }
  setNasVolumeAccessControl: InterfaceNcloudIaaSServer['setNasVolumeAccessControl'];
  addNasVolumeAccessControl: InterfaceNcloudIaaSServer['addNasVolumeAccessControl'];
  removeNasVolumeAccessControl: InterfaceNcloudIaaSServer['removeNasVolumeAccessControl'];
  getLoginKeyList: InterfaceNcloudIaaSServer['getLoginKeyList'];
  createLoginKey: InterfaceNcloudIaaSServer['createLoginKey'];
  deleteLoginKey: InterfaceNcloudIaaSServer['deleteLoginKey'];
  getAccessControlGroupList: InterfaceNcloudIaaSServer['getAccessControlGroupList'];
  getAccessControlGroupServerInstanceList: InterfaceNcloudIaaSServer['getAccessControlGroupServerInstanceList'];
  getAccessControlRuleList: InterfaceNcloudIaaSServer['getAccessControlRuleList'];
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
