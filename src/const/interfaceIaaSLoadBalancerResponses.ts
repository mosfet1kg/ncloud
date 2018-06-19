export interface LoadBalancerAlgorithmType {
  code: string;
  codeName: string;
}

export interface InternetLineType {
  code: string;
  codeName: string;
}

export interface LoadBalancerInstanceStatus {
  code: string;
  codeName: string;
}

export interface LoadBalancerInstanceOperation {
  code: string;
  codeName: string;
}

export interface NetworkUsageType {
  code: string;
  codeName: string;
}

export interface ProtocolType {
  code: string;
  codeName: string;
}

export interface LoadBalancerRuleList {
  protocolType: ProtocolType;
  loadBalancerPort: number;
  serverPort: number;
  l7HealthCheckPath: string;
  certificateName: string;
  proxyProtocolUseYn: string;
}

export interface PlatformType {
  code: string;
  codeName: string;
}

export interface ServerInstanceStatus {
  code: string;
  codeName: string;
}

export interface ServerInstanceOperation {
  code: string;
  codeName: string;
}

export interface Zone {
  zoneNo: string;
  zoneName: string;
  zoneCode: string;
  zoneDescription: string;
  regionNo: string;
}

export interface Region {
  regionNo: string;
  regionCode: string;
  regionName: string;
}

export interface BaseBlockStorageDiskType {
  code: string;
  codeName: string;
}

export interface BaseBlockStorageDiskDetailType {
  code: string;
  codeName: string;
}

export interface InternetLineType2 {
  code: string;
  codeName: string;
}

export interface ServerInstanceType {
  code: string;
  codeName: string;
}

export interface AccessControlGroupList {
  accessControlGroupConfigurationNo: string;
  accessControlGroupName: string;
  accessControlGroupDescription: string;
  isDefault: boolean;
  createDate: Date;
}

export interface ServerInstance {
  serverInstanceNo: string;
  serverName: string;
  serverDescription: string;
  cpuCount: number;
  memorySize: number;
  baseBlockStorageSize: number;
  platformType: PlatformType;
  loginKeyName: string;
  isFeeChargingMonitoring: boolean;
  publicIp: string;
  privateIp: string;
  serverImageName: string;
  serverInstanceStatus: ServerInstanceStatus;
  serverInstanceOperation: ServerInstanceOperation;
  serverInstanceStatusName: string;
  createDate: Date;
  uptime: Date;
  serverImageProductCode: string;
  serverProductCode: string;
  isProtectServerTermination: boolean;
  portForwardingPublicIp: string;
  portForwardingExternalPort: number;
  portForwardingInternalPort: number;
  zone: Zone;
  region: Region;
  baseBlockStorageDiskType: BaseBlockStorageDiskType;
  baseBlockStorageDiskDetailType: BaseBlockStorageDiskDetailType;
  internetLineType: InternetLineType2;
  serverInstanceType: ServerInstanceType;
  userData: string;
  accessControlGroupList: AccessControlGroupList[];
}

export interface ProtocolType2 {
  code: string;
  codeName: string;
}

export interface ServerHealthCheckStatusList {
  protocolType: ProtocolType2;
  loadBalancerPort: number;
  serverPort: number;
  l7HealthCheckPath: string;
  proxyProtocolUseYn: string;
  serverStatus: boolean;
}

export interface LoadBalancedServerInstanceList {
  serverInstance: ServerInstance;
  serverHealthCheckStatusList: ServerHealthCheckStatusList[];
}

export interface LoadBalancerInstanceList {
  loadBalancerInstanceNo: string;
  virtualIp: string;
  loadBalancerName: string;
  loadBalancerAlgorithmType: LoadBalancerAlgorithmType;
  loadBalancerDescription: string;
  createDate: Date;
  domainName: string;
  internetLineType: InternetLineType;
  loadBalancerInstanceStatusName: string;
  loadBalancerInstanceStatus: LoadBalancerInstanceStatus;
  loadBalancerInstanceOperation: LoadBalancerInstanceOperation;
  networkUsageType: NetworkUsageType;
  isHttpKeepAlive: boolean;
  connectionTimeout: number;
  certificateName: string;
  loadBalancerRuleList: LoadBalancerRuleList[];
  loadBalancedServerInstanceList: LoadBalancedServerInstanceList[];
}

/** **/
export interface InterfaceGetLoadBalancerInstanceListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loadBalancerInstanceList: LoadBalancerInstanceList[];
}
