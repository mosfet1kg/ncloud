/** IaaS: LoadBalancer**/
export interface InterfaceGetLoadBalancerInstanceListInput {
  loadBalancerInstanceNoList?: string[];
  internetLineTypeCode?: string;
  networkUsageTypeCode?: string;
  regionNo?: string;
  pageNo?: number;
  pageSize?: number;
  sortedBy?: string;
  sortingOrder?: string;
}
