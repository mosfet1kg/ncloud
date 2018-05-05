export interface InterfaceIaaSServerGetServerImageProductListInput {
  platformTypeCodeList?: string[];
  regionNo?: string;
}

export interface InterfaceIaaSServerGetServerProductListInput {
  serverImageProductCode: string;
  regionNo?: string;
  zoneNo?: string;
}
