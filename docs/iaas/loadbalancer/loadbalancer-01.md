## Load Balancer API 개요

### 공통설정

* {LOADBALANCER_API_URL}

```
https://ncloud.apigw.ntruss.com/loadbalancer/v1
```

### API References
  * [로드밸런서](#로드밸런서)
    * [로드밸런서인스턴스리스트조회](#getloadbalancerinstancelist)
    * [로드밸런서Target서버인스턴스리스트](#getloadbalancertargetserverinstancelist)
    * [로드밸런서인스턴스생성](#createloadbalancerinstance)
    * [로드밸런서인스턴스설정변경](#changeloadbalancerinstanceconfiguration)
    * [로드밸런서Bind된서버인스턴스리스트조회](#getloadbalancedserverinstancelist)
    * [로드밸런서에Bind된서버인스턴스변경](#changeloadbalancedserverinstances)
    * [로드밸런서인스턴스삭제](#deleteloadbalancerinstances)
    * [로드밸런서SSL인증서조회](#getloadbalancersslcertificatelist)
    * [로드밸런서SSL인증서추가](#addloadbalancersslcertificate)
    * [로드밸런서SSL인증서삭제](#deleteloadbalancersslcertificate)


----

### 로드밸런서

#### getLoadBalancerInstanceList

- API명

  로드밸런서인스턴스리스트조회

- action

  getLoadBalancerInstanceList

- 설명
  - 로드밸런서 인스턴스 리스트를 조회합니다.
  - 페이징 처리가 가능합니다.
- 요청 파라미터

| 파라미터명                        | 간략 설명          | 타입    | 필수여부 |
| ---------------------------- | -------------- | ------- |  ---- |
| loadBalancerInstanceNoList | 로드밸런서인스턴스번호리스트 | List<String>  |  No   |
| internetLineTypeCode         | 인터넷라인구분코드      | String  | No   |
| networkUsageTypeCode         | 네트워크용도구분코드     | String  | No   |
| regionNo                     | 리전번호           | String  |   No   |
| pageNo                       | 페이지번호          | Integer |  No   |
| pageSize                     | 페이지사이즈         | Integer |  No   |
| sortedBy                     | 정렬 대상          | String  |   No   |
| sortingOrder                 | 정렬 순서          | String  |  No   |

- loadBalancernstanceNoList
  - 조회할 공인IP인스턴스번호 리스트
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
- networkUsageTypeCode
  - 네트워크용도구분코드
  - PBLIP(Public), PRVT(Private)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회할 페이지 사이즈
- sortedBy
  - 목록결과에 대한 정렬 칼럼을 정할 수 있습니다.
  - 로드밸런서명(loadBalancerName) | 로드밸런서인스턴스번호(loadBalancerInstanceNo) [대소문자 구분 없음]
  - default : 로드밸런서인스턴스번호(loadBalancerInstanceNo)
- sortingOrder
  - 오름차순 내림차순에 대한 목록 결과에 ordering을 정할 수 있습니다.
  - 오름차순(ascending) | 내림차순(descending) [대소문자 구분 없음]
  - default : 오름차순(ascending)

- Example
```javascript
const client = ncloud.createClient({
    accessKey,
    secretKey,
    regionNo: "1",
});

const loadBalancer = client.IaaS.loadBalancer();
const loadBalancerList = await loadBalancer.getLoadBalancerInstanceList();

/** Return **/
{
    requestId: 'd5389d94-1c7f-4262-88a6-73731d1789ee',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    loadBalancerInstanceList: 
    [ { loadBalancerInstanceNo: '978338',
        virtualIp: '49.236.151.96,49.236.150.124',
        loadBalancerName: 'kube-master-lb',
        loadBalancerAlgorithmType: [Object],
        loadBalancerDescription: '',
        createDate: '2018-09-28T23:46:30+0900',
        domainName: 'slb-978338.ncloudslb.com',
        internetLineType: [Object],
        loadBalancerInstanceStatusName: 'used',
        loadBalancerInstanceStatus: [Object],
        loadBalancerInstanceOperation: [Object],
        networkUsageType: [Object],
        isHttpKeepAlive: false,
        connectionTimeout: 60,
        certificateName: '',
        loadBalancerRuleList: [Array],
        loadBalancedServerInstanceList: [Array] }
    ]
}
```

#### getLoadBalancerTargetServerInstanceList

- API명

  로드밸런서Target서버인스턴스리스트(로드밸런서에 할당가능한 서버인스턴스리스트 - 생성 시 사용)

- action

  getLoadBalancerTargetServerInstanceList

- 설명

  로드밸런서에 할당가능한 서버인스턴스 리스트를 조회합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명     | 타입     | 제약               | 필수여부 |
| -------------------- | --------- | ------ | ---------------- | ---- |
| internetLineTypeCode | 인터넷라인구분코드 | String | Min : 1, Max : 5 | No   |
| regionNo             | 리전번호      | String |                  | No   |

- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
  - default : PUBLC(Public)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.

- Example

```javascript
const client = ncloud.createClient({
    accessKey,
    secretKey,
    regionNo: "1",
});

const loadBalancer = client.IaaS.loadBalancer();
const loadBalancerTargetServerInstanceList = await loadBalancer.getLoadBalancerTargetServerInstanceList();

/** Result **/
{ 
    requestId: '2bbe819b-473a-4736-ae80-378a3641ec06',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 13,
    serverInstanceList: 
    [ { serverInstanceNo: '979326',
        serverName: 'akube-worker',
        serverDescription: '',
        cpuCount: 2,
        memorySize: 4294967296,
        baseBlockStorageSize: 53687091200,
        platformType: [Object],
        loginKeyName: 'mygbhome',
        isFeeChargingMonitoring: false,
        publicIp: '',
        privateIp: '10.41.5.6',
        serverImageName: 'centos-7.3-64',
        serverInstanceStatus: [Object],
        serverInstanceOperation: [Object],
        serverInstanceStatusName: 'running',
        createDate: '2018-09-30T13:41:32+0900',
        uptime: '2018-09-30T13:44:28+0900',
        serverImageProductCode: 'SPSW0LINUX000046',
        serverProductCode: 'SPSVRSSD00000003',
        isProtectServerTermination: false,
        portForwardingPublicIp: '106.10.57.132',
        zone: [Object],
        region: [Object],
        baseBlockStorageDiskType: [Object],
        baseBlockStorageDiskDetailType: [Object],
        internetLineType: [Object],
        serverInstanceType: [Object],
        userData: '',
        accessControlGroupList: [Array],
        instanceTagList: [] },
    ]
}
```


#### createLoadBalancerInstance

- API명

  로드밸런서인스턴스생성

- action

  createLoadBalancerInstance

- 설명

  로드밸런서 인스턴스를 생성합니다.

- 요청 파라미터

| 파라미터명                                    | 간략 설명                   | 타입      | 제약                       | 필수여부        |
| ---------------------------------------- | ----------------------- | ------- | ------------------------ | ----------- |
| loadBalancerName                         | 로드밸런서명                  | String  | Min : 3,<br/>Max : 30    | No          |
| loadBalancerAlgorithmTypeCode            | 로드밸런서알고리즘구분코드           | String  | Min : 1,<br/>Max : 5     | No          |
| loadBalancerDescription                  | 로드밸런서설명                 | String  | in : 1,<br/>Max : 1000   | No          |
| internetLineTypeCode                     | 인터넷라인구분코드               | String  | Min : 1,<br/>Max : 5     | No          |
| networkUsageTypeCode                     | 네트워크용도구분코드              | String  | Min : 1,<br/>Max : 5     | No          |
| serverInstanceNoList                   | 서버인스턴스번호리스트             | List<String>  | 중복불가                     | No          |
| loadBalancerRuleList[N].protocolTypeCode  | 로드밸런서RULE리스트.N.프로토콜구분코드 | String  | Min : 1,<br/>Max : 5     | Yes         |
| loadBalancerRuleList[N].loadBalancerPort  | 로드밸런서RULE리스트.N.로드밸런서포트  | Integer | Min : 1,<br/>Max : 65534 | Yes         |
| loadBalancerRuleList[N].serverPort        | 로드밸런서RULE리스트.N.서버포트     | Integer | Min : 1,<br/>Max : 65534 | Yes         |
| loadBalancerRuleList[N].l7HealthCheckPath | 로드밸런서RULE리스트.N.핼스체크경로   | String  | Min : 1,<br/>Max : 600   | Conditional |
| loadBalancerRuleList[N].certificateName   | 로드밸런서RULE리스트.N.공인인증서    | String  | Min : 1,<br/>Max : 300   | Conditional |
| regionNo                                 | 리전번호                    | String  |                          | No          |

- loadBalancerName
  - 생성할 로드밸런서 명
  - default : Ncloud에서 알아서 배정
- loadBalancerAlgorithmTypeCode
  - 로드밸런서 알고리즘구분코드
  - 입력가능한 알고리즘은 다음과 같습니다. [ROUND ROBIN (RR) | LEAST_CONNECTION (LC)]
  - default : ROUND ROBIN (RR)
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
  - default : PUBLC(Public)
- networkUsageTypeCode
  - 네트워크용도구분코드
  - PBLIP(Public), PRVT(Private)
  - default : PBLIP(Public)
- loadBalancerDescription
  - 생성 시 입력할 로드밸런서 설명
- serverInstanceNoList
  - 로드밸런서에 bind할 서버인스턴스번호리스트
  - getLoadBalancancerTargetServerInstanceList 액션을 통해서 서버인스턴스번호를 조회할 수 있습니다.
- loadBalancerRuleList
    - protocolTypeCode
        - 로드밸런서 생성 시 로드밸런서RULE을 입력해야 합니다.
        - 로드밸런서RULE의 프로토콜구분코드 다음코드가 입력될 수 있습니다. [HTTP | TCP]
    - loadBalancerPort
        - 로드밸런서 생성 시 로드밸런서RULE을 입력해야 합니다.
        - 로드밸런서RULE의 로드밸런서포트
    - serverPort
        - 로드밸런서 생성 시 로드밸런서RULE을 입력해야 합니다.
        - 로드밸런서RULE의 서버포트
    - l7HealthCheckPath
        - 로드밸런서 생성 시 로드밸런서RULE을 입력해야 합니다.
        - 로드밸런서RULE의 헬스체크경로
        - protocolTypeCode 값이 HTTP/HTTPS인 경우에는 필수 항목입니다.
    - certificateName
        - 로드밸런서 생성 시 로드밸런서 RULE을 입력해야 합니다.
        - 로드밸런서 SSL 공인인증서
        - protocloTypeCode 값이 SSL/HTTPS인 경우에는 필수 항목입니다.
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.

- Example
```javascript
const client = ncloud.createClient({
    accessKey,
    secretKey,
    regionNo: "1",
});

const loadBalancer = client.IaaS.loadBalancer();
const createLoadBalancerInstanceResponse = await loadBalancer.createLoadBalancerInstance({
    loadBalancerName: 'my-lb',
    loadBalancerAlgorithmTypeCode: 'RR',
    serverInstanceNoList: ['979326', '979323'],
    loadBalancerRuleList: [
        {
            protocolTypeCode: 'TCP',
            loadBalancerPort: '13306',
            serverPort: '3306',
        }
    ]
});

/** Result **/
{ 
    requestId: '81903e3a-76f9-4a38-9e01-18814c4bdb73',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    loadBalancerInstanceList: 
    [ { loadBalancerInstanceNo: '1030002',
        virtualIp: '49.236.150.63,49.236.150.98',
        loadBalancerName: 'my-lb',
        loadBalancerAlgorithmType: [Object],
        loadBalancerDescription: '',
        createDate: '2018-10-29T00:24:11+0900',
        domainName: 'slb-1030002.ncloudslb.com',
        internetLineType: [Object],
        loadBalancerInstanceStatusName: 'creating',
        loadBalancerInstanceStatus: [Object],
        loadBalancerInstanceOperation: [Object],
        networkUsageType: [Object],
        isHttpKeepAlive: false,
        connectionTimeout: 60,
        certificateName: '',
        loadBalancerRuleList: [Array],
        loadBalancedServerInstanceList: [Array] } ] 
}
```

#### changeLoadBalancerInstanceConfiguration

- API명

  로드밸런서인스턴스설정변경

- action

  changeLoadBalancerInstanceConfiguration

- 설명
  - 로드밸런서인스턴스의 설정값을 변경합니다.
- 요청 파라미터

| 파라미터명                                    | 간략 설명                   | 타입      | 제약                  | 필수여부        |
| ---------------------------------------- | ----------------------- | ------- | ------------------- | ----------- |
| loadBalancerInstanceNo                   | 로드밸런서인스턴스번호             | String  |                     | Yes         |
| loadBalancerAlgorithmTypeCode            | 로드밸런서알고리즘구분코드           | String  | Min : 1,Max : 5     | Yes         |
| loadBalancerDescription                  | 로드밸런서설명                 | String  | Min : 1,Max : 1000  | No          |
| loadBalancerRuleList[N].protocolTypeCode  | 로드밸런서RULE리스트.N.프로토콜구분코드 | String  | Min : 1,Max : 5     | Yes         |
| loadBalancerRuleList[N].loadBalancerPort  | 로드밸런서RULE리스트.N.로드밸런서포트  | Integer | Min : 1,Max : 65534 | Yes         |
| loadBalancerRuleList[N].serverPort        | 로드밸런서RULE리스트.N.서버포트     | Integer | Min : 1,Max : 65534 | Yes         |
| loadBalancerRuleList[N].l7HealthCheckPath | 로드밸런서RULE리스트.N.핼스체크경로   | String  | Min : 1,Max : 600   | Conditional |
| loadBalancerRuleList[N].certificateName   | 로드밸런서RULE리스트.N.인증서명     | String  | Min : 1,Max : 300   | Conditional |

- loadBalancerInstanceNo
  - 설정을 변경할 로드밸런서인스턴스번호
  - getLoadBalacerInstanceList 액션을 통해서 인스턴스번호를 알 수 있습니다.
- loadBalancerAlgorithmTypeCode
  - 로드밸런서 알고리즘구분코드
  - 입력가능한 알고리즘은 다음과 같습니다.
  - ROUND ROBIN (RR), LEAST_CONNECTION (LC)
- loadBalancerDescription
  - 수정할 로드밸런서 설명
- loadBalancerRuleList
    - protocolTypeCode
        - 로드밸런서RULE의 프로토콜구분코드
        - 아래의 코드가 입력될 수 있습니다.
        - HTTP | TCP
    - loadBalancerPort
        - 로드밸런서RULE의 로드밸런서포트
    - serverPort
        - 로드밸런서RULE의 서버포트
    - l7HealthCheckPath
        - 로드밸런서RULE의 헬스체크경로
        - protocolTypeCode 값이 HTTP인 경우에는 필수 항목입니다.
    - certificateName
        - 로드밸런서 생성 시 로드밸런서 RULE을 입력해야 합니다.
        - 로드밸런서 SSL 공인인증서
        - protocloTypeCode 값이 SSL/HTTPS인 경우에는 필수 항목입니다.

- Example
```javascript
const client = ncloud.createClient({
    accessKey,
    secretKey,
    regionNo: '1',
});

const loadBalancer = client.IaaS.loadBalancer();
const changeLoadBalancerInstanceConfigurationResponse = await loadBalancer.changeLoadBalancerInstanceConfiguration({
    loadBalancerInstanceNo: '1030011',
    loadBalancerAlgorithmTypeCode: 'RR',
    loadBalancerRuleList: [
        {
            protocolTypeCode: 'TCP',
            loadBalancerPort: '23306',
            serverPort: '3306',
        }
    ]
});

/** Result **/
{ 
    requestId: '7c01a76b-eacd-48d9-b33f-bc8720ffffb5',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    loadBalancerInstanceList: 
    [ { loadBalancerInstanceNo: '1030011',
        virtualIp: '49.236.151.168,49.236.150.50',
        loadBalancerName: 'my-lb',
        loadBalancerAlgorithmType: [Object],
        loadBalancerDescription: '',
        createDate: '2018-10-29T00:30:38+0900',
        domainName: 'slb-1030011.ncloudslb.com',
        internetLineType: [Object],
        loadBalancerInstanceStatusName: 'changing',
        loadBalancerInstanceStatus: [Object],
        loadBalancerInstanceOperation: [Object],
        networkUsageType: [Object],
        isHttpKeepAlive: false,
        connectionTimeout: 60,
        certificateName: '',
        loadBalancerRuleList: [Array],
        loadBalancedServerInstanceList: [Array] } ]
}
```

#### getLoadBalancedServerInstanceList

- API명

  로드밸런서Bind된서버인스턴스리스트조회

- action

  getLoadBalancedServerInstanceList

- 설명

  로드밸런서에 바인드된 서버인스턴스 리스트를 조회합니다.

- 요청 파라미터

| 파라미터명                  | 간략 설명       | 타입    | 필수여부 |
| ---------------------- | ----------- | ------ | ---- |
| loadBalancerInstanceNo | 로드밸런서인스턴스번호 | String |   Yes  |

- loadBalancerInstanceNo
  - 바인드 대상이 되는 로드밸런서 인스턴스 번호
  - getLoadBalancerInstanceList 액션을 통해 인스턴스 번호를 알 수 있습니다.

- Example
```javascript
const loadBalancer = client.IaaS.loadBalancer();
const getLoadBalancedServerInstanceListResponse = await loadBalancer.getLoadBalancedServerInstanceList({
    loadBalancerInstanceNo: '1030011',
});

/** Return **/
{ 
    requestId: '38e1be7d-c5b4-4d60-9261-94f85cf1424b',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    serverInstanceList: 
    [ { serverInstanceNo: '979326',
        serverName: 'akube-worker',
        serverDescription: '',
        cpuCount: 2,
        memorySize: 4294967296,
        baseBlockStorageSize: 53687091200,
        platformType: [Object],
        loginKeyName: 'mykey',
        isFeeChargingMonitoring: false,
        publicIp: '',
        privateIp: '10.41.5.6',
        serverImageName: 'centos-7.3-64',
        serverInstanceStatus: [Object],
        serverInstanceOperation: [Object],
        serverInstanceStatusName: 'running',
        createDate: '2018-09-30T13:41:32+0900',
        uptime: '2018-09-30T13:44:28+0900',
        serverImageProductCode: 'SPSW0LINUX000046',
        serverProductCode: 'SPSVRSSD00000003',
        isProtectServerTermination: false,
        portForwardingPublicIp: '106.10.57.132',
        zone: [Object],
        region: [Object],
        baseBlockStorageDiskType: [Object],
        baseBlockStorageDiskDetailType: [Object],
        internetLineType: [Object],
        serverInstanceType: [Object],
        userData: '',
        accessControlGroupList: [Array],
        instanceTagList: [] },
    ]
}
```

#### changeLoadBalancedServerInstances

- API명

  로드밸런서에Bind된서버인스턴스변경(설정을 모두 삭제하고, 추가하는개념, connection일시적으로 끊길수 있음)

- action

  changeLoadBalancedServerInstances

- 설명
  - 로드밸런서에 바인드된 서버인스턴스를 변경합니다.
  - 기존 바인드된 정보를 무시하고, 새로 바인드하는 기능입니다. 바인드/UN바인드할 서버인스턴스가 많을 경우 사용합니다.
- 요청 파라미터

| 파라미터명                  | 간략 설명       | 타입     | 제약   | 필수여부 |
| ---------------------- | ----------- | ------ | ---- | ---- |
| loadBalancerInstanceNo | 로드밸런서인스턴스번호 | String |      | Yes  |
| serverInstanceNoList | 서버인스턴스번호리스트 | List<String> | 중복불가 | Yes  |

- loadBalancerInstanceNo
  - 변경할 로드밸런서인스턴스 번호
- serverInstanceNoList.N
  - 로드밸런서에 바인드할 서버인스턴스번호리스트

- Example
```javascript
const client = ncloud.createClient({
    accessKey,
    secretKey,
    regionNo: "1",
});

const loadBalancer = client.IaaS.loadBalancer();
const getLoadBalancedServerInstanceListResponse = await loadBalancer.changeLoadBalancedServerInstances({
    loadBalancerInstanceNo: '1030011',
    serverInstanceNoList: ['979072'],
});

/** Return **/
{ 
    requestId: 'cd01fe5a-f488-4a28-ab81-3d51ad3ce3e4',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    loadBalancerInstanceList: 
    [ { loadBalancerInstanceNo: '1030011',
        virtualIp: '49.236.151.168,49.236.150.50',
        loadBalancerName: 'my-lb',
        loadBalancerAlgorithmType: [Object],
        loadBalancerDescription: '',
        createDate: '2018-10-29T00:30:38+0900',
        domainName: 'slb-1030011.ncloudslb.com',
        internetLineType: [Object],
        loadBalancerInstanceStatusName: 'used',
        loadBalancerInstanceStatus: [Object],
        loadBalancerInstanceOperation: [Object],
        networkUsageType: [Object],
        isHttpKeepAlive: false,
        connectionTimeout: 60,
        certificateName: '',
        loadBalancerRuleList: [Array],
        loadBalancedServerInstanceList: [Array] } ] 
}


```

#### deleteLoadBalancerInstances

- API명

  로드밸런서인스턴스삭제

- action

  deleteLoadBalancerInstances

- 설명
  - 로드밸런서 인스턴스를 삭제합니다.
- 요청 파라미터

| 파라미터명                        | 간략 설명          | 타입     | 제약   | 필수여부 |
| ---------------------------- | -------------- | ------ | ---- | ---- |
| loadBalancerInstanceNoList.N | 로드밸런서인스턴스번호리스트 | String | 중복불가 | Yes  |

- loadBalancerInstanceNoList.N
  - 삭제할 로드밸런서 인스턴스번호리스트
  - getLoadBalancerInstanceList 액션을 통해서 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${LOADBALANCER_API_URL}/deleteLoadBalancerInstances
    ?loadBalancerInstanceNoList.1=68017
    ```

  - 응답

    ```xml
    <deleteLoadBalancerInstancesResponse>
    	<requestId>e191af19-2504-4688-b0fa-9fd8e2bdd4e8</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<loadBalancerInstanceList>
    		<loadBalancerInstance>
    			<loadBalancerInstanceNo>68017</loadBalancerInstanceNo>
    			<virtualIp />
    			<loadBalancerName>loadb-7f87189e14fa43f</loadBalancerName>
    			<loadBalancerAlgorithmType>
    				<code>RR</code>
    				<codeName>Round Robin</codeName>
    			</loadBalancerAlgorithmType>
    			<loadBalancerDescription />
    			<createDate>2014-02-18T21:03:26+0900</createDate>
    			<domainName>slb-68017.sl2.ncloud.com</domainName>
    			<internetLineType>
    				<code>PUBLC</code>
    				<codeName>Public</codeName>
    			</internetLineType>
    			<loadBalancerInstanceStatusName>terminating</loadBalancerInstanceStatusName>
    			<loadBalancerInstanceStatus>
    				<code>USED</code>
    				<codeName>NET USED state</codeName>
    			</loadBalancerInstanceStatus>
    			<loadBalancerInstanceOperation>
    				<code>TERMT</code>
    				<codeName>NET TERMINATED OP</codeName>
    			</loadBalancerInstanceOperation>
    			<networkUsageType>
    				<code>PBLIP</code>
    				<codeName>Public</codeName>
    			</networkUsageType>
    			<loadBalancerRuleList>
    				<loadBalancerRule>
    					<protocolType>
    						<code>HTTP</code>
    						<codeName>http</codeName>
    					</protocolType>
    					<loadBalancerPort>88</loadBalancerPort>
    					<serverPort>88</serverPort>
    					<l7HealthCheckPath>/l7check.html</l7HealthCheckPath>
    					<certificateName />
    				</loadBalancerRule>
    			</loadBalancerRuleList>
    			<loadBalancedServerInstanceList>
    				<loadBalancedServerInstance>
    					<serverInstance>
    						<serverInstanceNo>67953</serverInstanceNo>
    						<serverName>myserver</serverName>
    						<serverDescription />
    						<cpuCount>2</cpuCount>
    						<memorySize>4294967296</memorySize>
    						<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    						<platformType>
    							<code>LNX32</code>
    							<codeName>Linux 32 Bit</codeName>
    						</platformType>
    						<loginKeyName>hkey-0217</loginKeyName>
    						<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    						<publicIp />
    						<privateIp>10.101.5.105</privateIp>
    						<serverImageName>centos-6.3-32</serverImageName>
    						<serverInstanceStatus>
    							<code>NSTOP</code>
    							<codeName>Server normal stopped state</codeName>
    						</serverInstanceStatus>
    						<serverInstanceOperation>
    							<code>NULL</code>
    							<codeName>Server NULL OP</codeName>
    						</serverInstanceOperation>
    						<serverInstanceStatusName>stopped</serverInstanceStatusName>
    						<createDate>2014-02-17T18:04:49+0900</createDate>
    						<uptime>2014-02-18T14:58:26+0900</uptime>
    						<serverImageProductCode>SPSW0LINUX000032</serverImageProductCode>
    						<serverProductCode>SPSVRSTAND000043</serverProductCode>
    						<isProtectServerTermination>false</isProtectServerTermination>
    						<portForwardingPublicIp />
    						<zone>
    							<zoneNo>3</zoneNo>
    							<zoneName>zone3</zoneName>
    							<zoneDescription>nang zone2</zoneDescription>
    						</zone>
    						<baseBlockStorageDiskType>
    							<code>LOCAL</code>
    							<codeName>Local storage</codeName>
    						</baseBlockStorageDiskType>
    						<internetLineType>
    							<code>PUBLC</code>
    							<codeName>Public</codeName>
    						</internetLineType>
    						<userData />
    						<accessControlGroupList>
    							<accessControlGroup>
    								<accessControlGroupConfigurationNo>1038</accessControlGroupConfigurationNo>
    								<accessControlGroupName>ncloud-default-acg</accessControlGroupName>
    								<accessControlGroupDescription>Default AccessControlGroup</accessControlGroupDescription>
    								<isDefault>true</isDefault>
    								<createDate>2013-12-03T10:37:39+0900</createDate>
    							</accessControlGroup>
    						</accessControlGroupList>
    					</serverInstance>
    					<serverHealthCheckStatusList>
    						<serverHealthCheckStatus>
    							<serverPort>88</serverPort>
    							<serverStatus>false</serverStatus>
    						</serverHealthCheckStatus>
    					</serverHealthCheckStatusList>
    				</loadBalancedServerInstance>
    			</loadBalancedServerInstanceList>
    		</loadBalancerInstance>
    	</loadBalancerInstanceList>
    </deleteLoadBalancerInstancesResponse>
    ```

#### getLoadBalancerSslCertificateList

- API명

  로드밸런서SSL인증서조회

- action

  getLoadBalancerSslCertificateList

- 설명

  로드밸런서에서 사용하는 SSL 인증서를 조회합니다.

- 요청 파라미터

| 파라미터명           | 간략 설명    | 타입     | 제약   | 필수여부 |
| --------------- | -------- | ------ | ---- | ---- |
| certificateName | SSL 인증서명 | String | 중복불가 | No   |

- certificateName
  - 조회 대상 로드밸런서 인증서명
  - certificateName이 없는 경우 본인 소유의 전체 sslCertificateList를 조회합니다.

- Example

  - 요청

    ```
    ${LOADBALANCER_API_URL}/getLoadBalancerSslCertificateList
    ?certificateName=my-s니
    ```

    *응답

    ```xml
    <getLoadBalancerSslCertificateListResponse>
    <requestId>e191af19-2504-4688-b0fa-9fd8e2bdd4e8</requestId>
    <returnCode>0</returnCode>
    <returnMessage>success</returnMessage>
    <totalRows>1</totalRows>
    <sslCertificateList>
    <sslCertificate>
    <certificateName>my-ssl</certificateName>
    <privateKey> -----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDVCm3rCfYeQDQW1yzWIofJtRc3wD6fft4Vm/EhFAFg77tPzCUr
    GwMEAdJ0a6mM8bTJdNAsLgS2ArqcNhwDwt/o7Vwo6Jo8faYDJzz6CFyBMXr2IRfq
    irT3ffoCq+3tL9rwQ9llP5+L+Po/k1BfaJd5Z+mTn8UG5T8Npaj4UQOYuwIDAQAB
    AoGBAIxATnbC2xW1PNWgmPLsTqq7HmrklBWahwiA3jDho7q2eIEjK4ECSmzz6iIc
    0sVoRpWt4nKDZTSR/VpjwPO08oSIywUFyh+ExL5YZ/TmMKiIurOWnQujUZTLah3y
    rfeFrCAkMLKhLMT3oreKCooIw4LEy5zDQ4PlqAX5T4icBp45AkEA+NM1GVM4N12w
    QpkWYsT3tplF5V72A81l+QUhkol/fajk/kyqcVZqE401sosab62qoHaJqIa1rb9y
    VsHYlqO5xQJBANsvETMHu/tONYoQVu75UookH6sJZ98lXvLGIJOm9BdvQscK/sfP
    VD7MQg7BLMSSIyzTmNnFKp/Z3nSW2zX3sH8CQQCECcf+lVuafbvfy07GwNDWc8VU
    byzLXb6EA0YKda5Sp0JE87fqhrmpgGCDSy+PHbASkHSCGmHkPlhVU240mdMlAkBo
    JUEi4jXr/wlphMIJ4uXZRbjWaC221eb7rDCmd9nbmL4+HXdaMaVyAVQR9q/y5w1X
    q2MhdpH+SmNtOpEGX565AkAw0iyekCbB/4QES2D49uy6glJ/0+8PGK4yT76yBBmS
    QZGpOT95XbJhHWLo+S6VT6kyeBLd4cgityGrsMRFZkA1
    -----END RSA PRIVATE KEY----- </ privateKey >
    <publicKeyCertificate> -----BEGIN CERTIFICATE-----
    MIICazCCAdQCCQDqqtCSgqvb9TANBgkqhkiG9w0BAQUFADB6MQswCQYDVQQGEwJL
    UjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEMMAoGA1UEChMDTkJQ
    MQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkqhkiG9w0BCQEWEGZh
    c3QwMkBuYXZlci5jb20wHhcNMTQwMzE4MDU0NTQxWhcNMTUwMzE4MDU0NTQxWjB6
    MQswCQYDVQQGEwJLUjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEM
    MAoGA1UEChMDTkJQMQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkq
    hkiG9w0BCQEWEGZhc3QwMkBuYXZlci5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0A
    MIGJAoGBANUKbesJ9h5ANBbXLNYih8m1FzfAPp9+3hWb8SEUAWDvu0/MJSsbAwQB
    0nRrqYzxtMl00CwuBLYCupw2HAPC3+jtXCjomjx9pgMnPPoIXIExevYhF+qKtPd9
    +gKr7e0v2vBD2WU/n4v4+j+TUF9ol3ln6ZOfxQblPw2lqPhRA5i7AgMBAAEwDQYJ
    KoZIhvcNAQEFBQADgYEAhbcSYDrEnBKuEepa35FQBlLMTVA+2RocfRZPdXV0s3i5
    5iwH/6S23Gy/nKkEXJSGhUst5HjgRJqhvHyfM2uXY8zeq0oVhGu0C3iaE49Q0Vdp
    i1pMe+14UFKW8iohI8ZU2eUL5tm0VdNtV8JPF/sagh4LLyPzrf65PwOIbtSttcY=
    -----END CERTIFICATE----- </publicKeyCertificate><certificateChain></ certificateChain>
    </sslCertificate>
    </sslCertificateList>
    </getLoadBalancerSslCertificateListResponse>
    ```

#### addLoadBalancerSslCertificate

- API명

  로드밸런서SSL인증서추가

- action

  addLoadBalancerSslCertificate

- 설명

  로드밸런서에서 사용하는 SSL 인증서를 추가합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명   | 타입     | 제약   | 필수여부     |
| -------------------- | ------- | ------ | ---- | -------- |
| certificateName      | 인증서명    | String | 중복불가 | Yes      |
| privateKey           | 비밀키     | String | 중복불가 | Yes      |
| publicKeyCertificate | 공개키인증서  | String | 중복불가 | Yes      |
| certificateChain     | chainca | String | 중복불가 | Optional |

- certificateName
  - 추가할 인증서명
- privateKey
  - 인증서 비밀키
- publicKeyCertificate
  - 공개키인증서
- certificateChain
  - chainca 인증서 (인증서 발급시 chainca를 같이 발급받은 경우 필수)

- Example

  - 요청

    ```
    ${LOADBALANCER_API_URL}/addLoadBalancerSslCertificate
    ?certificateName=my-ssl-2
    &privateKey=-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDVCm3rCfYeQDQW1yzWIofJtRc3wD6fft4Vm/EhFAFg77tPzCUr
    GwMEAdJ0a6mM8bTJdNAsLgS2ArqcNhwDwt/o7Vwo6Jo8faYDJzz6CFyBMXr2IRfq
    irT3ffoCq+3tL9rwQ9llP5+L+Po/k1BfaJd5Z+mTn8UG5T8Npaj4UQOYuwIDAQAB
    AoGBAIxATnbC2xW1PNWgmPLsTqq7HmrklBWahwiA3jDho7q2eIEjK4ECSmzz6iIc
    0sVoRpWt4nKDZTSR/VpjwPO08oSIywUFyh+ExL5YZ/TmMKiIurOWnQujUZTLah3y
    rfeFrCAkMLKhLMT3oreKCooIw4LEy5zDQ4PlqAX5T4icBp45AkEA+NM1GVM4N12w
    QpkWYsT3tplF5V72A81l+QUhkol/fajk/kyqcVZqE401sosab62qoHaJqIa1rb9y
    VsHYlqO5xQJBANsvETMHu/tONYoQVu75UookH6sJZ98lXvLGIJOm9BdvQscK/sfP
    VD7MQg7BLMSSIyzTmNnFKp/Z3nSW2zX3sH8CQQCECcf+lVuafbvfy07GwNDWc8VU
    byzLXb6EA0YKda5Sp0JE87fqhrmpgGCDSy+PHbASkHSCGmHkPlhVU240mdMlAkBo
    JUEi4jXr/wlphMIJ4uXZRbjWaC221eb7rDCmd9nbmL4+HXdaMaVyAVQR9q/y5w1X
    q2MhdpH+SmNtOpEGX565AkAw0iyekCbB/4QES2D49uy6glJ/0+8PGK4yT76yBBmS
    QZGpOT95XbJhHWLo+S6VT6kyeBLd4cgityGrsMRFZkA1
    -----END RSA PRIVATE KEY-----
    &publicKeyCertificate=-----BEGIN CERTIFICATE-----
    MIICazCCAdQCCQDqqtCSgqvb9TANBgkqhkiG9w0BAQUFADB6MQswCQYDVQQGEwJL
    UjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEMMAoGA1UEChMDTkJQ
    MQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkqhkiG9w0BCQEWEGZh
    c3QwMkBuYXZlci5jb20wHhcNMTQwMzE4MDU0NTQxWhcNMTUwMzE4MDU0NTQxWjB6
    MQswCQYDVQQGEwJLUjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEM
    MAoGA1UEChMDTkJQMQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkq
    hkiG9w0BCQEWEGZhc3QwMkBuYXZlci5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0A
    MIGJAoGBANUKbesJ9h5ANBbXLNYih8m1FzfAPp9+3hWb8SEUAWDvu0/MJSsbAwQB
    0nRrqYzxtMl00CwuBLYCupw2HAPC3+jtXCjomjx9pgMnPPoIXIExevYhF+qKtPd9
    +gKr7e0v2vBD2WU/n4v4+j+TUF9ol3ln6ZOfxQblPw2lqPhRA5i7AgMBAAEwDQYJ
    KoZIhvcNAQEFBQADgYEAhbcSYDrEnBKuEepa35FQBlLMTVA+2RocfRZPdXV0s3i5
    5iwH/6S23Gy/nKkEXJSGhUst5HjgRJqhvHyfM2uXY8zeq0oVhGu0C3iaE49Q0Vdp
    i1pMe+14UFKW8iohI8ZU2eUL5tm0VdNtV8JPF/sagh4LLyPzrf65PwOIbtSttcY=
    -----END CERTIFICATE-----
    &certificateChain=
    ```

  - 응답

    ```xml
    <addLoadBalancerSslCertificateResponse>
    <requestId>e191af19-2504-4688-b0fa-9fd8e2bdd4e8</requestId>
    <returnCode>0</returnCode>
    <returnMessage>success</returnMessage>
    <totalRows>2</totalRows>
    <sslCertificateList>
    <sslCertificate>
    <certificateName>my-ssl</certificateName>
    <privateKey> -----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDVCm3rCfYeQDQW1yzWIofJtRc3wD6fft4Vm/EhFAFg77tPzCUr
    GwMEAdJ0a6mM8bTJdNAsLgS2ArqcNhwDwt/o7Vwo6Jo8faYDJzz6CFyBMXr2IRfq
    irT3ffoCq+3tL9rwQ9llP5+L+Po/k1BfaJd5Z+mTn8UG5T8Npaj4UQOYuwIDAQAB
    AoGBAIxATnbC2xW1PNWgmPLsTqq7HmrklBWahwiA3jDho7q2eIEjK4ECSmzz6iIc
    0sVoRpWt4nKDZTSR/VpjwPO08oSIywUFyh+ExL5YZ/TmMKiIurOWnQujUZTLah3y
    rfeFrCAkMLKhLMT3oreKCooIw4LEy5zDQ4PlqAX5T4icBp45AkEA+NM1GVM4N12w
    QpkWYsT3tplF5V72A81l+QUhkol/fajk/kyqcVZqE401sosab62qoHaJqIa1rb9y
    VsHYlqO5xQJBANsvETMHu/tONYoQVu75UookH6sJZ98lXvLGIJOm9BdvQscK/sfP
    VD7MQg7BLMSSIyzTmNnFKp/Z3nSW2zX3sH8CQQCECcf+lVuafbvfy07GwNDWc8VU
    byzLXb6EA0YKda5Sp0JE87fqhrmpgGCDSy+PHbASkHSCGmHkPlhVU240mdMlAkBo
    JUEi4jXr/wlphMIJ4uXZRbjWaC221eb7rDCmd9nbmL4+HXdaMaVyAVQR9q/y5w1X
    q2MhdpH+SmNtOpEGX565AkAw0iyekCbB/4QES2D49uy6glJ/0+8PGK4yT76yBBmS
    QZGpOT95XbJhHWLo+S6VT6kyeBLd4cgityGrsMRFZkA1
    -----END RSA PRIVATE KEY----- </ privateKey >
    <publicKeyCertificate> -----BEGIN CERTIFICATE-----
    MIICazCCAdQCCQDqqtCSgqvb9TANBgkqhkiG9w0BAQUFADB6MQswCQYDVQQGEwJL
    UjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEMMAoGA1UEChMDTkJQ
    MQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkqhkiG9w0BCQEWEGZh
    c3QwMkBuYXZlci5jb20wHhcNMTQwMzE4MDU0NTQxWhcNMTUwMzE4MDU0NTQxWjB6
    MQswCQYDVQQGEwJLUjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEM
    MAoGA1UEChMDTkJQMQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkq
    hkiG9w0BCQEWEGZhc3QwMkBuYXZlci5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0A
    MIGJAoGBANUKbesJ9h5ANBbXLNYih8m1FzfAPp9+3hWb8SEUAWDvu0/MJSsbAwQB
    0nRrqYzxtMl00CwuBLYCupw2HAPC3+jtXCjomjx9pgMnPPoIXIExevYhF+qKtPd9
    +gKr7e0v2vBD2WU/n4v4+j+TUF9ol3ln6ZOfxQblPw2lqPhRA5i7AgMBAAEwDQYJ
    KoZIhvcNAQEFBQADgYEAhbcSYDrEnBKuEepa35FQBlLMTVA+2RocfRZPdXV0s3i5
    5iwH/6S23Gy/nKkEXJSGhUst5HjgRJqhvHyfM2uXY8zeq0oVhGu0C3iaE49Q0Vdp
    i1pMe+14UFKW8iohI8ZU2eUL5tm0VdNtV8JPF/sagh4LLyPzrf65PwOIbtSttcY=
    -----END CERTIFICATE----- </publicKeyCertificate>
    </sslCertificate>
    <sslCertificate>
    <certificateName>my-ssl-2</certificateName>
    <privateKey> -----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDVCm3rCfYeQDQW1yzWIofJtRc3wD6fft4Vm/EhFAFg77tPzCUr
    GwMEAdJ0a6mM8bTJdNAsLgS2ArqcNhwDwt/o7Vwo6Jo8faYDJzz6CFyBMXr2IRfq
    irT3ffoCq+3tL9rwQ9llP5+L+Po/k1BfaJd5Z+mTn8UG5T8Npaj4UQOYuwIDAQAB
    AoGBAIxATnbC2xW1PNWgmPLsTqq7HmrklBWahwiA3jDho7q2eIEjK4ECSmzz6iIc
    0sVoRpWt4nKDZTSR/VpjwPO08oSIywUFyh+ExL5YZ/TmMKiIurOWnQujUZTLah3y
    rfeFrCAkMLKhLMT3oreKCooIw4LEy5zDQ4PlqAX5T4icBp45AkEA+NM1GVM4N12w
    QpkWYsT3tplF5V72A81l+QUhkol/fajk/kyqcVZqE401sosab62qoHaJqIa1rb9y
    VsHYlqO5xQJBANsvETMHu/tONYoQVu75UookH6sJZ98lXvLGIJOm9BdvQscK/sfP
    VD7MQg7BLMSSIyzTmNnFKp/Z3nSW2zX3sH8CQQCECcf+lVuafbvfy07GwNDWc8VU
    byzLXb6EA0YKda5Sp0JE87fqhrmpgGCDSy+PHbASkHSCGmHkPlhVU240mdMlAkBo
    JUEi4jXr/wlphMIJ4uXZRbjWaC221eb7rDCmd9nbmL4+HXdaMaVyAVQR9q/y5w1X
    q2MhdpH+SmNtOpEGX565AkAw0iyekCbB/4QES2D49uy6glJ/0+8PGK4yT76yBBmS
    QZGpOT95XbJhHWLo+S6VT6kyeBLd4cgityGrsMRFZkA1
    -----END RSA PRIVATE KEY----- </ privateKey >
    <publicKeyCertificate> -----BEGIN CERTIFICATE-----
    MIICazCCAdQCCQDqqtCSgqvb9TANBgkqhkiG9w0BAQUFADB6MQswCQYDVQQGEwJL
    UjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEMMAoGA1UEChMDTkJQ
    MQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkqhkiG9w0BCQEWEGZh
    c3QwMkBuYXZlci5jb20wHhcNMTQwMzE4MDU0NTQxWhcNMTUwMzE4MDU0NTQxWjB6
    MQswCQYDVQQGEwJLUjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEM
    MAoGA1UEChMDTkJQMQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkq
    hkiG9w0BCQEWEGZhc3QwMkBuYXZlci5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0A
    MIGJAoGBANUKbesJ9h5ANBbXLNYih8m1FzfAPp9+3hWb8SEUAWDvu0/MJSsbAwQB
    0nRrqYzxtMl00CwuBLYCupw2HAPC3+jtXCjomjx9pgMnPPoIXIExevYhF+qKtPd9
    +gKr7e0v2vBD2WU/n4v4+j+TUF9ol3ln6ZOfxQblPw2lqPhRA5i7AgMBAAEwDQYJ
    KoZIhvcNAQEFBQADgYEAhbcSYDrEnBKuEepa35FQBlLMTVA+2RocfRZPdXV0s3i5
    5iwH/6S23Gy/nKkEXJSGhUst5HjgRJqhvHyfM2uXY8zeq0oVhGu0C3iaE49Q0Vdp
    i1pMe+14UFKW8iohI8ZU2eUL5tm0VdNtV8JPF/sagh4LLyPzrf65PwOIbtSttcY=
    -----END CERTIFICATE----- </publicKeyCertificate><certificateChain></ certificateChain>
    </sslCertificate>
    </sslCertificateList>
    </addLoadBalancerSslCertificateResponse>
    ```

#### deleteLoadBalancerSslCertificate

- API명

  로드밸런서SSL인증서삭제

- action

  deleteLoadBalancerSslCertificate

- 설명

  로드밸런서에서 사용하는 SSL 인증서를 삭제합니다.

- 요청 파라미터

| 파라미터명           | 간략 설명 | 타입     | 제약   | 필수여부 |
| --------------- | ----- | ------ | ---- | ---- |
| certificateName | 인증서명  | String | 중복불가 | Yes  |

- certificateName
  - 삭제 대상 인증서명
  - getLoadBalanceSslCertificateList 액션을 통해서 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${LOADBALANCER_API_URL}/deleteLoadBalancerSslCertificate
    ?certificateName=my-ssl-2
    ```

  - 응답

    ```xml
    <getLoadBalancerSslCertificateListResponse>
    <requestId>e191af19-2504-4688-b0fa-9fd8e2bdd4e8</requestId>
    <returnCode>0</returnCode>
    <returnMessage>success</returnMessage>
    <totalRows>1</totalRows>
    <sslCertificateList>
    <sslCertificate>
    <certificateName>my-ssl</certificateName>
    <privateKey> -----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDVCm3rCfYeQDQW1yzWIofJtRc3wD6fft4Vm/EhFAFg77tPzCUr
    GwMEAdJ0a6mM8bTJdNAsLgS2ArqcNhwDwt/o7Vwo6Jo8faYDJzz6CFyBMXr2IRfq
    irT3ffoCq+3tL9rwQ9llP5+L+Po/k1BfaJd5Z+mTn8UG5T8Npaj4UQOYuwIDAQAB
    AoGBAIxATnbC2xW1PNWgmPLsTqq7HmrklBWahwiA3jDho7q2eIEjK4ECSmzz6iIc
    0sVoRpWt4nKDZTSR/VpjwPO08oSIywUFyh+ExL5YZ/TmMKiIurOWnQujUZTLah3y
    rfeFrCAkMLKhLMT3oreKCooIw4LEy5zDQ4PlqAX5T4icBp45AkEA+NM1GVM4N12w
    QpkWYsT3tplF5V72A81l+QUhkol/fajk/kyqcVZqE401sosab62qoHaJqIa1rb9y
    VsHYlqO5xQJBANsvETMHu/tONYoQVu75UookH6sJZ98lXvLGIJOm9BdvQscK/sfP
    VD7MQg7BLMSSIyzTmNnFKp/Z3nSW2zX3sH8CQQCECcf+lVuafbvfy07GwNDWc8VU
    byzLXb6EA0YKda5Sp0JE87fqhrmpgGCDSy+PHbASkHSCGmHkPlhVU240mdMlAkBo
    JUEi4jXr/wlphMIJ4uXZRbjWaC221eb7rDCmd9nbmL4+HXdaMaVyAVQR9q/y5w1X
    q2MhdpH+SmNtOpEGX565AkAw0iyekCbB/4QES2D49uy6glJ/0+8PGK4yT76yBBmS
    QZGpOT95XbJhHWLo+S6VT6kyeBLd4cgityGrsMRFZkA1
    -----END RSA PRIVATE KEY----- </ privateKey >
    <publicKeyCertificate> -----BEGIN CERTIFICATE-----
    MIICazCCAdQCCQDqqtCSgqvb9TANBgkqhkiG9w0BAQUFADB6MQswCQYDVQQGEwJL
    UjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEMMAoGA1UEChMDTkJQ
    MQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkqhkiG9w0BCQEWEGZh
    c3QwMkBuYXZlci5jb20wHhcNMTQwMzE4MDU0NTQxWhcNMTUwMzE4MDU0NTQxWjB6
    MQswCQYDVQQGEwJLUjEPMA0GA1UECBMGZmFzdDAyMQ4wDAYDVQQHEwVTZW91bDEM
    MAoGA1UEChMDTkJQMQwwCgYDVQQLEwNSTkQxDTALBgNVBAMTBHRlc3QxHzAdBgkq
    hkiG9w0BCQEWEGZhc3QwMkBuYXZlci5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0A
    MIGJAoGBANUKbesJ9h5ANBbXLNYih8m1FzfAPp9+3hWb8SEUAWDvu0/MJSsbAwQB
    0nRrqYzxtMl00CwuBLYCupw2HAPC3+jtXCjomjx9pgMnPPoIXIExevYhF+qKtPd9
    +gKr7e0v2vBD2WU/n4v4+j+TUF9ol3ln6ZOfxQblPw2lqPhRA5i7AgMBAAEwDQYJ
    KoZIhvcNAQEFBQADgYEAhbcSYDrEnBKuEepa35FQBlLMTVA+2RocfRZPdXV0s3i5
    5iwH/6S23Gy/nKkEXJSGhUst5HjgRJqhvHyfM2uXY8zeq0oVhGu0C3iaE49Q0Vdp
    i1pMe+14UFKW8iohI8ZU2eUL5tm0VdNtV8JPF/sagh4LLyPzrf65PwOIbtSttcY=
    -----END CERTIFICATE----- </publicKeyCertificate><certificateChain></ certificateChain>
    </sslCertificate>
    </sslCertificateList>
    </getLoadBalancerSslCertificateListResponse>
    ```
