import {
  InterfaceOauthKey,
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  setFilterReflect,
  InterfaceFilterReflectReturn,
  responseFilter,
  Validator,
  errorHandling
} from '../../';
import paramSet from './paramSet';

import { isArray } from 'lodash';
const { ValidParametersOnlyClass, MustIncludeRequiredParametersClass } = Validator;

export interface InterfaceMonitoring {
  findMetrics( args: { serverInstanceNo: string }, callback: InterfaceCallback ): void;
  findStatistics( args: { serverInstanceNo: string, metricName: string, startTime: string, endTime: string, period?: string }, callback: InterfaceCallback ): void;
}

@MustIncludeRequiredParametersClass(paramSet)
@ValidParametersOnlyClass(paramSet)
export class Monitoring implements InterfaceMonitoring {
  private oauthKey: InterfaceOauthKey;
  private requestPath: string;

  constructor(
    oauthKey: InterfaceOauthKey,
  ) {
    this.oauthKey = oauthKey;
    this.requestPath = '/monitoring/';
  }

  get defaultRequestInfo () {
    return {
      requestMethod: 'GET',
      requestPath: this.requestPath,
    }
  }

  findMetrics(args, callback: InterfaceCallback) : void {
    const requestInfo: InterfaceFetchClientInput = {
      ...this.defaultRequestInfo,
      requestAction: 'getListMetrics'
    };

    args = alias( args, paramSet['findMetrics'].request_alias );

    fetchClient( args, requestInfo, this.oauthKey )
      .then( (response) => {
        let metrics = responseFilter(response.data.getListMetricsResponse.metrics[0], 'member');
        metrics = setFilterReflect( alias( metrics, paramSet['findMetrics'].response_alias ) );

        callback( null, metrics as any | InterfaceFilterReflectReturn );

      })
      .catch( err=>errorHandling(err, callback));
  }

  findStatistics(args, callback: InterfaceCallback) : void {
    const requestInfo: InterfaceFetchClientInput = {
      ...this.defaultRequestInfo,
      requestAction: 'getMetricStatistics'
    };

    args = alias( args, paramSet['findStatistics'].request_alias );
    const { period = 1800 } = args;

    args = {
      ...args,
      period,
      startTime: args.startTime.replace(/\.\d+/, ''),
      endTime: args.endTime.replace(/\.\d+/, '')
    };

    fetchClient( args, requestInfo, this.oauthKey )
      .then( (response) => {
        let metrics = alias( responseFilter(response.data.getMetricStatisticsResponse.statistics[0], 'statistic')[0], paramSet['findStatistics'].response_alias );

        if ( ! isArray( metrics.dataPoints.member ) ) {
          metrics.dataPoints.member = [  metrics.dataPoints.member ];
        }

        metrics.dataPoints.member = metrics.dataPoints.member.map( el=>{
          const { timestamp, ...rest } = el;

          return {
            timestamp: timestamp.replace('Z', '.000Z'),
            ...rest
          }
        });

        callback( null, metrics );
      })
      .catch( err=>errorHandling(err, callback));
  }

}
