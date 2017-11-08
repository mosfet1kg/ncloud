import {
  InterfaceOauthKey,
  InterfaceMonitoring,
  Monitoring
} from '../';

export interface InterfaceManagement {
  monitoring: InterfaceMonitoring;
}

export class Management implements InterfaceManagement {
  public monitoring: InterfaceMonitoring;

  constructor ( oauthKey: InterfaceOauthKey  ) {
    this.monitoring = new Monitoring( oauthKey );
  }
}

export * from './monitoring';
