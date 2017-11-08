import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import paramSet from './paramSet';

import { find, isArray, isUndefined, includes } from 'lodash';

export interface InterfacePortForwarding {
  findPortForwardingRules( callback: InterfaceCallback ): void;
  createPortForwardingRule( args: {
    portForwardingConfigurationNo?: number | string,
    serverInstanceNo: number | string,
    externalPort: number,
    internalPort: number
  } | {
    portForwardingConfigurationNo?: number | string,
    serverInstanceNo: number | string,
    externalPort: number,
    internalPort: number
  }[], callback: InterfaceCallback ): void;
  destroyPortForwardingRule( args: {
    portForwardingConfigurationNo?: number | string,
    serverInstanceNo: number | string,
    externalPort: number
    internalPort: number
  }, callback: InterfaceCallback ): void;
}

export function findPortForwardingRules( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getPortForwardingRuleList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      const {
        portForwardingConfigurationNo,
        portForwardingPublicIp,
        totalRows,
        portForwardingRuleList
      } = {
        ...response.data.getPortForwardingRuleListResponse,
        portForwardingRuleList: responseFilter( response.data.getPortForwardingRuleListResponse.portForwardingRuleList[0], 'portForwardingRule')
          .map( portForwardingRule=>{
            if ( portForwardingRule.serverInstance ) {
              portForwardingRule.serverInstance = alias( portForwardingRule.serverInstance, paramSet['findPortForwardingRules'].response_alias)
            }
            return portForwardingRule;
          })
      } as any;

      callback( null, {
        portForwardingConfigurationNo,
        portForwardingPublicIp,
        totalRows,
        portForwardingRuleList
      });
    })
    .catch( err=>errorHandling(err, callback));
}

export function createPortForwardingRule( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'addPortForwardingRules',
  };

  if ( isArray( args ) ) {
    if ( args.every(el=>isUndefined(el.portForwardingConfigurationNo))) {
      findPortForwardingRules.bind(this)((err, response)=>{
        if ( err ) {
          return callback(err, null);
        }

        const { portForwardingConfigurationNo } = response;
        const externalPorts = args.map(el=>el.externalPort);

        args = args.reduce((prev, curr, idx) => {
          return {
            ...prev,
            [`portForwardingRuleList.${ idx + 1 }.serverInstanceNo`]: curr.serverInstanceNo,
            [`portForwardingRuleList.${ idx + 1 }.portForwardingExternalPort`]: curr.externalPort,
            [`portForwardingRuleList.${ idx + 1 }.portForwardingInternalPort`]: curr.internalPort
          };
        }, { portForwardingConfigurationNo });

        fetchClient( args, requestInfo, this.oauthKey )
          .then( (response) => {
            const portForwardingRules = responseFilter( response.data.addPortForwardingRulesResponse.portForwardingRuleList[0], 'portForwardingRule');
            let resultRules = portForwardingRules.filter(el=>includes(externalPorts, el.portForwardingExternalPort));

            resultRules = resultRules.map( rule=>{
              rule.serverInstance = alias( rule.serverInstance, paramSet['createPortForwardingRule'].response_alias);
              return rule;
            });

            callback( null, resultRules );
          })
          .catch( err=>errorHandling(err, callback));
      }) // end findPortForwardingRules
    } else {
      throw new Error(`Error: This method doesn't allow \'portForwardingConfigurationNo\' in array.`);
    }
  } else {
    const { externalPort } = args;

    const requestHandler = (args)=>{
      args = alias( args, paramSet['createPortForwardingRule'].request_alias );

      fetchClient( args, requestInfo, this.oauthKey )
        .then( (response) => {

          const portForwardingRules = responseFilter( response.data.addPortForwardingRulesResponse.portForwardingRuleList[0], 'portForwardingRule');
          const resultRule = find( portForwardingRules, { portForwardingExternalPort: externalPort });
          resultRule.serverInstance = alias( resultRule.serverInstance, paramSet['createPortForwardingRule'].response_alias);

          callback( null, resultRule );
        })
        .catch( err=>errorHandling(err, callback));
    };

    if ( args.portForwardingConfigurationNo ) {
      requestHandler(args);
    } else {
      findPortForwardingRules.bind(this)((err, res)=>{
        if ( err ) {
          return callback(err, null);
        }

        args.portForwardingConfigurationNo = res.portForwardingConfigurationNo;
        requestHandler(args);
      })
    }
  }

}

export function destroyPortForwardingRule( args, callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'deletePortForwardingRules',
  };

  const { externalPort } = args;

  const requestHandler = ()=>{
    args = alias( args, paramSet['destroyPortForwardingRule'].request_alias );

    fetchClient.bind(this)( args, requestInfo, this.oauthKey )
      .then( ( response ) => {

        const {
          portForwardingConfigurationNo,
          portForwardingPublicIp,
          totalRows,
          portForwardingRuleList
        } = {
          ...response.data.deletePortForwardingRulesResponse,
          portForwardingRuleList: responseFilter( response.data.deletePortForwardingRulesResponse.portForwardingRuleList[0], 'portForwardingRule')
            .map( portForwardingRule=>{
              if ( portForwardingRule.serverInstance ) {
                portForwardingRule.serverInstance = alias(portForwardingRule.serverInstance, paramSet['destroyPortForwardingRule'].response_alias)
              }
              return portForwardingRule;
            })
        } as any;

        const rules = { portForwardingConfigurationNo,portForwardingPublicIp,totalRows,portForwardingRuleList };

        callback( null, setRulesReflect.bind(this)(rules, externalPort) );
      })
      .catch( err=>errorHandling(err, callback));
  }; // end requestHandler

  if ( args.portForwardingConfigurationNo ) {
    requestHandler();
  } else {
    findPortForwardingRules.bind(this)((err, res)=>{
      if ( err ) {
        return callback(err, null);
      }

      args.portForwardingConfigurationNo = res.portForwardingConfigurationNo;
      requestHandler();
    })
  }
}

export function setWait( args: any, callback?: InterfaceCallback ) {
  if ( arguments.length === 1 ) {
    callback = args;
  }

  (function(self) {
    let destroyPortForwardingTimer = null;

    destroyPortForwardingTimer = setInterval(()=>{
      findPortForwardingRules.bind(self)( (err, ruleList)=>{
        if ( err ) {
          clearInterval( destroyPortForwardingTimer );
          destroyPortForwardingTimer = null;
          return callback(err, null);
        }

        if ( ! find(ruleList.portForwardingRuleList, { portForwardingExternalPort: self.externalPort }) ) {
          clearInterval( destroyPortForwardingTimer );
          destroyPortForwardingTimer = null;
          callback( null, ruleList );
        }
      }) // end findServer

    }, 5000);

  })(this)
}

function setRulesReflect( rules, externalPort ) {

  Reflect.defineProperty( rules, "setWait", {
    get: ()=>{
      return setWait.bind({...this, defaultRequestInfo: this.defaultRequestInfo, externalPort});
    },
    configurable: false,
    enumerable: false
  });

  return rules;
}
