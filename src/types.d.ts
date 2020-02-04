interface InterfaceAuthParams {
  accessKey: string;
  secretKey: string;
  apiKey?: string;
}

interface InterfaceMyStore {
  setData: (input: any) => void;
  getAuthParams: () => InterfaceAuthParams;
  getValues: () => ({ [key: string]: any });
}

interface InterfaceNcloud {
  IaaS: InterfaceNcloudIaaS;
  PaaS: InterfaceNcloudPaaS;
}

interface InterfaceNcloudIaaS {
  server: () => InterfaceNcloudIaaSServer;
  loadBalancer: () => InterfaceNcloudIaaSLoadBalancer;
}

interface InterfaceNcloudPaaS {
  geoLocation(): InterfaceNcloudPaaSGeoLocation;
  containerRegistry(): any;
}

interface InterfaceNcloudIaaSServer extends InterfaceNcloudIaaSServerCustomMethods {
  getServerImageProductList(input?: InterfaceIaaSServerGetServerImageProductListInput)
    : Promise<InterfaceGetServerImageProductListResponse>;
  getServerProductList(input: InterfaceIaaSServerGetServerProductListInput)
    : Promise<InterfaceGetServerProductListResponse>;
  getZoneList(input?: InterfaceGetZoneListInput)
    : Promise<InterfaceGetZoneListResponse>;
  getRegionList()
    : Promise<InterfaceGetRegionListResponse>;
  getRaidList()
    : Promise<InterfaceGetRaidListResponse>;
  createNasVolumeInstance(input: InterfaceCreateNasVolumeInstanceInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  deleteNasVolumeInstance(input: InterfaceDeleteNasVolumeInstanceInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  getNasVolumeInstanceList(input?: InterfaceGetNasVolumeInstanceListInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  changeNasVolumeSize(input: InterfaceChangeNasVolumeSizeInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  getNasVolumeInstanceRatingList(input: InterfaceGetNasVolumeInstanceRatingListInput)
    : Promise<InterfaceGetNasVolumeInstanceRatingListResponse>;
  setNasVolumeAccessControl(input: InterfaceNasVolumeAccessControlInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  addNasVolumeAccessControl(input: InterfaceNasVolumeAccessControlInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  removeNasVolumeAccessControl(input: InterfaceNasVolumeAccessControlInput)
    : Promise<InterfaceNasVolumeInstanceListResponse>;
  getLoginKeyList(input?: InterfaceGetLoginKeyListInput)
    : Promise<InterfaceGetLoginKeyListResponse>;
  createLoginKey(input: InterfaceCreateLoginKeyInput)
    : Promise<InterfaceCreateLoginKeyResponse>;
  deleteLoginKey(input: InterfaceDeleteLoginKeyInput)
    : Promise<InterfaceDeleteLoginKeyResponse>;
  importLoginKey(input: InterfaceImportLoginKeyInput)
    : Promise<InterfaceImportLoginKeyResponse>;
  getAccessControlGroupList(input?: InterfaceGetAccessControlGroupListInput)
    : Promise<InterfaceGetAccessControlGroupListResponse>;
  getAccessControlGroupServerInstanceList(input: InterfaceGetAccessControlGroupServerInstanceListInput)
    : Promise<InterfaceGetAccessControlGroupServerInstanceListResponse>;
  getAccessControlRuleList(input: InterfaceGetAccessControlRuleListInput)
    : Promise<InterfaceGetAccessControlRuleListResponse>;
  getServerInstanceList(input?: InterfaceGetServerInstanceListInput)
    : Promise<InterfaceGetServerInstanceListResponse>;
  createServerInstances(input: InterfaceCreateServerInstancesInput)
    : Promise<InterfaceCreateServerInstancesResponse>;
  terminateServerInstances(input: InterfaceTerminateServerInstancesInput)
    : Promise<InterfaceTerminateServerInstancesResponse>;
  changeServerInstanceSpec(input: InterfaceChangeServerInstanceSpecInput)
    : Promise<InterfaceChangeServerInstanceSpecResponse>;
  rebootServerInstances(input: InterfaceRebootServerInstancesInput)
    : Promise<InterfaceRebootServerInstancesResponse>;
  startServerInstances(input: InterfaceStartServerInstancesInput)
    : Promise<InterfaceStartServerInstancesResponse>;
  stopServerInstances(input: InterfaceStopServerInstancesInput)
    : Promise<InterfaceStopServerInstancesResponse>;
  getRootPassword(input: InterfaceGetRootPasswordInput)
    : Promise<InterfaceGetRootPasswordResponse>;
  getMemberServerImageList(input?: InterfaceGetMemberServerImageListInput)
    : Promise<InterfaceGetMemberServerImageListResponse>;
  createMemberServerImage(input: InterfaceCreateMemberServerImageInput)
    : Promise<InterfaceCreateMemberServerImageResponse>;
  deleteMemberServerImages(input: InterfaceDeleteMemberServerImagesInput)
    : Promise<InterfaceDeleteMemberServerImagesResponse>;
  getBlockStorageInstanceList(input?: InterfaceGetBlockStorageInstanceListInput)
    : Promise<InterfaceGetBlockStorageInstanceListResponse>;
  createBlockStorageInstance(input: InterfaceCreateBlockStorageInstanceInput)
    : Promise<InterfaceCreateBlockStorageInstanceResponse>;
  deleteBlockStorageInstances(input: InterfaceDeleteBlockStorageInstancesInput)
    : Promise<InterfaceDeleteBlockStorageInstancesResponse>;
  changeBlockStorageVolumeSize(input: InterfaceChangeBlockStorageVolumeSize)
    : Promise<InterfaceChangeBlockStorageVolumeSizeResponse>;

  createBlockStorageSnapshotInstance(input: InterfaceCreateBlockStorageSnapshotInstanceInput)
    : Promise<InterfaceCreateBlockStorageSnapshotInstanceResponse>;
  deleteBlockStorageSnapshotInstances(input: InterfaceDeleteBlockStorageSnapshotInstancesInput)
    : Promise<InterfaceDeleteBlockStorageSnapshotInstancesResponse>;

  getBlockStorageSnapshotInstanceList(input?: InterfaceGetBlockStorageSnapshotInstanceListInput)
    : Promise<InterfaceGetBlockStorageSnapshotInstanceListResponse>;

  attachBlockStorageInstance(input: InterfaceAttachBlockStorageInstanceInput )
    : Promise<InterfaceAttachBlockStorageInstanceResponse>;
  detachBlockStorageInstances(input: InterfaceDetachBlockStorageInstancesInput)
    : Promise<InterfaceDetachBlockStorageInstancesResponse>;

  getPublicIpInstanceList(input?: InterfaceGetPublicIpInstanceListInput)
    : Promise<InterfaceGetPublicIpInstanceListResponse>;
  getPublicIpTargetServerInstanceList(input?: InterfaceGetPublicIpTargetServerInstanceListInput)
    : Promise<InterfaceGetPublicIpTargetServerInstanceListResponse>;
  createPublicIpInstance(input?: InterfaceCreatePublicIpInstanceInput)
    : Promise<InterfaceCreatePublicIpInstanceResponse>;
  associatePublicIpWithServerInstance(input: InterfaceAssociatePublicIpWithServerInstanceInput)
    : Promise<InterfaceAssociatePublicIpWithServerInstanceResponse>;
  disassociatePublicIpFromServerInstance(input: InterfaceDisassociatePublicIpFromServerInstanceInput)
    : Promise<InterfaceDisassociatePublicIpFromServerInstanceResponse>;
  deletePublicIpInstances(input: InterfaceDeletePublicIpInstancesInput)
    : Promise<InterfaceDeletePublicIpInstancesResponse>;
  getPortForwardingRuleList(input?: InterfaceGetPortForwardingRuleListInput)
    : Promise<InterfaceGetPortForwardingRuleListResponse>;
  addPortForwardingRules(input: InterfaceAddPortForwardingRulesInput)
    : Promise<InterfaceAddPortForwardingRulesResponse>;
  deletePortForwardingRules(input: InterfaceDeletePortForwardingRulesInput)
    : Promise<InterfaceDeletePortForwardingRulesResponse>;
}

interface InterfaceNcloudIaaSServerCustomMethods {
  createVM(): void;
}

interface InterfaceNcloudIaaSLoadBalancer {
  getLoadBalancerInstanceList(input?: InterfaceGetLoadBalancerInstanceListInput)
    : Promise<InterfaceGetLoadBalancerInstanceListResponse>;
  getLoadBalancerTargetServerInstanceList(input?: InterfaceGetLoadBalancerTargetServerInstanceListInput)
    : Promise<InterfaceGetLoadBalancerTargetServerInstanceListResponse>;
  createLoadBalancerInstance(input: InterfaceCreateLoadBalancerInstanceInput)
    : Promise<InterfaceCreateLoadBalancerInstanceResponse>;
  changeLoadBalancerInstanceConfiguration(input: InterfaceChangeLoadBalancerInstanceConfigurationInput)
    : Promise<InterfaceChangeLoadBalancerInstanceConfigurationResponse>;
  getLoadBalancedServerInstanceList(input: InterfaceGetLoadBalancedServerInstanceListInput)
    : Promise<InterfaceGetLoadBalancedServerInstanceListResponse>;
  changeLoadBalancedServerInstances(input: InterfaceChangeLoadBalancedServerInstancesInput)
    : Promise<InterfaceChangeLoadBalancedServerInstancesResponse>;
  deleteLoadBalancerInstances(input: InterfaceDeleteLoadBalancerInstancesInput)
    : Promise<InterfaceDeleteLoadBalancerInstancesResponse>;
  getLoadBalancerSslCertificateList(input?: InterfacegetLoadBalancerSslCertificateListInput)
    : Promise<InterfaceGetLoadBalancerSslCertificateListResponse>;
  addLoadBalancerSslCertificate(input: InterfaceAddLoadBalancerSslCertificateInput)
    : Promise<InterfaceAddLoadBalancerSslCertificateResponse>;
}

/** IaaS: interfaceIaaSServerInputs**/
interface InterfaceGetZoneListInput {
  regionNo?: string;
}

interface InterfaceIaaSServerGetServerImageProductListInput {
  platformTypeCodeList?: string[];
  infraResourceDetailTypeCode?: string;
  regionNo?: string;
}

interface InterfaceIaaSServerGetServerProductListInput {
  serverImageProductCode: string;
  regionNo?: string;
  zoneNo?: string;
  internetLineTypeCode?: string;
}

interface InterfaceCreateNasVolumeInstanceInput {
  volumeName: string;
  volumeSize: string;
  volumeAllotmentProtocolTypeCode: string;
  serverInstanceNoList?: string[];
  customIpList?: string[];
  cifsUserName?: string;
  cifsUserPassword?: string;
  nasVolumeDescription?: string;
  regionNo?: string;
  zoneNo?: string;
}

interface InterfaceDeleteNasVolumeInstanceInput {
  nasVolumeInstanceNo: string;
  regionNo?: string;
  zoneNo?: string;
}

interface InterfaceGetNasVolumeInstanceListInput {
  volumeAllotmentProtocolTypeCode?: string;
  isEventConfiguration?: boolean;
  isSnapshotConfiguration?: boolean;
  regionNo?: string;
  zoneNo?: string;
}

interface InterfaceChangeNasVolumeSizeInput {
  nasVolumeInstanceNo: string;
  volumeSize: string;
  regionNo?: string;
}

interface InterfaceGetNasVolumeInstanceRatingListInput {
  nasVolumeInstanceNo: string;
  startTime: string;
  endTime: string;
  interval: string;
  regionNo?: string;
}

interface InterfaceNasVolumeAccessControlInput {
  nasVolumeInstanceNo: string;
  serverInstanceNoList?: string[];
  customIpList?: string[];
  regionNo?: string;
}

interface InterfaceGetLoginKeyListInput {
  keyName?: string;
  pageNo?: number;
  pageSize?: number;
  regionNo?: string;
}

interface InterfaceCreateLoginKeyInput {
  keyName: string;
  regionNo?: string;
}

interface InterfaceDeleteLoginKeyInput {
  keyName: string;
  regionNo?: string;
}

interface InterfaceImportLoginKeyInput {
  keyName: string;
  publicKey: string;
  regionNo?: string;
}

interface InterfaceImportLoginKeyResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loginKeyList: {
    fingerprint: string;
    keyName: string;
    createDate: string;
  }[];
}

interface InterfaceGetAccessControlGroupListInput {
  accessControlGroupConfigurationNoList?: string[];
  isDefaultGroup?: boolean;
  accessControlGroupName?: string;
  pageNo?: number;
  regionNo?: string;
}

interface InterfaceGetAccessControlGroupServerInstanceListInput {
  accessControlGroupConfigurationNo: string;
  regionNo?: string;
}

interface InterfaceGetAccessControlRuleListInput {
  accessControlGroupConfigurationNo: string;
  regionNo?: string;
}

interface InterfaceGetServerInstanceListInput {
  serverInstanceNoList?: string[];
  searchFilterName?: string;
  searchFilterValue?: string;
  pageNo?: number;
  pageSize?: number;
  serverInstanceStatusCode?: string;
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  baseBlockStorageDiskTypeCode?: string;
  baseBlockStorageDiskDetailTypeCode?: string;
  sortedBy?: string;
  sortingOrder?: string;
}

interface InterfaceCreateServerInstancesInput {
  serverImageProductCode?: string;
  serverProductCode?: string;
  memberServerImageNo?: string;
  serverName?: string;
  serverDescription?: string;
  loginKeyName?: string;
  isProtectServerTermination?: boolean;
  serverCreateCount?: number;
  serverCreateStartNo?: number;
  internetLineTypeCode?: string;
  feeSystemTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  accessControlGroupConfigurationNoList?: string[];
  userData?: string;
}

interface InterfaceTerminateServerInstancesInput {
  serverInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceChangeServerInstanceSpecInput {
  serverInstanceNo: string;
  serverProductCode: string;
  regionNo?: string;
}

interface InterfaceRebootServerInstancesInput {
  serverInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceStartServerInstancesInput {
  serverInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceStopServerInstancesInput {
  serverInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceGetRootPasswordInput {
  serverInstanceNo: string;
  privateKey: string;
  regionNo?: string;
}

interface InterfaceGetMemberServerImageListInput {
  memberServerImageNoList?: string[];
  platformTypeCodeList?: string[];
  regionNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

interface InterfaceCreateMemberServerImageInput {
  memberServerImageName?: string;
  memberServerImageDescription?: string;
  serverInstanceNo: string;
  regionNo?: string;
}

interface InterfaceDeleteMemberServerImagesInput {
  memberServerImageNoList: string[];
  regionNo?: string;
}

interface InterfaceGetBlockStorageInstanceListInput {
  serverInstanceNo?: string;
  blockStorageInstanceNoList?: string[];
  searchFilterName?: string;
  searchFilterValue?: string;
  blockStorageTypeCodeList?: string[];
  blockStorageInstanceStatusCode?: string;
  diskTypeCode?: string;
  diskDetailTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

interface InterfaceCreateBlockStorageInstanceInput {
  blockStorageName?: string;
  blockStorageSize: number;
  blockStorageDescription?: string;
  serverInstanceNo: string;
  diskDetailTypeCode?: string;
  blockStorageSnapshotInstanceNo?: string;
  regionNo?: string;
}

interface InterfaceDeleteBlockStorageInstancesInput {
  blockStorageInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceChangeBlockStorageVolumeSize {
  blockStorageInstanceNo: string;
  blockStorageSize: number;
}

interface InterfaceChangeBlockStorageVolumeSizeResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

interface InterfaceGetBlockStorageSnapshotInstanceListInput {
  blockStorageSnapshotInstanceNoList?: string[];
  originalBlockStorageInstanceNoList: string[];
  regionNo?: string;
  pageNo?: number;
  pageSize?: number;
}

interface InterfaceCreateBlockStorageSnapshotInstanceInput {
  blockStorageInstanceNo: string;
  blockStorageSnapshotName?: string;
  blockStorageSnapshotDescription?: string;
}

interface InterfaceCreateBlockStorageSnapshotInstanceResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

interface InterfaceDeleteBlockStorageSnapshotInstancesInput {
  blockStorageSnapshotInstanceNoList: string[];
}

interface InterfaceDeleteBlockStorageSnapshotInstancesResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

interface InterfaceAttachBlockStorageInstanceInput {
  serverInstanceNo: string;
  blockStorageInstanceNo: string;
}

interface InterfaceAttachBlockStorageInstanceResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  blockStorageInstanceList: BlockStorageInstance[];
}

interface CommonCode {
  /**
   * 코드
   * @type {string}
   * @memberof CommonCode
   */
  code?: string;
  /**
   * 코드명
   * @type {string}
   * @memberof CommonCode
   */
  codeName?: string;
}

interface BlockStorageInstance {
  /**
   * 블록스토리지인스턴스번호
   * @type {string}
   * @memberof BlockStorageInstance
   */
  blockStorageInstanceNo?: string;
  /**
   * 서버인스턴스번호
   * @type {string}
   * @memberof BlockStorageInstance
   */
  serverInstanceNo?: string;
  /**
   * 서버명
   * @type {string}
   * @memberof BlockStorageInstance
   */
  serverName?: string;
  /**
   *
   * @type {CommonCode}
   * @memberof BlockStorageInstance
   */
  blockStorageType?: CommonCode;
  /**
   * 블록스토리지명
   * @type {string}
   * @memberof BlockStorageInstance
   */
  blockStorageName?: string;
  /**
   * 블록스토리지사이즈
   * @type {number}
   * @memberof BlockStorageInstance
   */
  blockStorageSize?: number;
  /**
   * 디바이스명
   * @type {string}
   * @memberof BlockStorageInstance
   */
  deviceName?: string;
  /**
   * 회원서버이미지번호
   * @type {string}
   * @memberof BlockStorageInstance
   */
  memberServerImageNo?: string;
  /**
   * 블록스토리지상품코드
   * @type {string}
   * @memberof BlockStorageInstance
   */
  blockStorageProductCode?: string;
  /**
   *
   * @type {CommonCode}
   * @memberof BlockStorageInstance
   */
  blockStorageInstanceStatus?: CommonCode;
  /**
   *
   * @type {CommonCode}
   * @memberof BlockStorageInstance
   */
  blockStorageInstanceOperation?: CommonCode;
  /**
   * 블록스토리지인스턴스상태명
   * @type {string}
   * @memberof BlockStorageInstance
   */
  blockStorageInstanceStatusName?: string;
  /**
   * 생성일시
   * @type {string}
   * @memberof BlockStorageInstance
   */
  createDate?: string;
  /**
   * 블록스토리지인스턴스설명
   * @type {string}
   * @memberof BlockStorageInstance
   */
  blockStorageInstanceDescription?: string;
  /**
   *
   * @type {CommonCode}
   * @memberof BlockStorageInstance
   */
  diskType?: CommonCode;
  /**
   *
   * @type {CommonCode}
   * @memberof BlockStorageInstance
   */
  diskDetailType?: CommonCode;
  /**
   * 최대 IOPS
   * @type {number}
   * @memberof BlockStorageInstance
   */
  maxIopsThroughput?: number;
  /**
   *
   * @type {Region}
   * @memberof BlockStorageInstance
   */
  region?: Region;
  /**
   *
   * @type {Zone}
   * @memberof BlockStorageInstance
   */
  zone?: Zone;
}

interface InterfaceDetachBlockStorageInstancesInput {
  blockStorageInstanceNoList: string[];
}

interface InterfaceDetachBlockStorageInstancesResponse {
  requestId:	string;
  returnCode:	string;
  returnMessage:	string;
  totalRows: number;
  blockStorageInstanceList: BlockStorageInstance[];
}

interface InterfaceGetPublicIpInstanceListInput {
  isAssociated?: string;
  publicIpInstanceNoList?: string[];
  publicIpList?: string[];
  searchFilterName?: string;
  searchFilterValue?: string;
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

interface InterfaceGetPublicIpTargetServerInstanceListInput {
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
}

interface InterfaceCreatePublicIpInstanceInput {
  serverInstanceNo?: string;
  publicIpDescription?: string;
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
}

interface InterfaceAssociatePublicIpWithServerInstanceInput {
  publicIpInstanceNo: string;
  serverInstanceNo: string;
  regionNo?: string;
}

interface InterfaceDisassociatePublicIpFromServerInstanceInput {
  publicIpInstanceNo: string;
  regionNo?: string;
}

interface InterfaceDeletePublicIpInstancesInput {
  publicIpInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceGetPortForwardingRuleListInput {
  internetLineTypeCode?: string;
  regionNo?: string;
  zoneNo?: string;
}

interface InterfaceAddPortForwardingRulesInput {
  portForwardingConfigurationNo: string;
  portForwardingRuleList: {
    serverInstanceNo: string;
    portForwardingExternalPort: string;
    portForwardingInternalPort: string;
  }[];
  regionNo?: string;
}

interface InterfaceDeletePortForwardingRulesInput {
  portForwardingConfigurationNo: string;
  portForwardingRuleList: {
    serverInstanceNo: string;
    portForwardingExternalPort: string;
    portForwardingInternalPort: string;
  }[];
  regionNo?: string;
}

interface InterfaceRegion {
  regionNo: string; // "1",
  regionCode: string; // "KR",
  regionName: string; // "Korea"
}
interface InterfaceZone {
  zoneNo: string; // "2",
  zoneName: string; // "KR-1",
  zoneCode: string; // "KR-1",
  zoneDescription: string; // "가산 zone",
  regionNo: string; // "1"
}
interface InterfaceServerInfo {
  serverInstanceNo: string; // "768254",
  serverName: string; // "test001",
  serverDescription: string; // "",
  cpuCount: number; // 1,
  memorySize: number; // 2147483648,
  baseBlockStorageSize: number; // 53687091200,
  platformType: {
    code: string; // "LNX64",
    codeName: string; // "Linux 64 Bit"
  };
  loginKeyName: string; // "mygbcompany",
  isFeeChargingMonitoring: boolean; // true,
  publicIp: string; //  "",
  privateIp: string; //  "10.41.0.121",
  serverImageName: string; //  "centos-7.3-64",
  serverInstanceStatus: {
    code: string; // "RUN",
    codeName: string; //  "Server run state"
  };
  serverInstanceOperation: {
    code: string; //  "NULL",
    codeName: string; //  "Server NULL OP"
  };
  serverInstanceStatusName: string; //  "running",
  createDate: string; // "2018-05-06T19:30:13+0900",
  uptime: string; //  "2018-05-06T19:32:52+0900",
  serverImageProductCode: string; //  "SPSW0LINUX000046",
  serverProductCode: string; //  "SPSVRSSD00000001",
  isProtectServerTermination: boolean; // true,
  portForwardingPublicIp: string; // "106.10.41.149",
  zone: InterfaceZone;
  region: InterfaceRegion;
  baseBlockStorageDiskType: {
    code: string; // "NET",
    codeName: string; // "Network Storage"
  };
  baseBlockStorageDiskDetailType: {
    code: string; //  "SSD",
    codeName: string; //  "SSD"
  };
  internetLineType: {
    code: string; //  "PUBLC",
    codeName: string; //  "PUBLC"
  };
  userData: string; //  "",
  accessControlGroupList: {
    accessControlGroupConfigurationNo: string; //  "42879",
    accessControlGroupName: string; //  "rabbit-mq-tMBq",
    accessControlGroupDescription: string; // "Group for RabbitMQ service 'test' (automatically created)",
    isDefault: boolean // false,
    createDate: string; // "2018-05-06T19:30:12+0900"
  }[];
}

interface InterfaceMemberServerImage {
  memberServerImageNo: string; //  "7300",
  memberServerImageName: string; // "hello",
  memberServerImageDescription: string; // "hello test",
  originalServerInstanceNo: string; // "768416",
  originalServerProductCode: string; // "SPSVRSSD00000003",
  originalServerName: string; // "test",
  originalBaseBlockStorageDiskType: {
    code: string; // "NET",
    codeName: string; // "Network Storage"
  };
  originalServerImageProductCode: string; // "SPSW0LINUX000046",
  originalOsInformation: string; // "CentOS 7.3 (64-bit)",
  originalServerImageName: string; // "centos-7.3-64",
  memberServerImageStatusName: string; // "creating",
  memberServerImageStatus: {
    code: string; // "INIT",
    codeName: string; // "NSI INIT state"
  };
  memberServerImageOperation: {
    code: string; // "CREAT",
    codeName: string; // "NSI CREAT OP"
  };
  memberServerImagePlatformType: {
    code: string; // "LNX64",
    codeName: string; // "Linux 64 Bit"
  };
  createDate: string; // "2018-05-07T00:38:40+0900",
  region: InterfaceRegion;
  memberServerImageBlockStorageTotalRows: number; // 0,
  memberServerImageBlockStorageTotalSize: number; // 0
}

interface InterfaceBlockStorageInstance {
  blockStorageInstanceNo: string; // "768417",
  serverInstanceNo: string; // "768416",
  serverName: string; // "test",
  blockStorageType: {
    code: string; // "BASIC",
    codeName: string; // "Basic BS"
  };
  blockStorageName: string; // "test",
  blockStorageSize: number; // 53687091200,
  deviceName: string; // "/dev/xvda",
  blockStorageProductCode: string; // "SPBSTBSTBS000005",
  blockStorageInstanceStatus: {
    code: string; // "ATTAC",
    codeName: string; //  "Block storage ATTACHED state"
  };
  blockStorageInstanceOperation: {
    code: string; // "NULL",
    codeName: string; // "Block Storage NULLOP"
  };
  blockStorageInstanceStatusName: string; // "attached",
  createDate: string; // "2018-05-07T00:26:55+0900",
  blockStorageInstanceDescription: string; // "test's basic storage",
  diskType: {
    code: string; // "NET",
    codeName: string; // "Network Storage"
  };
  diskDetailType: {
    code: string; // "SSD",
    codeName: string; // "SSD"
  };
  maxIopsThroughput: number; // 4000,
  zone: InterfaceZone;
}

interface InterfaceBlockStorageSnapshotInstance {
  blockStorageSnapshotInstanceNo: string; // "768434",
  blockStorageSnapshotName: string; // "test",
  blockStorageSnapshotVolumeSize: number; // 53687091200,
  originalBlockStorageInstanceNo: string; // "768417",
  originalBlockStorageName: string; // "test",
  blockStorageSnapshotInstanceStatus: {
    code: string; // "INIT",
    codeName: string; // "Block storage INIT state"
  };
  blockStorageSnapshotInstanceOperation: {
    code: string; // "NULL",
    codeName: string; // "Block Storage NULLOP"
  };
  blockStorageSnapshotInstanceStatusName: string; // "initialized",
  createDate: string; // "2018-05-07T01:17:40+0900",
  blockStorageSnapshotInstanceDescription: string; // "",
  serverImageProductCode: string; // "SPSW0LINUX000046",
  osInformation: string; // "CentOS 7.3 (64-bit)"
}

interface InterfacePublicIpInstance {
  publicIpInstanceNo: string; // "768872",
  publicIp: string; // "106.10.41.178",
  publicIpDescription: string; // "",
  createDate: string; // "2018-05-07T11:22:31+0900",
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  };
  publicIpInstanceStatusName: string; // "created",
  publicIpInstanceStatus: {
    code: string; // "CREAT",
    codeName: string; // "NET CREATE state"
  };
  publicIpInstanceOperation: {
    code: string; // "NULL",
    codeName: string; // "NET NULL OP"
  };
  publicIpKindType: {
    code: string; // "GEN",
    codeName: string; // "General"
  };
  serverInstanceAssociatedWithPublicIp: InterfaceServerInfo; // {},
  zone: InterfaceZone;
}

/** IaaS: IaaS Server Reponse **/
interface InterfaceGetServerImageProductListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  productList: {
    productCode: string; // "SPSVRDBAAS000001",
    productName: string; // "vCPU 2EA, Memory 4GB",
    productType: {
      code: string; // "STAND",
      codeName: string; // "Standard"
    },
    productDescription: string; // "vCPU 2EA, Memory 4GB",
    infraResourceType: {
      code: string; // "DBAAS",
      codeName: string; // "Cloud DB"
    },
    cpuCount: number; // 2,
    memorySize: number; // 4294967296,
    baseBlockStorageSize: number; // 53687091200,
    osInformation: string; // "",
    diskType: {
      code: string; // "NET",
      codeName: string; // "Network Storage"
    },
    addBlockStorageSize: number; // 0
  }[];
}
interface InterfaceGetServerProductListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  productList: {
    productCode: string; // "SPSVRSTAND000056",
    productName: string; // "vCPU 1EA, Memory 1GB, Disk 50GB",
    productType: {
      code: string; // "MICRO",
      codeName: string; // "Micro Server"
    },
    productDescription: string; // "vCPU 1EA, Memory 1GB, Disk 50GB",
    infraResourceType: {
      code: string; // "SVR",
      codeName: string; // "Server"
    },
    cpuCount: number; // 1,
    memorySize: number; // 1073741824,
    baseBlockStorageSize: number; // 53687091200,
    osInformation: string; //  "",
    diskType: {
      code: string; // "NET",
      codeName: string; // "Network Storage"
    },
    addBlockStorageSize: string; // 0
  }[];
}
interface InterfaceGetZoneListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  zoneList: InterfaceZone[];
}
interface InterfaceGetRegionListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  regionList: InterfaceRegion[];
}
interface InterfaceGetRaidListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  raidList: {
    raidTypeName: string;
    raidName: string;
  }[];
}

interface InterfaceNasVolumeInstanceListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  nasVolumeInstanceList: {
    nasVolumeInstanceNo: string; // "767717",
    nasVolumeInstanceStatus: {
      code: string; // "CREAT",
      codeName: string; // "NAS create"
    },
    nasVolumeInstanceOperation: {
      code: string; // "NULL",
      codeName: string; // "NAS NULL OP"
    },
    nasVolumeInstanceStatusName: string; // "created",
    createDate: string; // "2018-05-06T02:26:26+0900",
    nasVolumeInstanceDescription: string; // "",
    mountInformation: string; // "10.101.83.37:/n780247_testVol",
    volumeAllotmentProtocolType: {
      code: string; // "NFS",
      codeName: string; // "NFS"
    },
    volumeName: string; // "n780247_testVol",
    volumeTotalSize: number; // 536870912000,
    volumeSize: number; // 536870912000,
    volumeUseSize: number; // 278528,
    volumeUseRatio: number; // 0,
    snapshotVolumeConfigurationRatio: number; // 0,
    snapshotVolumeSize: number; // 0,
    snapshotVolumeUseSize: number; // 0,
    snapshotVolumeUseRatio: number; // 0,
    isSnapshotConfiguration: boolean; // false,
    isEventConfiguration: boolean; // false,
    region: InterfaceRegion,
    zone: InterfaceZone,
    nasVolumeInstanceCustomIpList: {
      customIp: string;
    }[];
    nasVolumeServerInstanceList: InterfaceServerInfo[];
  }[];
}
interface InterfaceGetNasVolumeInstanceRatingListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  NasVolumeInstanceRatingList: {
    ratingTime: string; // '2018-05-06 13:23:10.101',
    volumeSize: number; // 536870912000,
    volumeUseSize: number; // 278528,
    volumeUseRatio: number; // 0,
    snapshotVolumeSize: number; // 0,
    snapshotVolumeUseSize: number; // 0,
    snapshotVolumeUseRatio: number; // 0
  }[];
}
interface InterfaceGetLoginKeyListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 3,
  loginKeyList: {
    fingerprint: string;
    keyName: string;
    createDate: string;
  }[];
}

interface InterfaceCreateLoginKeyResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  privateKey: string;
}

interface InterfaceDeleteLoginKeyResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
}

interface InterfaceGetAccessControlGroupListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  accessControlGroupList: {
    accessControlGroupConfigurationNo: string; // '5475',
    accessControlGroupName: string; // 'ncloud-default-acg',
    accessControlGroupDescription: string; // 'Default AccessControlGroup',
    isDefault: boolean; // true,
    createDate: string; // '2017-04-14T10:07:06+0900'
  }[];
}

interface InterfaceGetAccessControlGroupServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceGetAccessControlRuleListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  accessControlRuleList: {
    accessControlRuleConfigurationNo: string;
    accessControlRuleDescription: string;
    protocolType: {
      code: string; // "ICMP",
      codeName: string; // "icmp"
    },
    sourceAccessControlRuleConfigurationNo: string;
    sourceAccessControlRuleName: string;
    sourceIp: string;
  }[];
}

interface InterfaceGetServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceCreateServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceStopServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceTerminateServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceChangeServerInstanceSpecResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceRebootServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceStartServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceGetRootPasswordResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  rootPassword: string;
}

interface InterfaceGetMemberServerImageListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

interface InterfaceCreateMemberServerImageResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

interface InterfaceDeleteMemberServerImagesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

interface InterfaceGetBlockStorageInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

interface InterfaceCreateBlockStorageInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

interface InterfaceDeleteBlockStorageInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

interface InterfaceGetBlockStorageSnapshotInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageSnapshotInstanceList: InterfaceBlockStorageSnapshotInstance[];
}

interface InterfaceGetPublicIpInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

interface InterfaceGetPublicIpTargetServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceCreatePublicIpInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

interface InterfaceAssociatePublicIpWithServerInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

interface InterfaceDisassociatePublicIpFromServerInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

interface InterfaceDeletePublicIpInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

interface InterfaceGetPortForwardingRuleListResponse {
  requestId: string; // "6931fbd5-f9c3-4864-9aa1-61bdee34f761",
  returnCode: string; // "0",
  returnMessage: string; // "success",
  portForwardingConfigurationNo: string; // "23536",
  portForwardingPublicIp: string; // "106.10.41.164",
  zone: InterfaceZone;
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  };
  totalRows: number; // 0,
  portForwardingRuleList: {
    portForwardingExternalPort: number;
    portForwardingInternalPort: number;
    serverInstance: InterfaceServerInfo;
  }[];
}

interface InterfaceAddPortForwardingRulesResponse {
  requestId: string; // "6931fbd5-f9c3-4864-9aa1-61bdee34f761",
  returnCode: string; // "0",
  returnMessage: string; // "success",
  portForwardingConfigurationNo: string; // "23536",
  portForwardingPublicIp: string; // "106.10.41.164",
  zone: InterfaceZone;
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  };
  totalRows: number; // 0,
  portForwardingRuleList: {
    portForwardingExternalPort: number;
    portForwardingInternalPort: number;
    serverInstance: InterfaceServerInfo;
  }[];
}

interface InterfaceDeletePortForwardingRulesResponse {
  requestId: string; // "6931fbd5-f9c3-4864-9aa1-61bdee34f761",
  returnCode: string; // "0",
  returnMessage: string; // "success",
  portForwardingConfigurationNo: string; // "23536",
  portForwardingPublicIp: string; // "106.10.41.164",
  zone: InterfaceZone;
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  };
  totalRows: number; // 0,
  portForwardingRuleList: {
    portForwardingExternalPort: number;
    portForwardingInternalPort: number;
    serverInstance: InterfaceServerInfo;
  }[];
}

/** IaaS: LoadBalancer**/
interface InterfaceGetLoadBalancerInstanceListInput {
  loadBalancerInstanceNoList?: string[];
  internetLineTypeCode?: string;
  networkUsageTypeCode?: string;
  regionNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}

interface LoadBalancerAlgorithmType {
  code: string;
  codeName: string;
}

interface InternetLineType {
  code: string;
  codeName: string;
}

interface LoadBalancerInstanceStatus {
  code: string;
  codeName: string;
}

interface LoadBalancerInstanceOperation {
  code: string;
  codeName: string;
}

interface NetworkUsageType {
  code: string;
  codeName: string;
}

interface ProtocolType {
  code: string;
  codeName: string;
}

interface LoadBalancerRuleList {
  protocolType: ProtocolType;
  loadBalancerPort: number;
  serverPort: number;
  l7HealthCheckPath: string;
  certificateName: string;
  proxyProtocolUseYn: string;
}

interface PlatformType {
  code: string;
  codeName: string;
}

interface ServerInstanceStatus {
  code: string;
  codeName: string;
}

interface ServerInstanceOperation {
  code: string;
  codeName: string;
}

interface Zone {
  zoneNo: string;
  zoneName: string;
  zoneCode: string;
  zoneDescription: string;
  regionNo: string;
}

interface Region {
  regionNo: string;
  regionCode: string;
  regionName: string;
}

interface BaseBlockStorageDiskType {
  code: string;
  codeName: string;
}

interface BaseBlockStorageDiskDetailType {
  code: string;
  codeName: string;
}

interface InternetLineType2 {
  code: string;
  codeName: string;
}

interface ServerInstanceType {
  code: string;
  codeName: string;
}

interface InterfaceGetLoadBalancerTargetServerInstanceListInput {
  internetLineTypeCode?: string;
  regionNo?: string;
}

interface InterfaceGetLoadBalancerTargetServerInstanceListResponse {
  requestId: string; //  'b90bb68d-cff1-49a8-af72-75c1f58eac38',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 13,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceCreateLoadBalancerInstanceInput {
  loadBalancerName?: string;
  loadBalancerAlgorithmTypeCode?: string;
  loadBalancerDescription?: string;
  internetLineTypeCode?: string;
  networkUsageTypeCode?: string;
  serverInstanceNoList?: string[];
  loadBalancerRuleList: {
    protocolTypeCode: string;
    loadBalancerPort: string;
    serverPort: string;
    l7HealthCheckPath?: string;
    certificateName?: string;
  }[];
  regionNo?: string;
}

interface InterfaceCreateLoadBalancerInstanceResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loadBalancerInstanceList: LoadBalancerInstanceList[];
}

interface InterfaceChangeLoadBalancerInstanceConfigurationInput {
  loadBalancerInstanceNo: string;
  loadBalancerAlgorithmTypeCode: string;
  loadBalancerDescription?: string;
  loadBalancerRuleList: {
    protocolTypeCode: string;
    loadBalancerPort: string;
    serverPort: string;
    l7HealthCheckPath?: string;
    certificateName?: string;
  }[];
  regionNo?: string;
}

interface InterfaceChangeLoadBalancerInstanceConfigurationResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loadBalancerInstanceList: LoadBalancerInstanceList[];
}

interface InterfaceGetLoadBalancedServerInstanceListInput {
  loadBalancerInstanceNo: string;
  regionNo?: string;
}

interface InterfaceGetLoadBalancedServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

interface InterfaceChangeLoadBalancedServerInstancesInput {
  loadBalancerInstanceNo: string;
  serverInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceChangeLoadBalancedServerInstancesResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loadBalancerInstanceList: LoadBalancerInstanceList[];
}

interface InterfaceDeleteLoadBalancerInstancesInput {
  loadBalancerInstanceNoList: string[];
  regionNo?: string;
}

interface InterfaceDeleteLoadBalancerInstancesResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loadBalancerInstanceList: LoadBalancerInstanceList[];
}

interface LoadBalancerInstanceList {
  loadBalancerInstanceNo: string;
  virtualIp: string;
  loadBalancerName: string;
  loadBalancerAlgorithmType: LoadBalancerAlgorithmType;
  loadBalancerDescription: string;
  createDate: string;
  domainName: string;
  internetLineType: LoadBalancerAlgorithmType;
  loadBalancerInstanceStatusName: string;
  loadBalancerInstanceStatus: LoadBalancerAlgorithmType;
  loadBalancerInstanceOperation: LoadBalancerAlgorithmType;
  networkUsageType: LoadBalancerAlgorithmType;
  isHttpKeepAlive: boolean;
  connectionTimeout: number;
  certificateName: string;
  loadBalancerRuleList: LoadBalancerRuleList[];
  loadBalancedServerInstanceList: LoadBalancedServerInstanceList[];
}

interface LoadBalancedServerInstanceList {
  serverInstance: ServerInstance;
  serverHealthCheckStatusList: ServerHealthCheckStatusList[];
}

interface ServerHealthCheckStatusList {
  protocolType: LoadBalancerAlgorithmType;
  loadBalancerPort: number;
  serverPort: number;
  l7HealthCheckPath: string;
  proxyProtocolUseYn: string;
  serverStatus: boolean;
}

interface ServerInstance {
  serverInstanceNo: string;
  serverName: string;
  serverDescription: string;
  cpuCount: number;
  memorySize: number;
  baseBlockStorageSize: number;
  platformType: LoadBalancerAlgorithmType;
  loginKeyName: string;
  isFeeChargingMonitoring: boolean;
  publicIp: string;
  privateIp: string;
  serverImageName: string;
  serverInstanceStatus: LoadBalancerAlgorithmType;
  serverInstanceOperation: LoadBalancerAlgorithmType;
  serverInstanceStatusName: string;
  createDate: string;
  uptime: string;
  serverImageProductCode: string;
  serverProductCode: string;
  isProtectServerTermination: boolean;
  portForwardingPublicIp: string;
  zone: Zone;
  region: Region;
  baseBlockStorageDiskType: LoadBalancerAlgorithmType;
  baseBlockStorageDiskDetailType: LoadBalancerAlgorithmType;
  internetLineType: LoadBalancerAlgorithmType;
  serverInstanceType: LoadBalancerAlgorithmType;
  userData: string;
  accessControlGroupList: AccessControlGroupList[];
  instanceTagList: any[];
}

interface AccessControlGroupList {
  accessControlGroupConfigurationNo: string;
  accessControlGroupName: string;
  accessControlGroupDescription: string;
  isDefault: boolean;
  createDate: string;
}

interface Region {
  regionNo: string;
  regionCode: string;
  regionName: string;
}

interface Zone {
  zoneNo: string;
  zoneName: string;
  zoneCode: string;
  zoneDescription: string;
  regionNo: string;
}

interface LoadBalancerRuleList {
  protocolType: LoadBalancerAlgorithmType;
  loadBalancerPort: number;
  serverPort: number;
  l7HealthCheckPath: string;
  certificateName: string;
  proxyProtocolUseYn: string;
}

interface LoadBalancerAlgorithmType {
  code: string;
  codeName: string;
}

interface ProtocolType2 {
  code: string;
  codeName: string;
}

interface InterfaceGetLoadBalancerInstanceListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  loadBalancerInstanceList: LoadBalancerInstanceList[];
}

interface InterfacegetLoadBalancerSslCertificateListInput {
  certificateName?: string;
}

interface InterfaceGetLoadBalancerSslCertificateListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  sslCertificateList: SslCertificateList[];
}

interface SslCertificateList {
  certificateName: string;
  privateKey: string;
  publicKeyCertificate: string;
  certificateChain?: string;
}

interface InterfaceAddLoadBalancerSslCertificateInput {
  certificateName: string;
  privateKey: string;
  publicKeyCertificate: string;
  certificateChain?: string;
}

interface InterfaceAddLoadBalancerSslCertificateResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  sslCertificateList: SslCertificateList[];
}

/** PaaS **/
interface InterfaceNcloudPaaSGeoLocation {
  geoLocation(input: InterfaceGeoLocationInput): Promise<InterfaceGeoLocationResponse>;
}

interface InterfaceGeoLocationInput {
  ip: string;
  enc?: string;
  ext?: string;
}

interface InterfaceGeoLocationResponse {
  returnCode: number;
  requestId: string;
  geoLocation: {
    country: string;
    code: string;
    r1: string;
    r2: string;
  };
}
