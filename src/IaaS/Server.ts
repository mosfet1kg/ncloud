import generateMethods from '../helpers/generateMethods';
import apiDescription from '../helpers/apiDescription';
import {
  get
} from 'lodash';
import * as moment from 'moment-timezone';

const Server: () => InterfaceNcloudIaaSServer = function () {
  const defaultMethods = Object
    .keys( get(apiDescription, 'apis.IaaS.Server') )
    .reduce((prev, action) => {
      prev = { ...prev, [ action ]: (input={}) => {
          return generateMethods({
            actionPath: `apis.IaaS.Server.${action}`,
            input,
            store: this.store,
          });
        }};
      return prev;
    }, {});

  return {
    ...defaultMethods,
    getNasVolumeInstanceRatingList(input: InterfaceGetNasVolumeInstanceRatingListInput): Promise<InterfaceGetNasVolumeInstanceRatingListResponse>{
      return (this as any).getNasVolumeInstanceRatingListProto(input)
        .then( responseData => {
          responseData = {
            ...responseData,
            NasVolumeInstanceRatingList: responseData.NasVolumeInstanceRatingList.map((el) => {
              console.log( el.ratingTime );
              return {
                ...el,
                ratingTime: moment.tz(el.ratingTime, 'Asia/Seoul').format('YYYY-MM-DDTHH:mm:ssZZ'),
              }
            })
          };

          return responseData;
        });
    },
    createServerInstances(input: InterfaceCreateServerInstancesInput): Promise<InterfaceCreateServerInstancesResponse> {
      if ( get(input, 'userData', false) ) {
        input = {
          ...input,
          userData: Buffer.from(input.userData).toString('base64')
        }
      } // end if

      return (this as any).createServerInstancesProto(input);
    }
  } as InterfaceNcloudIaaSServer;
};

export default Server;
