## IaaS > Server

본 문서는 IaaS 분류의 Server 메서드에 대해 다룹니다.

### 공통설정

ncloud Client를 생성 시, 아래와 같이 API 인증키가 필요합니다.

**ES5**
```javascript
var ncloud = require('ncloud');
var client = ncloud.createClient({
        accessKey: "$ACCESS_KEY_ID$",
        secretKey: "$SECRET_KEY$",
});
```
**ES6 or above**
```javascript
import * as ncloud from 'ncloud';

const client = ncloud.createClient({
     accessKey: "$ACCESS_KEY_ID$",
     secretKey: "$SECRET_KEY$",
});
```

### API References
  * [상품](#상품)
    * [서버이미지상품리스트조회](#getserverimageproductlist)
    * [서버상품리스트조회](#getserverproductlist)
    * [RAID리스트조회](#getraidlist)
  * [Zone](#zone)
    * [ZONE리스트조회](#getzonelist)
  * [Region](#region)
    * [REGION리스트조회](#getregionlist)
  * [NAS](#nas)
    * [NAS볼륨인스턴스생성](#createnasvolumeinstance)
    * [NAS볼륨인스턴스삭제](#deletenasvolumeinstance)
    * [NAS볼륨인스턴스리스트조회](#getnasvolumeinstancelist)
    * [NAS볼륨사이즈변경](#changenasvolumesize)
    * [NAS볼륨인스턴스측정리스트조회](#getnasvolumeinstanceratinglist)
    * [NAS볼륨인스턴스접근제어설정](#setnasvolumeaccesscontrol)
    * [NAS볼륨인스턴스접근제어추가](#addnasvolumeaccesscontrol)
    * [NAS볼륨인스턴스접근제어제거](#removenasvolumeaccesscontrol)
  * [로그인키](#로그인키)
    * [로그인키리스트조회](#getloginkeylist)
    * [로그인키생성](#createloginkey)
    * [로그인키삭제](#deleteloginkey)
    * [로그인키IMPORT](#importloginkey)
  * [AccessControlGroup](#accesscontrolgroup)
    * [접근제어그룹리스트조회](#getaccesscontrolgrouplist)
    * [접근제어그룹적용된서버인스턴스리스트조회](#getaccesscontrolgroupserverinstancelist)
    * [접근제어규칙리스트조회](#getaccesscontrolrulelist)
  * [서버](#서버)
    * [서버인스턴스리스트조회](#getserverinstancelist)
    * [서버인스턴스생성](#createserverinstances)
    * [서버인스턴스재생성](#recreateserverinstance)
    * [서버인스턴스반납](#terminateserverinstances)
    * [서버인스턴스스팩변경](#changeserverinstancespec)
    * [서버인스턴스재시작](#rebootserverinstances)
    * [서버인스턴스시작](#startserverinstances)
    * [서버인스턴스종료](#stopserverinstances)
    * [루트패스워드조회](#getrootpassword)
  * [회원서버이미지](#회원서버이미지)
    * [회원서버이미지리스트조회](#getmemberserverimagelist)
    * [회원서버이미지생성](#creatememberserverimage)
    * [회원서버이미지삭제](#deletememberserverimages)
  * [블록스토리지](#블록스토리지)
    * [블록스토리지인스턴스리스트조회](#getblockstorageinstancelist)
    * [블록스토리지인스턴스생성](#createblockstorageinstance)
    * [블록스토리지인스턴스삭제](#deleteblockstorageinstances)
    * [블록스토리지스냅샷인스턴스생성](#createblockstoragesnapshotinstance)
    * [블록스토리지스냅샷인스턴스삭제](#deleteblockstoragesnapshotinstances)
    * [블록스토리지스냅샷인스턴스리스트조회](#getblockstoragesnapshotinstancelist)
  * [공인IP](#공인ip)
    * [공인IP인스턴스리스트조회](#getpublicipinstancelist)
    * [공인IP할당(가능)서버인스턴스리스트조회](#getpubliciptargetserverinstancelist)
    * [공인IP인스턴스생성](#createpublicipinstance)
    * [공인IP를서버인스턴스에할당](#associatepublicipwithserverinstance)
    * [공인IP를서버인스턴스에할당해제](#disassociatepublicipfromserverinstance)
    * [공인IP인스턴스삭제](#deletepublicipinstances)
    * [공인IP를지정된서버로교체](#replaceserverinstanceassociatedwithpublicip)
  * [포트포워딩](#포트포워딩)
    * [포트포워딩Rule리스트조회](#getportforwardingrulelist)
    * [포트포워딩Rule추가](#addportforwardingrules)
    * [포트포워딩Rule삭제](#deleteportforwardingrules)
  * [태그](#태그)
    * [인스턴스태그생성](#createinstancetags)
    * [인스턴스태그삭제](#deleteinstancetags)
    * [인스턴스태그조회](#getinstancetaglist)
----

### 상품

기본적으로 네이버 클라우드 플랫폼은 상품BASE로 구매를 진행하게 됩니다. 따라서, 서버인스턴스(VM)를 생성하기 위해서는 서버이미지 상품, 서버 상품을 조회하여 해당 상품을 구매하여 서버인스턴스(VM)를 생성하게 됩니다.

#### getServerImageProductList

- API명

  서버이미지상품리스트조회

- action

  getServerImageProductList

- 설명

  서버인스턴스(VM)를 생성하기 위해서는 서버 이미지 상품을 선택하여 생성하여야 합니다.
  따라서 서버 이미지 상품을 조회할 수 있는 API를 제공합니다.

- 요청 파라미터

| 파라미터명                  | 간략 설명      | 타입     |  필수여부 |
| ---------------------- | ---------------| ------- |  ---- |
| platformTypeCodeList   | 플랫폼구분코드리스트 | List<String>  |  No   |
| regionNo               | 리전번호          | String  |     No   |
| infraResourceDetailTypeCode | 인프라자원상세구분코드 | String |    No   |

- platformTypeCodeList
    - 플랫폼구분에 필요한 값을 리스트형태로 전달합니다.
    - 아래의 값들이 입력될 수 있습니다.
    - 리눅스32Bit(LNX32) | 리눅스64Bit(LNX64) | 윈도우32Bit(WND32) | 윈도우64Bit(WND64) | 우분투데스크톱64Bit(UBD64) | 우분투서버64Bit(UBS64)
- infraResourceDetailTypeCode
  - 리스트에서 특정 유형의 이미지를 조회합니다. (현재는 BareMetal 만 조회가능)
  - BareMetal(BM) | Default : 기본서버이미지
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
  
- Example

```javascript
const server = client.IaaS.server();
const getServerImageProductListResponse = await server.getServerImageProductList({
    platformTypeCodeList: ['LNX64'],
    regionNo: '1'
});

/** Return **/
{ requestId: 'fe1df023-e872-4a1b-b9cc-edd04ca48e44',
    returnCode: '0',
    returnMessage: 'success',
    productList: 
    [ { productCode: 'SPSW0LINUX000046',
        productName: 'centos-7.3-64',
        productType: [Object],
        productDescription: 'CentOS 7.3 (64-bit)',
        infraResourceType: [Object],
        cpuCount: 0,
        memorySize: 0,
        baseBlockStorageSize: 53687091200,
        platformType: [Object],
        osInformation: 'CentOS 7.3 (64-bit)',
        dbKindCode: '',
        addBlockStorageSize: 0 },
        { productCode: 'SPSW0LINUX000045',
        productName: 'centos-7.2-64',
        productType: [Object],
        productDescription: 'CentOS 7.2(64bit)',
        infraResourceType: [Object],
        cpuCount: 0,
        memorySize: 0,
        baseBlockStorageSize: 53687091200,
        platformType: [Object],
        osInformation: 'CentOS 7.2 (64-bit)',
        dbKindCode: '',
        addBlockStorageSize: 0 },
    ]
}
```


#### getServerProductList

- API명

  서버상품리스트조회

- action

  getServerProductList

- 설명

  서버인스턴스를 생성하기 위해서는 서버상품(서버스펙)을 선택하여 생성하여야 합니다.<br />
  따라서 서버상품을 조회할 수 있는 API를 제공합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명       | 타입     |  필수여부 |
| ---------------------- | ------------- | ------ |  ---- |
| serverImageProductCode | 서버이미지상품코드 | String | Yes  |
| regionNo               | 리전번호        | String |    No    |
| zoneNo                 | ZONE번호       | String |  No      |
| internetLineTypeCode   | 인터넷라인구분코드 | String | No       |

- serverImageProductCode
  - 서버이미지상품리스트조회(getServerImageProdutList) API를 통해서 획득할 수 있습니다. 필수값이며, 서버이미지상품에 따라서 생성 가능한 서버 스펙이 달라지게 됩니다.
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- zoneNo
  - 상품리스트가 조회될 ZONE을 결정할 수 있습니다.
  - getZoneList 액션을 통해서 획득할 수 있습니다.
  - default : 해당리전의 첫번째 ZONE을 선택
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
  - default : PUBLC(Public)

- Example

```javascript
const server = client.IaaS.server();
const getServerProductListResponse = await server.getServerProductList({
    serverImageProductCode: 'SPSW0LINUX000046', // centos-7.3-64
});

/** Return **/
{ requestId: '0dd235f6-aac2-416b-8caf-ae56823ece38',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 53,
    productList: 
    [ { productCode: 'SPSVRSTAND000056',
        productName: 'vCPU 1EA, Memory 1GB, Disk 50GB',
        productType: [Object],
        productDescription: 'vCPU 1EA, Memory 1GB, Disk 50GB',
        infraResourceType: [Object],
        cpuCount: 1,
        memorySize: 1073741824,
        baseBlockStorageSize: 53687091200,
        osInformation: '',
        diskType: [Object],
        dbKindCode: '',
        addBlockStorageSize: 0 },
        { productCode: 'SPSVRSTAND000003',
        productName: 'vCPU 1EA, Memory 2GB, Disk 50GB',
        productType: [Object],
        productDescription: 'vCPU 1개, 메모리 2GB, 디스크 50GB',
        infraResourceType: [Object],
        cpuCount: 1,
        memorySize: 2147483648,
        baseBlockStorageSize: 53687091200,
        osInformation: '',
        diskType: [Object],
        dbKindCode: '',
        addBlockStorageSize: 0 },
    ]
}

```

#### getRaidList

- API명

  RAID리스트조회

- action

  getRaidList

- 설명

  사용가능한 RAID리스트를 조회합니다.

- Example

```javascript
const server = client.IaaS.server();
const getRegionListResponse = await server.getRaidList();

/** Return **/
{ 
    requestId: '446ffdfb-8f64-4fa7-b28a-b2c6bbdb3cd3',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 3,
    raidList: 
    [ 
        { raidTypeName: '5', raidName: 'RAID 5' },
        { raidTypeName: '1', raidName: 'RAID 1+0' },
        { raidTypeName: 'none', raidName: 'NONE' } 
    ] 
}
```


### Zone

네이버 클라우드 플랫폼에서 제공하는 존(Zone)에 서버인스턴스(VM)을 생성할 수 있습니다.
기본적으로 존(Zone)을 나누는 기준은 DS(Distribution Switch)입니다.

#### getZoneList

- API명

  ZONE리스트조회

- action

  getZoneList

- 설명

  서버인스턴스(VM)를 생성할 때, 특정한 존(Zone)에 생성할 수 있습니다.
  따라서 네이버 클라우드 플랫폼에서 제공하는 존(Zone) 정보를 조회할 수 있어야 합니다.

- 요청 파라미터

| 파라미터명    | 간략 설명 | 타입     | 필수여부 |
| -------- | ----- | ------ | ---- |
| regionNo | 리전번호  | String |  No   |

- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.

- Example

```javascript
const server = client.IaaS.server();
const zoneList = await server.getZoneList({
    regionNo: "1"
});

/** Return **/
{ 
    requestId: 'ee0dd3d6-007d-451d-91ae-40a49360442b',
    returnCode: '0',
    returnMessage: 'success',
    zoneList: 
    [ { zoneNo: '3',
        zoneName: 'KR-2',
        zoneCode: 'KR-2',
        zoneDescription: '평촌 zone',
        regionNo: '1' },
        { zoneNo: '2',
        zoneName: 'KR-1',
        zoneCode: 'KR-1',
        zoneDescription: '가산 zone',
        regionNo: '1' } ] 
}
```


### Region

#### getRegionList

- API명

  REGION리스트조회

- action

  getRegionList

- 설명

  사용 가능한 리전리스트를 조회합니다.

- Example

```javascript
const server = client.IaaS.server();
const getRegionListResponse = await server.getRegionList();

/** Return **/
{
    requestId: '354ba53d-6f30-4042-be6d-7fec9d431017',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 8,
    regionList: 
    [ { regionNo: '1', regionCode: 'KR', regionName: 'Korea' },
        { regionNo: '2', regionCode: 'USW', regionName: 'US-West(Old)' },
        { regionNo: '3', regionCode: 'HK', regionName: 'HongKong' },
        { regionNo: '6', regionCode: 'DE', regionName: 'Germany(Old)' },
        { regionNo: '7', regionCode: 'SGN', regionName: 'Singapore(New)' },
        { regionNo: '8', regionCode: 'JPN', regionName: 'Japan(New)' },
        { regionNo: '9', regionCode: 'USWN', regionName: 'US-West(New)' },
        { regionNo: '10', regionCode: 'DEN', regionName: 'Germany(New)' } ] 
}
```


### NAS


#### createNasVolumeInstance

- API명

  NAS볼륨인스턴스생성

- action

  createNasVolumeInstance

- 설명

  NAS볼륨인스턴스를 생성합니다.


- 요청 파라미터

| 파라미터명                      | 간략 설명                 | 타입         | 제약                     | 필수여부    |
| ------------------------------- | ------------------------- | ------------ | ------------------------ | ----------- |
| volumeName                      | 볼륨이름                  | String       |                          | Yes         |
| volumeSize                      | NAS볼륨사이즈             | Long       | 500GB 이상, 10000GB 이하| Yes         |
| volumeAllotmentProtocolTypeCode | 볼륨할당프로토콜유형코드  | String       | Min : 1, Max : 5         | Yes         |
| serverInstanceNoList            | 서버인스턴스번호리스트    | List\<String> |                          | No          |
| customIpList                    | 커스텀IP리스트            | List\<String> |                          | No          |
| cifsUserName                    | CIFS유저이름              | String       |                          | Conditional |
| cifsUserPassword                | CIFS유저비밀번호          | String       |                          | Conditional |
| nasVolumeDescription            | NAS볼륨설명               | String       | Min : 1, Max : 1000      | No          |
| regionNo                        | 리전번호                  | String       | Min : 1, Max : 5         | No          |
| zoneNo                          | ZONE번호                  | String       |                          | No          |

- volumeName
  - 생성할 NAS볼륨이름
  - 고객 식별을 위해 이미 입력된 NAS 볼륨 이름 뒤에 3~20자까지 NAS 볼륨 이름을 입력할 수 있습니다.
- volumeSize
  - NAS볼륨사이즈
  - 볼륨 기본 용량은 500GB ~ 10,000GB이며, 100GB 단위로 추가하실 수 있습니다.
- volumeAllotmentProtocolTypeCode
  - 볼륨할당프로토콜유형코드
  - NFS | CIFS
  - NFS : CentOS, Ubuntu 등 리눅스 서버에서 마운트하실 수 있습니다.
  - CIFS : Windows 서버에서 마운트하실 수 있습니다.
- serverInstanceNoList
  - NFS에 접근제어할 서버인스턴스번호 리스트
- customIpList
  - 다른 계정의 서버를 NAS 볼륨에 추가하려면, 해당 서버의 사설 IP를 아래에 직접 입력해주세요.
- cifsUserName
  - CIFS유저이름
  - 마운트 접속 ID는 6자리 이상 20자리 미만의 영문, 숫자의 조합으로 입력할 수 있습니다.
- cifsUserPassword
  - CIFS유저패스워드
  - 마운트 접속 비밀번호는 8자리 이상 14자리 이하이며 영문 2자리 이상, 숫자, 특수문자의 조합으로 입력할 수 있습니다.
- nasVolumeDescription
  - NAS볼륨설명
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
  - default : KR리전
- zoneNo
  - NAS볼륨이 생설될 ZONE을 결정할 수 있습니다.
  - getZoneList 액션을 통해서 획득할 수 있습니다.
  - default : 해당리전의 첫번째 ZONE을 선택

- Example

```javascript
const server = client.IaaS.server();
const createNasVolumeInstanceResponse = await server.createNasVolumeInstance({
    volumeName: 'testVol',
    volumeSize: '500', // GB
    volumeAllotmentProtocolTypeCode: 'NFS',
    zoneNo: '3' // KR-2
});

/** Return **/
{ 
    requestId: '9f6b6a7e-e58f-43b3-872e-3ef99c80e412',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    nasVolumeInstanceList: 
    [ { nasVolumeInstanceNo: '1029901',
        nasVolumeInstanceStatus: [Object],
        nasVolumeInstanceOperation: [Object],
        nasVolumeInstanceStatusName: 'created',
        createDate: '2018-10-28T21:36:26+0900',
        nasVolumeDescription: '',
        mountInformation: '10.250.53.73:/n780247_testVol',
        volumeAllotmentProtocolType: [Object],
        volumeName: 'n780247_testVol',
        volumeTotalSize: 536870912000,
        volumeSize: 536870912000,
        volumeUseSize: 278528,
        volumeUseRatio: 0,
        snapshotVolumeConfigurationRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0,
        isSnapshotConfiguration: false,
        isEventConfiguration: false,
        region: [Object],
        zone: [Object],
        nasVolumeInstanceCustomIpList: [],
        nasVolumeServerInstanceList: [] } ] 
}
```

#### deleteNasVolumeInstance

- API명

  NAS볼륨인스턴스삭제

- action

  deleteNasVolumeInstance

- 설명

  NAS볼륨인스턴스를 삭제합니다.

- 요청 파라미터

| 파라미터명          | 간략 설명           | 타입   |  필수여부|
| ------------------- | ------------------- | ------ | ------- |
| nasVolumeInstanceNo | NAS볼륨인스턴스번호 | String |      Yes     |

- Example

```javascript
const server = client.IaaS.server();
const deleteNasVolumeInstanceResponse = await server.deleteNasVolumeInstance({
    nasVolumeInstanceNo: '397767',
});

/** Return **/
{
    requestId: "d131a03a-ecc4-407d-88d9-059911b34f74",
    returnCode: "0",
    returnMessage: "success",
    totalRows: "1",
    nasVolumeInstanceList: {
      nasVolumeInstance: {
        nasVolumeInstanceNo: "397767",
        nasVolumeInstanceStatus: {
          code: "CREAT",
          codeName: "NAS create"
        },
        nasVolumeInstanceOperation: {
          code: "NULL",
          codeName: "NAS NULL OP"
        },
        nasVolumeInstanceStatusName: "created",
        createDate: "2018-02-27T13:13:05+0900",
        mountInformation: "10.105.84.82:/n000212_penguin",
        volumeAllotmentProtocolType: {
          code: "NFS",
          codeName: "NFS"
        },
        volumeName: "n000212_penguin",
        volumeTotalSize: "547608330240",
        volumeSize: "547608330240",
        volumeUseSize: "258048",
        volumeUseRatio: "0.0",
        snapshotVolumeConfigurationRatio: "0.0",
        snapshotVolumeSize: "0",
        snapshotVolumeUseSize: "0",
        snapshotVolumeUseRatio: "0.0",
        isSnapshotConfiguration: "false",
        isEventConfiguration: "false",
        region: {
          regionNo: "1",
          regionCode: "KR",
          regionName: "Korea"
        },
        zone: {
          zoneNo: "2",
          zoneName: "KR-1",
          zoneCode: "KR-1",
          zoneDescription: "KR-1 zone",
          regionNo: "1"
        }
      }
    }
}

```


#### getNasVolumeInstanceList

- API명

  NAS볼륨인스턴스리스트조회

- action

  getNasVolumeInstanceList

- 설명

  NAS볼륨인스턴스리스트들을 조회합니다.


- 요청 파라미터

| 파라미터명                           | 간략 설명        | 타입      | 제약               | 필수여부 |
| ------------------------------- | ------------ | ------- | ---------------- | ---- |
| volumeAllotmentProtocolTypeCode | 볼륨할당프로토콜유형코드 | String  | Min : 1, Max : 5 | No   |
| isEventConfiguration            | 이벤트설정여부      | Boolean |                  | No   |
| isSnapshotConfiguration         | 스냅샷볼륨설정여부    | Boolean |                  | No   |
| nasVolumeInstanceNoList         | NAS볼륨인스턴스번호리스트| List\<String> |                  | No       |
| regionNo                        | 리전번호                 | String       |                  | No       |
| zoneNo                          | ZONE번호                 | String       |                  | No       |

- volumeAllotmentProtocolTypeCode
  - 볼륨할당프로토콜유형코드
  - NFS | CIFS
  - 필터를 설정하지 않으면 모두 선택됩니다.
- isEventConfiguration
  - 이벤트설정여부
  - true | false
  - 필터를 설정하지 않으면 모두 선택됩니다.
- isSnapshotConfiguration
  - 스냅샷볼륨설정여부
  - true | false
  - 필터를 설정하지 않으면 모두 선택됩니다.
- nasVolumeInstanceNoList
  - NAS볼륨인스턴스번호리스트
  - 필터를 설정하지 않으면 모두 선택됩니다.
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
  - default : KR리전
- zoneNo
  - NAS볼륨인스턴스리스트를 ZONE을 이용해 필터링 할 수 있습니다.
  - 필터를 설정하지 않으면 해당리전의 ZONE 모두가 선택됩니다.

- Example

  - 요청

```javascript
const server = client.IaaS.server();
const getNasVolumeInstanceListResponse = await server.getNasVolumeInstanceList();

/** Return **/      
{ 
    requestId: '522ffe15-a612-46f0-b4ac-dd779db42d77',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    nasVolumeInstanceList: 
    [ { nasVolumeInstanceNo: '1029901',
        nasVolumeInstanceStatus: [Object],
        nasVolumeInstanceOperation: [Object],
        nasVolumeInstanceStatusName: 'created',
        createDate: '2018-10-28T21:36:26+0900',
        nasVolumeDescription: '',
        mountInformation: '10.250.53.73:/n780247_testVol',
        volumeAllotmentProtocolType: [Object],
        volumeName: 'n780247_testVol',
        volumeTotalSize: 536870912000,
        volumeSize: 536870912000,
        volumeUseSize: 286720,
        volumeUseRatio: 0,
        snapshotVolumeConfigurationRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0,
        isSnapshotConfiguration: false,
        isEventConfiguration: false,
        region: [Object],
        zone: [Object],
        nasVolumeInstanceCustomIpList: [],
        nasVolumeServerInstanceList: [] } ] 
           }
``` 

#### changeNasVolumeSize

- API명

  NAS볼륨사이즈변경

- action

  changeNasVolumeSize

- 설명

  NAS볼륨의사이즈를 변경합니다.

- 요청 파라미터

| 파라미터명               | 간략 설명       | 타입      | 제약                    | 필수여부 |
| ------------------- | ----------- | ------- | --------------------- | ---- |
| nasVolumeInstanceNo | NAS볼륨인스턴스번호 | String  |                       | Yes  |
| volumeSize          | NAS볼륨용량     | Long | 500GB 이상 / 10000GB 이하 | Yes  |

- nasVolumeInstanceNo
  - NAS볼륨인스턴스번호
  - nasVolumeInstanceNo는 getNasVolumeInstanceList액션을 통해서 얻으실 수 있습니다.
- volumeSize
  - NAS볼륨용량
  - 500GB 이상 | 10000GB 이하

- Example
```javascript
const server = client.IaaS.server();
const changeNasVolumeSizeResponse = await server.changeNasVolumeSize({
    nasVolumeInstanceNo: '1029901',
    volumeSize: '600' // GB
});

/** Return **/
{ 
    requestId: '6b0b4ada-a7f5-4219-a183-946ac97c6512',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    nasVolumeInstanceList: 
    [ { nasVolumeInstanceNo: '1029901',
        nasVolumeInstanceStatus: [Object],
        nasVolumeInstanceOperation: [Object],
        nasVolumeInstanceStatusName: 'created',
        createDate: '2018-10-28T21:36:26+0900',
        nasVolumeDescription: '',
        mountInformation: '10.250.53.73:/n780247_testVol',
        volumeAllotmentProtocolType: [Object],
        volumeName: 'n780247_testVol',
        volumeTotalSize: 644245094400,
        volumeSize: 644245094400,
        volumeUseSize: 286720,
        volumeUseRatio: 0,
        snapshotVolumeConfigurationRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0,
        isSnapshotConfiguration: false,
        isEventConfiguration: false,
        region: [Object],
        zone: [Object],
        nasVolumeInstanceCustomIpList: [],
        nasVolumeServerInstanceList: [] } ] 
}
```

#### getNasVolumeInstanceRatingList

- API명

  NAS볼륨인스턴스측정리스트조회

- action

  getNasVolumeInstanceRatingList

- 설명

  일/시간/분/초 단위로 NAS 볼륨의 인스턴스의 크기를 조회합니다.

- 요청 파라미터

| 파라미터명               | 간략 설명       | 타입     | 제약                        | 필수여부 |
| ------------------- | ----------- | ------ | ------------------------- | ---- |
| nasVolumeInstanceNo | NAS볼륨인스턴스번호 | String |                           | Yes  |
| startTime           | 측정시작시간      | String | yyyy-MM-dd'T'HH:mm:ssZ 포맷 | Yes  |
| endTime             | 측정종료시간      | String | yyyy-MM-dd'T'HH:mm:ssZ 포맷 | Yes  |
| interval            | 측정간격        | String | 5m / 6h / 1d / 1M         | Yes  |

- nasVolumeInstanceNo
  - NAS볼륨인스턴스번호
  - getNasVolumeInstanceList 액션을 통해서 획득하실수 있습니다.
- startTime
  - 측정시작시간
  - yyyy-MM-dd'T'HH:mm:ssZ 포맷 (GMT)
  - eg) 2017-07-20T00:00:00+0900 (한국기준)
  - 데이터 보관주기 : 5분 : 3일 | 6시간 : 1달 | 1일 : 2년 | 1달 : 5년
- endTime
  - 측정종료시간
  - yyyy-MM-dd'T'HH:mm:ssZ 포맷 (GMT)
  - eg) 2017-07-20T00:00:00+0900 (한국기준)
  - 데이터 보관주기 : 5분 : 3일 | 6시간 : 1달 | 1일 : 2년 | 1달 : 5년
- interval
  - 측정간격
  - 5분(5m) | 6시간(6h) | 1일(1d) | 1달(1M)

- Example
```javascript
const server = client.IaaS.server();

// const timezone = 'America/Los_Angeles';
const timezone = 'Asia/Seoul';
const startTime = moment(Date.now()).subtract(1, 'hour').startOf('hour').tz(timezone).format('YYYY-MM-DDTHH:mm:ssZZ');
const endTime = moment(Date.now()).tz(timezone).format('YYYY-MM-DDTHH:mm:ssZZ');

const getNasVolumeInstanceRatingListResponse = await server.getNasVolumeInstanceRatingList({
    nasVolumeInstanceNo: '1029901',
    startTime,
    endTime,
    interval: '5m'
});

/** Results **/
{
    requestId: '1d0b906c-5c9a-402f-8170-8b1ed62810b7',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 5,
    nasVolumeInstanceRatingList: 
    [ { ratingTime: '2018-10-28T21:36:26+0900',
        volumeSize: 536870912000,
        volumeUseSize: 278528,
        volumeUseRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0 },
        { ratingTime: '2018-10-28T21:42:15+0900',
        volumeSize: 536870912000,
        volumeUseSize: 286720,
        volumeUseRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0 },
        { ratingTime: '2018-10-28T21:45:51+0900',
        volumeSize: 644245094400,
        volumeUseSize: 286720,
        volumeUseRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0 },
        { ratingTime: '2018-10-28T21:47:15+0900',
        volumeSize: 644245094400,
        volumeUseSize: 294912,
        volumeUseRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0 },
        { ratingTime: '2018-10-28T21:52:14+0900',
        volumeSize: 644245094400,
        volumeUseSize: 294912,
        volumeUseRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0 } ] 
}
```


#### setNasVolumeAccessControl

- API명

  NAS볼륨인스턴스접근제어설정

- action

  setNasVolumeAccessControl

- 설명

  NAS의 접근제어를 설정합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명       | 타입     | 제약   | 필수여부 |
| -------------------- | ----------- | ------ | ---- | ---- |
| nasVolumeInstanceNo  | NAS볼륨인스턴스번호 | String |      | Yes  |
| serverInstanceNoList | 서버인스턴스번호리스트 | List<String> | 중복불가 | No   |
| customIpList         | 커스텀IP리스트    | List<String> | 중복불가 | No   |

- nasVolumeInstanceNo
  - NAS볼륨인스턴스번호
  - nasVolumeInstanceNo는 getNasVolumeInstanceList액션을 통해서 얻으실 수 있습니다.
- serverInstanceNoList
  - 중복불가
  - 사용자가 소유하고 있는 서버의 인스턴스번호만 입력가능
- customIpList
  - 중복불가
  - 사설 IP만 설정가능 (공인 IP 설정불가)

- Example
```javascript
const server = client.IaaS.server();

const setNasVolumeAccessControlResponse = await server.setNasVolumeAccessControl({
    nasVolumeInstanceNo: '1029901',
    serverInstanceNoList: ['978300', '978303']
});

/** Result **/
{ 
requestId: '3fbaad72-d5cf-45b6-a81a-d888aa7cba87',
returnCode: '0',
returnMessage: 'success',
totalRows: 1,
nasVolumeInstanceList: 
[ { nasVolumeInstanceNo: '1029901',
    nasVolumeInstanceStatus: [Object],
    nasVolumeInstanceOperation: [Object],
    nasVolumeInstanceStatusName: 'created',
    createDate: '2018-10-28T21:36:26+0900',
    nasVolumeDescription: '',
    mountInformation: '10.250.53.73:/n780247_testVol',
    volumeAllotmentProtocolType: [Object],
    volumeName: 'n780247_testVol',
    volumeTotalSize: 644245094400,
    volumeSize: 644245094400,
    volumeUseSize: 294912,
    volumeUseRatio: 0,
    snapshotVolumeConfigurationRatio: 0,
    snapshotVolumeSize: 0,
    snapshotVolumeUseSize: 0,
    snapshotVolumeUseRatio: 0,
    isSnapshotConfiguration: false,
    isEventConfiguration: false,
    region: [Object],
    zone: [Object],
    nasVolumeInstanceCustomIpList: [],
    nasVolumeServerInstanceList: [Array] } ] 
}
```

#### addNasVolumeAccessControl

- API명

  NAS볼륨인스턴스접근제어추가

- action

  addNasVolumeAccessControl

- 설명

  NAS의 접근제어를 추가합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명       | 타입     | 제약   | 필수여부 |
| -------------------- | ----------- | ------ | ---- | ---- |
| nasVolumeInstanceNo  | NAS볼륨인스턴스번호 | String |      | Yes  |
| serverInstanceNoList | 서버인스턴스번호리스트 | List<String> | 중복불가 | No   |
| customIpList         | 커스텀IP리스트    | List<String> | 중복불가 | No   |

- nasVolumeInstanceNo
  - NAS볼륨인스턴스번호
  - nasVolumeInstanceNo는 getNasVolumeInstanceList액션을 통해서 얻으실 수 있습니다.
- serverInstanceNoList
  - 중복불가
  - 사용자가 소유하고 있는 서버의 인스턴스번호만 입력가능
- customIpList
  - 중복불가
  - 사설 IP만 설정가능 (공인 IP 설정불가)

- Example
```javascript
const server = client.IaaS.server();
const addNasVolumeAccessControlResponse = await server.addNasVolumeAccessControl({
    nasVolumeInstanceNo: '1029901',
    serverInstanceNoList: ['978306']
});

/** Return **/
{ 
    requestId: '6b0ddc11-5f84-4145-928c-20dad9a6b9ce',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    nasVolumeInstanceList: 
    [ { nasVolumeInstanceNo: '1029901',
        nasVolumeInstanceStatus: [Object],
        nasVolumeInstanceOperation: [Object],
        nasVolumeInstanceStatusName: 'created',
        createDate: '2018-10-28T21:36:26+0900',
        nasVolumeDescription: '',
        mountInformation: '10.250.53.73:/n780247_testVol',
        volumeAllotmentProtocolType: [Object],
        volumeName: 'n780247_testVol',
        volumeTotalSize: 644245094400,
        volumeSize: 644245094400,
        volumeUseSize: 294912,
        volumeUseRatio: 0,
        snapshotVolumeConfigurationRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0,
        isSnapshotConfiguration: false,
        isEventConfiguration: false,
        region: [Object],
        zone: [Object],
        nasVolumeInstanceCustomIpList: [],
        nasVolumeServerInstanceList: [Array] } ] 
}
```

#### removeNasVolumeAccessControl

- API명

  NAS볼륨인스턴스접근제어제거

- action

  removeNasVolumeAccessControl

- 설명

  NAS의 접근제어를 제거합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명       | 타입     | 제약   | 필수여부 |
| -------------------- | ----------- | ------ | ---- | ---- |
| nasVolumeInstanceNo  | NAS볼륨인스턴스번호 | String |      | Yes  |
| serverInstanceNoList | 서버인스턴스번호리스트 | List<String> | 중복불가 | No   |
| customIpList         | 커스텀IP리스트    | List<String> | 중복불가 | No   |

- nasVolumeInstanceNo
  - NAS볼륨인스턴스번호
  - nasVolumeInstanceNo는 getNasVolumeInstanceList액션을 통해서 얻으실 수 있습니다.
- serverInstanceNoList
  - 중복불가
  - 사용자가 소유하고 있는 서버의 인스턴스번호만 입력가능
- customIpList
  - 중복불가
  - 사설 IP만 설정가능 (공인 IP 설정불가)

- Example
```javascript
const server = client.IaaS.server();
const removeNasVolumeAccessControlResponse = await server.removeNasVolumeAccessControl({
    nasVolumeInstanceNo: '1029901',
    serverInstanceNoList: ['978306']
});

/** Return **/
{ 
    requestId: 'f92f078f-9aa1-4aac-9bd8-3c0335b7e3d0',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    nasVolumeInstanceList: 
    [ { nasVolumeInstanceNo: '1029901',
        nasVolumeInstanceStatus: [Object],
        nasVolumeInstanceOperation: [Object],
        nasVolumeInstanceStatusName: 'created',
        createDate: '2018-10-28T21:36:26+0900',
        nasVolumeDescription: '',
        mountInformation: '10.250.53.73:/n780247_testVol',
        volumeAllotmentProtocolType: [Object],
        volumeName: 'n780247_testVol',
        volumeTotalSize: 644245094400,
        volumeSize: 644245094400,
        volumeUseSize: 294912,
        volumeUseRatio: 0,
        snapshotVolumeConfigurationRatio: 0,
        snapshotVolumeSize: 0,
        snapshotVolumeUseSize: 0,
        snapshotVolumeUseRatio: 0,
        isSnapshotConfiguration: false,
        isEventConfiguration: false,
        region: [Object],
        zone: [Object],
        nasVolumeInstanceCustomIpList: [],
        nasVolumeServerInstanceList: [Array] } ]
}
```


### 로그인키

#### getLoginKeyList

- API명

  로그인키리스트조회

- action

  getLoginKeyList

- 설명

  서버인스턴스(VM)를 생성하고, 생성된 서버인스턴스(VM)에 접속 시, 로그인키를 이용하여 비밀번호를 암호화하고 복호화하는 키를 조회합니다.

- 요청 파라미터

| 파라미터명    | 간략 설명  | 타입    | 필수여부 |
| -------- | ------ | ------- |  ---- |
| keyName  | 키명     | String  |  No   |

- keyName
  - 조회할 키 명

- Example
```javascript
const server = client.IaaS.server();
const getLoginKeyListResponse = await server.getLoginKeyList();

/** Return **/
{ 
    requestId: 'd5d37501-9649-4f12-b4d2-41dd4b9e62ac',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    loginKeyList: 
    [ {  
        fingerprint: '0b:0c:df:00:10:8b:09:fc:ee:28:cc:21:ad:76:ae:52',
        keyName: 'mygbtest',
        createDate: '2017-12-29T18:27:12+0900' } ] 
}
```

#### createLoginKey

- API명

  로그인키생성

- action

  createLoginKey

- 설명

  서버인스턴스(VM)를 생성하고, 생성된 서버인스턴스(VM)에 접속 시, 로그인키를 이용하여 비밀번호를 암호화 하고 복호화 하는 키를 생성합니다.

- 요청 파라미터

| 파라미터명   | 간략 설명 | 타입     | 제약            | 필수여부 |
| ------- | ----- | ------ | ------------- | ---- |
| keyName | 키명    | String | String length Min:3, Max:30 | Yes   |

- keyName
  - 생성할 키 명
  - 이미 생성된 키명이 존재할 경우 오류가 발생됩니다.

- Example

> **NOTE**  
> 반환된 로그인키는 가상 인스턴스(VM)에 최초 접속을 위한 패스워드를 조회하는데 사용됩니다.  
> 추후 이용을 위해서, 디스크에 저장하는 것이 좋습니다. 아래의 예제를 참고하세요.


```javascript
const fs = require('fs');
const path = require('path');
const server = client.IaaS.server();

const createLoginKeyResponse = await server.createLoginKey({
    keyName: 'mytest'
});

fs.writeFileSync( path.join(__dirname, './loginKey.pem'), createLoginKeyResponse.privateKey, { encoding: 'utf8'});

/** Result **/
{ 
    requestId: 'cbf44516-9e04-4e27-ada0-d040d70320a6',
    returnCode: '0',
    returnMessage: 'success',
    privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAjc3Auz70GgK8josrh2vi/gykWDU2suNZ98gQhOR6lKgu4f5m\nvfhn5SufebqzdNxPKrzS6mhB8ILQ9oBFzswtSu/WrSY2fSY+gb4X7Ah\nZ0KbqFxlIh7MuU4zlU84HNb074oq8SjSafLYh0LbUt5Oi2t3T8wb\n-----END RSA PRIVATE KEY-----\n'
}
```

#### deleteLoginKey

- API명

  로그인키삭제

- action

  deleteLoginKey

- 설명

  서버인스턴스(VM)를 생성하고, 생성된 서버인스턴스(VM)에 접속 시, 로그인키를 이용하여 비밀번호를 암호화 하고 복호화 하는 키를 삭제합니다.

- 요청 파라미터

| 파라미터명   | 간략 설명 | 타입     |  필수여부 |
| ------- | ----- | ------ |  ---- |
| keyName | 키명    | String | Yes   |

- keyName
  - 삭제할 키 명
  - 키명이 존재하지 않을 경우 오류가 발생됩니다.

- Example
```javascript
const server = client.IaaS.server();
const deleteLoginKeyResponse = await server.deleteLoginKey({
    keyName: 'mytest'
});

/** Result **/
{ 
    requestId: 'dac7ba6f-0051-4305-a924-b015c83fcdd2',
    returnCode: '0',
    returnMessage: 'success' }
```

#### importLoginKey

- API명

  로그인키 import

- action

  importLoginKey

- 설명

  서버인스턴스(VM)를 생성하고, 생성된 서버인스턴스(VM)에 접속 시 로그인키를 이용하여 비밀번호를 암호화 하고 복호화 하는 키를 생성합니다. 사용자가 직접 ssh-keygen 으로 생성한 public key를 import 합니다.

- 요청 파라미터

| 파라미터명   | 간략 설명 | 타입     | 제약            | 필수여부 |
| ------- | ----- | ------ | ------------- | ---- |
| keyName | 키명    | String | Min:3, Max:30 | Yes   |
| publicKey    | 공개키    | String   |               | Yes      |

- keyName
  - 생성할 키 명
  - 이미 생성된 키명이 존재할 경우 오류가 발생됩니다.
- publicKey
  - import 할 공개키
  - ssh-keygen -t rsa -C "my-key" -f ~/.ssh/my-key로 생성한 public 키.

- Example
```javascript
const fs = require('fs');
const path = require('path');
const publicKey = fs.readFileSync( path.join(__dirname, './testPublicKey.pub'), { encoding: 'utf8'});

const server = client.IaaS.server();

const importLoginKeyResponse = await server.importLoginKey({
    keyName: 'mytest',
    publicKey,
});

/** Return **/
{ 
    requestId: 'a84ac502-3b83-4aa6-b492-666e4e2dbeca',
    returnCode: '0',
    returnMessage: 'success',
    totalRows: 1,
    loginKeyList: 
    [ { fingerprint: '-',
        keyName: 'mytest',
        createDate: '2018-10-28T22:47:33+0900' } ] 
}
```


### AccessControlGroup

#### getAccessControlGroupList

- API명

  접근제어그룹리스트조회

- action

  getAccessControlGroupList

- 설명

  서버인스턴스(VM)를 생성할 때, 사용자가 설정한 AccessControlGroup을 넣어 방화벽 기능을 설정할 수 있습니다. 따라서 네이버 클라우드 플랫폼에서는 해당 설정에 필요한 AccessControlGroup조회를 제공합니다.

- 요청 파라미터

| 파라미터명                                   | 간략 설명         | 타입      | 제약                    | 필수여부 |
| --------------------------------------- | ------------- | ------- | --------------------- | ---- |
| accessControlGroupConfigurationNoList.N | 접근제어그룹설정번호리스트 | List\<String>  | Min:0, Max:5          | No   |
| isDefaultGroup                          | 디폴트그룹여부       | Boolean |                       | No   |
| accessControlGroupName                  | 접근제어그룹명       | String  | Min:3, Max:30         | No   |
| pageNo                                  | 페이지번호         | Integer | Min:0, Max:2147483647 | No   |
| pageSize                                  | 페이지사이즈         | Integer | Min:0, Max:2147483647 | No   |

- accessControlGroupConfigurationNoList.N
  - 조회할 접근제어그룹설정번호리스트
- isDefaultGroup
  - 디폴트그룹만 조회여부
- accessControlGroupName
  - 조회할 접근제어그룹명
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회할 페이지 사이즈

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getAccessControlGroupList
    ?isDefault=true
    ```

  - 응답

    ```xml
    <getAccessControlGroupListResponse>
    	<requestId>0bca339a-56e8-4493-84cb-22f345268bef</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<accessControlGroupList>
    		<accessControlGroup>
    			<accessControlGroupConfigurationNo>1035</accessControlGroupConfigurationNo>
    			<accessControlGroupName>ncloud-default-acg</accessControlGroupName>
    			<accessControlGroupDescription>Default AccessControlGroup</accessControlGroupDescription>
    			<isDefaultGroup>true</isDefaultGroup>
    			<createDate>2013-12-03T10:37:23+0900</createDate>
    		</accessControlGroup>
    	</accessControlGroupList>
    </getAccessControlGroupListResponse>
    ```

#### getAccessControlGroupServerInstanceList

- API명

  접근제어그룹적용된서버인스턴스리스트조회

- action

  getAccessControlGroupServerInstanceList

- 설명

  접근제어그룹설정번호로 등록된 서버 인스턴스 리스트들을 조회합니다.

- 요청 파라미터

| 파라미터명                             | 간략 설명      | 타입     | 제약   | 필수여부 |
| --------------------------------- | ---------- | ------ | ---- | ---- |
| accessControlGroupConfigurationNo | 접근제어그룹설정번호 | String |      | Yes  |

- accessControlGroupConfigurationNo
  - 조회할 접근제어그룹설정번호

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getAccessControlGroupServerInstanceList
    ```

  - 응답

    ```xml
     <getAccessControlGroupServerInstanceListResponse>
       <requestId>f91dca58-23c8-4691-8009-e1afbc0f10e6</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>23</totalRows>
       <accessControlGroupServerInstanceList>
          <accessControlGroupServerInstance>
             <serverInstance />
          </accessControlGroupServerInstance>
          <accessControlGroupServerInstance>
             <serverInstance>
                <serverInstanceNo>324320</serverInstanceNo>
                <serverName>micro2</serverName>
                <serverDescription />
                <cpuCount>1</cpuCount>
                <memorySize>1073741824</memorySize>
                <baseBlockStorageSize>53687091200</baseBlockStorageSize>
                <platformType>
                   <code>LNX64</code>
                   <codeName>Linux 64 Bit</codeName>
                </platformType>
                <loginKeyName>solhee0518</loginKeyName>
                <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
                <publicIp>192.168.120.21</publicIp>
                <privateIp>10.113.178.207</privateIp>
                <serverImageName>centos-5.7-64</serverImageName>
                <serverInstanceStatus>
                   <code>NSTOP</code>
                   <codeName>Server normal stopped state</codeName>
                </serverInstanceStatus>
                <serverInstanceOperation>
                   <code>NULL</code>
                   <codeName>Server NULL OP</codeName>
                </serverInstanceOperation>
                <serverInstanceStatusName>stopped</serverInstanceStatusName>
                <createDate>2017-05-18T19:41:21+0900</createDate>
                <uptime>2017-05-18T19:44:37+0900</uptime>
                <serverImageProductCode>SPSW0LINUX000010</serverImageProductCode>
                <serverProductCode>SPSVRSTAND000056</serverProductCode>
                <isProtectServerTermination>false</isProtectServerTermination>
                <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
                <zone>
                   <zoneNo>2</zoneNo>
                   <zoneName>KR-1</zoneName>
                   <zoneDescription>KR-1 zone</zoneDescription>
                </zone>
                <region>
                   <regionNo>1</regionNo>
                   <regionCode>KR</regionCode>
                   <regionName>KOREA</regionName>
                </region>
                <baseBlockStorageDiskType>
                   <code>NET</code>
                   <codeName>Network Storage</codeName>
                </baseBlockStorageDiskType>
                <baseBlockStroageDiskDetailType>
                   <code>HDD</code>
                   <codeName>HDD</codeName>
                </baseBlockStroageDiskDetailType>
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
          </accessControlGroupServerInstance>
          ....
       </accessControlGroupServerInstanceList>
    </getAccessControlGroupServerInstanceListResponse>
    ```

#### getAccessControlRuleList

- API명

  접근제어규칙리스트조회

- action

  getAccessControlRuleList

- 설명

  접근제어RULE리스트를 조회합니다.

- 요청 파라미터

| 파라미터명                             | 간략 설명 | 타입     | 제약   | 필수여부 |
| --------------------------------- | ----- | ------ | ---- | ---- |
| accessControlGroupConfigurationNo | ACG번호 | String |      | Yes  |

- accessControlGroupConfigurationNo
  - 조회할 접근제어그룹설정번호

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getAccessControlRuleList
    ```

  - 응답

    ```xml
    <getAccessControlRuleListResponse>
       <requestId>95239e27-9db0-4f38-8612-a16ba6a974f0</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <accessControlRuleList>
          <accessControlRule>
             <accessControlRuleConfigurationNo>10949</accessControlRuleConfigurationNo>
             <protocolType>
                <code>TCP</code>
                <codeName>tcp</codeName>
             </protocolType>
             <sourceIp />
       <sourceAccessControlRuleConfigurationNo>5390</sourceAccessControlRuleConfigurationNo>
             <destinationPort>3306-20000</destinationPort>
             <accessControlRuleDescription />
          </accessControlRule>
       </accessControlRuleList>
    </getAccessControlRuleListResponse>
    ```


### 서버

#### getServerInstanceList

- API명

  서버인스턴스리스트조회

- action

  getServerInstanceList

- 설명

  서버인스턴스(VM)리스트를 조회합니다.
  페이징 처리가 가능하며, 응답항목 중 userData의 경우에는 서버인스턴스상세 조회시에만 제공됩니다.

- 요청 파라미터

| 파라미터명                              | 간략 설명       | 타입      | 제약                    | 필수여부 |
| ---------------------------------- | ----------- | ------- | --------------------- | ---- |
| serverInstanceNoList.N             | 서버인스턴스번호리스트 | List\<String>  |                       | No   |
| searchFilterName                   | 검색할필터명      | String  |                       | No   |
| searchFilterValue                  | 검색할필터값      | String  |                       | No   |
| pageNo                             | 페이지번호       | Integer | Min:0, Max:2147483647 | No   |
| pageSize                           | 페이지사이즈      | Integer | Min:0, Max:2147483647 | No   |
| serverInstanceStatusCode           | 서버인스턴스상태코드  | String  | Min:0, Max:5          | No   |
| internetLineTypeCode               | 인터넷라인구분코드   | String  | Min:0, Max:5          | No   |
| regionNo                           | 리전번호        | String  |                       | No   |
| zoneNo                             | ZONE번호        | String  |                       | No   |
| baseBlockStorageDiskTypeCode       | 서버디스크유형코드   | String  | Min : 1, Max : 5      | No   |
| baseBlockStorageDiskDetailTypeCode | 서버디스크상세유형코드 | String  | Min : 1, Max : 5      | No   |
| sortedBy                           | 정렬 대상       | String  |                       | No   |
| sortingOrder                       | 정렬 순서       | String  |                       | No   |
| serverInstanceTypeCodeList.N         | 서버인스턴스구분코드리스트 | List\<String>  |                       | No       |
| tagKeyList.N         | 태그 키 리스트 | List\<String>  |                       | No       |
| tagKeyValue.N         | 태그 값 리스트 | List\<String>  |                       | No       |


- serverInstanceNoList.N
  - 조회할 서버인스턴스번호리스트
- searchFilterName
  - 서버이름(serverName) | 아이피(ip) [대소문자 구분 없음]
  - 아이피(ip)의 경우에는 사설 아이피, 공인 아이피 모두 검색할 수 있습니다.
- searchFilterValue
  - 검색할 값
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회 할 페이지 사이즈
- serverInstanceStatusCode
  - 조회할 서버인스턴스상태코드별 서버리스트
  - 입력가능한 상태는 서버인스턴스 데이터타입(ServerInstance)의 서버인스턴스상태(serverInstanceStatus) 값을 참고하시기 바랍니다.
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public) | GLBL(글로벌)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- zoneNo
  - 서버리스트가 조회될 ZONE을 결정할 수 있습니다.
  - getZoneList 액션을 통해서 획득할 수 있습니다.
  - default : 해당리전의 첫번째 ZONE을 선택
- baseBlockStorageDiskTypeCode
  - 서버디스크유형 구분코드
  - NETWORK DISK(NET) | LOCAL DISK(LOCAL)
- baseBlockStorageDiskDetailTypeCode
  - 서버디스크상세유형 구분코드
  - 하드디스크(HDD) | SSD(SSD)
- sortedBy
  - 서버이름(serverName) | 서버인스턴스번호(serverInstanceNo) [대소문자 구분 없음]
  - default : 서버인스턴스번호(serverInstanceNo)
- sortingOrder
  - 오름차순(ascending) | 내림차순(descending) [대소문자 구분 없음]
  - default : 오름차순(ascending)
- serverInstanceTypeCodeList.N
  - 조회할 서버인스턴스구분코드리스트
  - Micro(MICRO) | Compact(COMPT) | Standard(STAND) | High Memory(HIMEM) | GPU(GPU) | Virtual Dedicated Server(VDS)
- tagKeyList.N
  - 조회할 태그 키 리스트
- tagValueList.N
  - 조회할 태그 값 리스트

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getServerInstanceList
    ```

  - 응답

    ```xml
    <getServerInstanceListResponse>
       <requestId>24feacf3-73dd-4e61-af59-e8fa10f3cbc3</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>31</totalRows>
       <serverInstanceList>
          <serverInstance>
             <serverInstanceNo>318672</serverInstanceNo>
             <serverName>bong-svr</serverName>
             <serverDescription />
             <cpuCount>1</cpuCount>
             <memorySize>2147483648</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>LNX64</code>
                <codeName>Linux 64 Bit</codeName>
             </platformType>
             <loginKeyName>nang-eco03-psw</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.101.6.111</privateIp>
             <serverImageName>centos-6.3-64</serverImageName>
             <serverInstanceStatus>
                <code>INIT</code>
                <codeName>Server init state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>NULL</code>
                <codeName>Server NULL OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>init</serverInstanceStatusName>
             <createDate>2016-09-23T11:13:05+0900</createDate>
             <uptime>2016-09-23T11:17:00+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000031</serverImageProductCode>
             <serverProductCode>SPSVRSTAND000003</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList />
          </serverInstance>
          <serverInstance>
             <serverInstanceNo>324193</serverInstanceNo>
             <serverName>s-311ofyxt96gzmw001</serverName>
             <serverDescription>Auto scaling group 'asg-0207g' 소속의 자동 생성된 서버</serverDescription>
             <cpuCount>1</cpuCount>
             <memorySize>2147483648</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>LNX64</code>
                <codeName>Linux 64 Bit</codeName>
             </platformType>
             <loginKeyName>hd-onlinetest03-dev</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp />
             <serverImageName>centos-6.6-64</serverImageName>
             <serverInstanceStatus>
                <code>INIT</code>
                <codeName>Server init state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>NULL</code>
                <codeName>Server NULL OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>init</serverInstanceStatusName>
             <createDate>2017-05-18T11:20:29+0900</createDate>
             <uptime>2017-05-18T11:20:29+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000044</serverImageProductCode>
             <serverProductCode>SPSVRSTAND000003</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList />
          </serverInstance>
       </serverInstanceList>
    </getServerInstanceListResponse>
    ```

#### createServerInstances

- API명

  서버인스턴스생성

- action

  createServerInstances

- 설명

  서버인스턴스(VM)를 생성합니다.

- 요청 파라미터

| 파라미터명                                   | 간략 설명      | 타입      | 제약               | 필수여부        |
| --------------------------------------- | ---------- | ------- | ---------------- | ----------- |
| serverImageProductCode                  | 서버이미지상품코드  | String  | Min:1, Max:20    | Conditional |
| serverProductCode                       | 서버상품코드     | String  | Min:1, Max:20    | No          |
| memberServerImageNo                     | 회원서버이미지번호  | String  |                  | Conditional |
| serverName                              | 서버명        | String  | Min:3, Max:30    | No          |
| serverDescription                       | 서버설명       | String  | Min:1, Max:1000  | No          |
| loginKeyName                            | 로그인키명      | String  | Min:3, Max:30    | No          |
| isProtectServerTermination              | 반납보호여부     | Boolean |                  | No          |
| serverCreateCount                       | 서버생성갯수     | Integer | Min:1, Max:20    | No          |
| serverCreateStartNo                     | 서버생성시작번호   | Integer |                  | No          |
| internetLineTypeCode                    | 인터넷라인구분코드  | String  | Min:1, Max:5     | No          |
| feeSystemTypeCode                       | 요금제구분코드    | String  | Min:1, Max:5     | No          |
| zoneNo                                  | ZONE번호     | String  |                  | No          |
| accessControlGroupConfigurationNoList.N | ACG설정번호리스트 | String  | Min:0, Max:5     | No          |
| userData                                | 사용자데이터     | String  | Min:1, Max:21847 | No          |
| raidTypeName                            | RAID구분이름        | String        |                  | No          |
| instanceTagList.N.tagKey                  | 인스턴스태그리스트.태그키  | String        |                  | No          |
| instanceTagList.N.tagValue                | 인스턴스태그리스트.태그값  | String        |                  | No          |

- serverImageProductCode
  - 생성할 서버이미지를 결정하기위한 서버이미지상품코드
  - getServerImageProductList 액션을 통해서 획득할 수 있습니다.
  - 서버이미지상품코드(serverImageProductCode) or 회원서버이미지번호(memberServerImageNo) 두 개의 파라미터 중 하나의 파라미터는 필수 항목입니다.
- serverProductCode
  - 생성할 서버스펙을 결정하기 위한 서버상품코드
  - getServerProductList 액션을 통해서 획득할 수 있습니다.
  - default : 최소사양으로 선택됨. 최소사양 기준은 1. 메모리 2. CPU 3. 기본블록스토리지사이즈 4. 디스크유형(NET, LOCAL)
- memberServerImageNo
  - 직접 생성한 서버이미지로부터 서버를 생성 시 필요한 값
  - getMemberServerImageList 액션을 통해서 획득할 수 있습니다.
- serverName
  - 생성할 서버 명
  - default : Ncloud가 알아서 배정
- serverDescription
  - 생성할 서버 설명
- loginKeyName
  - 공개키로 암호화 시킬 로그인키 명
  - default : 가장 최근에 생성된 로그인 키 명 사용
- isProtectServerTermination
  - 생성 시 반납보호여부를 설정할 수 있습니다.
  - default : false
- serverCreateCount
  - 한번에 생성할 서버생성 개수이며 한번에 20대 이상을 생성할 수 없습니다.
  - default : 1
- serverCreateStartNo
  - 한번에 여러대의 서버를 생성할 경우 서버명에 일련번호가 붙습니다. 일련번호의 시작번호를 설정할 수 있습니다.
  - 서버생성갯수와, 서버생성시작번호의 합이 1000이 넘어갈 수 없습니다.
  - default : 서버생성갯수(serverCreateCount)가 1보다 클 경우이고, 해당 파라미터 값이 없는 경우 001 부터 시작
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
  - default : PUBLC(Public)
- feeSystemTypeCode
  - 요금제구분코드이며 시간요금제(MTRAT), 정액제(FXSUM)가 존재합니다.
  - default : 시간요금제(MTRAT)
- zoneNo
  - 서버가 생성될 ZONE을 결정할 수 있습니다.
  - getZoneList 액션을 통해서 획득할 수 있습니다.
  - default : 네이버 클라우드 플랫폼에서 알아서 배정
- accessControlGroupConfigurationNoList.N
  - 생성 시 사용자가 생성한 ACG를 설정할 수 있습니다.
  - getAccessControlGroupList 액션을 통해서 ACG설정번호를 획득할 수 있습니다.
  - default : default ACG 번호
- userData
  - 서버가 최초 부팅시 사용자가 설정한 사용자데이타 스크립트를 수행시켜 줍니다.
  - 해당 컬럼을 조회하기 위해서는 getServerInstanceList 액션을 통해 특정 인스턴스조회시에만 반환됩니다.
  - userData값을 넣기전에 base64 Encoding, URL Encoding이 반드시 필요합니다.
  - base64로 Encoding된 결과를 다시 URL Encoding을 하지 않으면 signature invalid 에러가 발생합니다.
  - 스크립트 문자열을 직접 수행시키는 것 외에 스크립트가 저장된 파일경로를 매개변수로 받을수도 있습니다.
  - ex) file://directory1/directory2/*.sh
  - ex) https://kr.objectstorage.ncloud.com/bucket/*.sh
- raidTypeName
  - 베어메탈서버를 생성하기 위해서는 raidTypeName 값을 넣어야합니다.
  - 사용가능한 RAID 유형은 getRaidList 액션을 통해서 얻으실 수 있습니다.
- instanceTagList.N.tagKey
  - 생성할 인스턴스태그리스트. 태그 키
- instanceTagList.N.tagValue
  - 생성할 인스턴스태그리스트. 태그 값

- Example

  - 요청

    ```
    ${SERVER_API_URL}/createServerInstances
    ?serverImageProductCode=SPSW0LINUX000032
    &serverProductCode=SPSVRSTAND000004
    ```

  - 응답

    ```xml
    <createServerInstancesResponse>
       <requestId>34ea439a-6d44-474e-aa96-6e19d39dfb8a</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <serverInstanceList>
          <serverInstancegetServerInstanceList>
             <serverInstanceNo>340843</serverInstanceNo>
             <serverName>svr-9b467c9f6c75360</serverName>
             <serverDescription />
             <cpuCount>2</cpuCount>
             <memorySize>4294967296</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>LNX32</code>
                <codeName>Linux 32 Bit</codeName>
             </platformType>
             <loginKeyName>cloudqa</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.113.178.202</privateIp>
             <serverImageName>centos-6.3-32</serverImageName>
             <serverInstanceStatus>
                <code>INIT</code>
                <codeName>Server init state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>NULL</code>
                <codeName>Server NULL OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>init</serverInstanceStatusName>
             <createDate>2017-07-27T04:08:39+0900</createDate>
             <uptime>2017-07-27T04:08:39+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000032</serverImageProductCode>
             <serverProductCode>SPSVRSTAND000004</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList />
          </serverInstance>
       </serverInstanceList>
    </createServerInstancesResponse>
    ```



#### recreateServerInstance

- API명

  서버인스턴스재생성

- action

  recreateServerInstance

- 설명

  서버인스턴스를 재생성합니다. (베어메탈전용)

- 요청 파라미터

| 파라미터명                   | 간략 설명                 | 타입   | 제약               | 필수여부     |
| ---------------------------- | ------------------------- | ------ | ------------------ | ------------ |
| serverInstanceNo             | 서버인스턴스번호          | String | 중복불가 | Yes          |
| serverInstanceName           | 서버인스턴스이름          | String |                    | No           |
| serverImageProductCode | 변경서버이미지상품코드    | String |                    | Yes          |
| userData | 사용자데이터    | String | Min:1, Max:21847  | No          |
| instanceTagList.N.tagKey | 인스턴스태그리스트.태그키    | List\<String> |                    | No          |
| instanceTagList.N.tagValue | 인스턴스태그리스트.태그값    | List\<String> |                    | No          |

- serverInstanceNo
  - 재생성할 인스턴스번호

- serverInstanceName
  - 재생성시 변경할 이름,
  - Default : 원래 서버이름으로 생성

- serverImageProductCode
  - 서버이미지상품리스트조회(getServerImageProdutList) API를 통해서 획득할 수 있습니다.
  - 베어메탈 서버이미지만 입력가능합니다.

- instanceTagList.N.tagKey
  - 생성할 인스턴스태그리스트. 태그 키

- instanceTagList.N.tagValue
  - 생성할 인스턴스태그리스트. 태그 값

- Example

  - 요청

    ```
    ${SERVER_API_URL}/recreateServerInstance
    ?serverInstanceNo=680744
    &changeServerImageProductCode=SPSWBMWINNT00001
    ```

  - 응답

    ```xml
    <recreateServerInstanceResponse>
       <requestId>d449a2eb-60a2-4e63-b8a9-f20edec8a98c</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <serverInstanceList>
          <serverInstance>
             <serverInstanceNo>680744</serverInstanceNo>
             <serverName>penguin-window</serverName>
             <serverDescription />
             <cpuCount>20</cpuCount>
             <memorySize>137438953472</memorySize>
             <baseBlockStorageSize>4123168604160</baseBlockStorageSize>
             <platformType>
                <code>WND64</code>
                <codeName>Windows 64 Bit</codeName>
             </platformType>
             <loginKeyName>yoon-nang-onlinetest03-newbeta</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.39.64.12</privateIp>
             <serverImageName>win-2016-64-en</serverImageName>
             <serverInstanceStatus>
                <code>INIT</code>
                <codeName>Server init state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>NULL</code>
                <codeName>Server NULL OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>init</serverInstanceStatusName>
             <createDate>2018-05-30T02:12:13+0000</createDate>
             <uptime>2018-05-30T02:12:13+0000</uptime>
             <serverImageProductCode>SPSWBMWINNT00001</serverImageProductCode>
             <serverProductCode>SPSVRBM000000001</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>49.236.160.11</portForwardingPublicIp>
             <portForwardingExternalPort>30006</portForwardingExternalPort>
             <portForwardingInternalPort>3389</portForwardingInternalPort>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>가산 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>Korea</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>LOCAL</code>
                <codeName>Local storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStorageDiskDetailType>
                <code>SSD</code>
                <codeName>SSD</codeName>
             </baseBlockStorageDiskDetailType>
             <serverInstanceType>
                <code>BM</code>
                <codeName>BareMetal</codeName>
             </serverInstanceType>
             <userData>#powershell

    invoke-WebRequest http://125.209.192.32/ms-test/naver_download.ps1 -OutFile C:\Windows\Temp\naver_download.ps1
    C:\Windows\Temp\naver_download.ps1</userData>
             <accessControlGroupList>
                <accessControlGroup>
                   <accessControlGroupConfigurationNo>17791</accessControlGroupConfigurationNo>
                   <accessControlGroupName>yoon-test</accessControlGroupName>
                   <accessControlGroupDescription>ttADFEDFDFD</accessControlGroupDescription>
                   <isDefault>false</isDefault>
                   <createDate>2017-09-19T02:52:24+0000</createDate>
                </accessControlGroup>
             </accessControlGroupList>
          </serverInstance>
       </serverInstanceList>
    </recreateServerInstanceResponse>
    ```



#### terminateServerInstances

- API명

  서버인스턴스반납

- action

  terminateServerInstances

- 설명

  서버인스턴스(VM)를 반납(Terminate) 합니다.


- 요청 파라미터

| 파라미터명                  | 간략 설명       | 타입     | 제약   | 필수여부 |
| ---------------------- | ----------- | ------ | ---- | ---- |
| serverInstanceNoList.N | 서버인스턴스번호리스트 | List\<String> | 중복불가 | Yes  |

- serverInstanceNoList.N
  - 반납할 서버인스턴스번호 리스트

- 요청

  ```
  ${SERVER_API_URL}/terminateServerInstances
  ?serverInstanceNoList.1=340837
  ```

- 응답

  ```xml
  <terminateServerInstancesResponse>
     <requestId>1ee84982-5712-44cb-ac99-243e59dc8eb1</requestId>
     <returnCode>0</returnCode>
     <returnMessage>success</returnMessage>
     <totalRows>1</totalRows>
     <serverInstanceList>
        <serverInstance>
           <serverInstanceNo>340843</serverInstanceNo>
           <serverName>svr-9b467c9f6c75360</serverName>
           <serverDescription />
           <cpuCount>2</cpuCount>
           <memorySize>4294967296</memorySize>
           <baseBlockStorageSize>53687091200</baseBlockStorageSize>
           <platformType>
              <code>LNX32</code>
              <codeName>Linux 32 Bit</codeName>
           </platformType>
           <loginKeyName>cloudqa</loginKeyName>
           <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
           <publicIp />
           <privateIp>10.113.178.202</privateIp>
           <serverImageName>centos-6.3-32</serverImageName>
           <serverInstanceStatus>
              <code>NSTOP</code>
              <codeName>Server normal stopped state</codeName>
           </serverInstanceStatus>
           <serverInstanceOperation>
              <code>TERMT</code>
              <codeName>Server TERMINATE OP</codeName>
           </serverInstanceOperation>
           <serverInstanceStatusName>terminating</serverInstanceStatusName>
           <createDate>2017-07-27T04:08:39+0900</createDate>
           <uptime>2017-07-27T04:11:32+0900</uptime>
           <serverImageProductCode>SPSW0LINUX000032</serverImageProductCode>
           <serverProductCode>SPSVRSTAND000004</serverProductCode>
           <isProtectServerTermination>false</isProtectServerTermination>
           <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
           <zone>
              <zoneNo>2</zoneNo>
              <zoneName>KR-1</zoneName>
              <zoneDescription>KR-1 zone</zoneDescription>
           </zone>
           <region>
              <regionNo>1</regionNo>
              <regionCode>KR</regionCode>
              <regionName>KOREA</regionName>
           </region>
           <baseBlockStorageDiskType>
              <code>NET</code>
              <codeName>Network Storage</codeName>
           </baseBlockStorageDiskType>
           <baseBlockStroageDiskDetailType>
              <code>HDD</code>
              <codeName>HDD</codeName>
           </baseBlockStroageDiskDetailType>
           <internetLineType>
              <code>PUBLC</code>
              <codeName>PUBLC</codeName>
           </internetLineType>
           <userData />
           <accessControlGroupList>
              <accessControlGroup>
                 <accessControlGroupConfigurationNo>1038</accessControlGroupConfigurationNo>
                 <accessControlGroupName>ncloud-default-acg</accessControlGroupName>
                 <accessControlGroupDescription>Default AccessControlGroup</accessControlGroupDescription>
                 <isDefaultGroup>true</isDefaultGroup>
                 <createDate>2013-12-03T10:37:39+0900</createDate>
              </accessControlGroup>
           </accessControlGroupList>
        </serverInstance>
     </serverInstanceList>
  </terminateServerInstancesResponse>
  ```


#### changeServerInstanceSpec

- API명

  서버인스턴스스팩변경

- action

  changeServerInstanceSpec

- 설명

  서버인스턴스(VM)스펙을 변경합니다.

- 요청 파라미터

| 파라미터명             | 간략 설명    | 타입     | 제약                | 필수여부 |
| ----------------- | -------- | ------ | ----------------- | ---- |
| serverInstanceNo  | 서버인스턴스번호 | String |                   | Yes  |
| serverProductCode | 서버상품코드   | String | Min : 1, Max : 20 | Yes  |

- serverInstanceNo
  - 스펙을 변경할 서버인스턴스번호
- serverProductCode
  - 스펙에 대한 상품코드
  - getServerProductList 액션을 통해 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${SERVER_API_URL}/changeServerInstanceSpec
    ?serverInstanceNo=340837
    &serverProductCode=SPSVRSTAND000005
    ```

  - 응답

    ```xml
    <changeServerInstanceSpecResponse>
       <requestId>34ea439a-6d44-474e-aa96-6e19d39dfb8a</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <serverInstanceList>
          <serverInstance>
             <serverInstanceNo>340843</serverInstanceNo>
             <serverName>svr-9b467c9f6c75360</serverName>
             <serverDescription />
             <cpuCount>2</cpuCount>
             <memorySize>4294967296</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>LNX32</code>
                <codeName>Linux 32 Bit</codeName>
             </platformType>
             <loginKeyName>cloudqa</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.113.178.202</privateIp>
             <serverImageName>centos-6.3-32</serverImageName>
             <serverInstanceStatus>
                <code>INIT</code>
                <codeName>Server init state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>NULL</code>
                <codeName>Server NULL OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>init</serverInstanceStatusName>
             <createDate>2017-07-27T04:08:39+0900</createDate>
             <uptime>2017-07-27T04:08:39+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000032</serverImageProductCode>
             <serverProductCode>SPSVRSTAND000004</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList />
          </serverInstance>
       </serverInstanceList>
    </changeServerInstanceSpecResponse>
    ```

#### rebootServerInstances

- API명

  서버인스턴스재시작

- action

  rebootServerInstances

- 설명

  서버인스턴스(VM)를 재시작 합니다.


- 요청 파라미터

| 파라미터명                  | 간략 설명       | 타입     | 제약   | 필수여부 |
| ---------------------- | ----------- | ------ | ---- | ---- |
| serverInstanceNoList.N | 서버인스턴스번호리스트 | List\<String> | 중복불가 | Yes  |

- serverInstanceNoList.N
  - 재시작할 서버인스턴스번호 리스트

- Example

  - 요청

    ```
    ${SERVER_API_URL}/rebootServerInstances
    ?serverInstanceNoList.1=340598
    ```

  - 응답

    ```xml
    <rebootServerInstancesResponse>
       <requestId>60b59789-a0ae-4795-b72a-621eabb8ef5f</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <serverInstanceList>
          <serverInstance>
             <serverInstanceNo>340598</serverInstanceNo>
             <serverName>zeroptest</serverName>
             <serverDescription />
             <cpuCount>2</cpuCount>
             <memorySize>4294967296</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>UBS64</code>
                <codeName>Ubuntu Server 64 Bit</codeName>
             </platformType>
             <loginKeyName>cloudqa</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.113.178.253</privateIp>
             <serverImageName>ubuntu-12.04-64-server</serverImageName>
             <serverInstanceStatus>
                <code>RUN</code>
                <codeName>Server run state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>RESTA</code>
                <codeName>Server RESTART OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>rebooting</serverInstanceStatusName>
             <createDate>2017-07-26T11:10:29+0900</createDate>
             <uptime>2017-07-26T11:13:09+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000026</serverImageProductCode>
             <serverProductCode>SPSVRSSD00000003</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>SSD</code>
                <codeName>SSD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList>
                <accessControlGroup>
                   <accessControlGroupConfigurationNo>1038</accessControlGroupConfigurationNo>
                   <accessControlGroupName>ncloud-default-acg</accessControlGroupName>
                   <accessControlGroupDescription>Default AccessControlGroup</accessControlGroupDescription>
                   <isDefaultGroup>true</isDefaultGroup>
                   <createDate>2013-12-03T10:37:39+0900</createDate>
                </accessControlGroup>
             </accessControlGroupList>
          </serverInstance>
       </serverInstanceList>
    </rebootServerInstancesResponse>
    ```

#### startServerInstances

- API명

  서버인스턴스시작

- action

  startServerInstances

- 설명

  서버인스턴스(VM)를 시작합니다.


- 요청 파라미터

| 파라미터명                  | 간략 설명       | 타입     | 제약   | 필수여부 |
| ---------------------- | ----------- | ------ | ---- | ---- |
| serverInstanceNoList.N | 서버인스턴스번호리스트 | List\<String> | 중복불가 | Yes  |

- serverInstanceNoList.N
  - 시작할 서버인스턴스번호 리스트

- Example

  - 요청

    ```
    ${SERVER_API_URL}/startServerInstances
    ?serverInstanceNoList.1=340837
    ```

  - 응답

    ```xml
    <startServerInstancesResponse>
       <requestId>2a7beaae-5739-4ccd-a087-f4cd1fa6e48d</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <serverInstanceList>
          <serverInstance>
             <serverInstanceNo>340837</serverInstanceNo>
             <serverName>jin-good12</serverName>
             <serverDescription>테스트</serverDescription>
             <cpuCount>4</cpuCount>
             <memorySize>8589934592</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>LNX64</code>
                <codeName>Linux 64 Bit</codeName>
             </platformType>
             <loginKeyName>cloudqa</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.113.178.198</privateIp>
             <serverImageName>centos-6.3-64</serverImageName>
             <serverInstanceStatus>
                <code>NSTOP</code>
                <codeName>Server normal stopped state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>START</code>
                <codeName>Server START OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>booting</serverInstanceStatusName>
             <createDate>2017-07-27T03:45:55+0900</createDate>
             <uptime>2017-07-27T03:48:35+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000031</serverImageProductCode>
             <serverProductCode>SPSVRSTAND000005</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList>
                <accessControlGroup>
                   <accessControlGroupConfigurationNo>1038</accessControlGroupConfigurationNo>
                   <accessControlGroupName>ncloud-default-acg</accessControlGroupName>
                   <accessControlGroupDescription>Default AccessControlGroup</accessControlGroupDescription>
                   <isDefaultGroup>true</isDefaultGroup>
                   <createDate>2013-12-03T10:37:39+0900</createDate>
                </accessControlGroup>
             </accessControlGroupList>
          </serverInstance>
       </serverInstanceList>
    </startServerInstancesResponse>
    ```

#### stopServerInstances

- API명

  서버인스턴스종료

- action

  stopServerInstances

- 설명

  서버인스턴스(VM)를 정지합니다.


- 요청 파라미터

| 파라미터명                  | 간략 설명       | 타입     | 제약   | 필수여부 |
| ---------------------- | ----------- | ------ | ---- | ---- |
| serverInstanceNoList.N | 서버인스턴스번호리스트 | List\<String> | 중복불가 | Yes  |

- serverInstanceNoList.N
  - 정지할 서버인스턴스번호

- Example

  - 요청

    ```
    ${SERVER_API_URL}/stopServerInstances
    ?serverInstanceNoList.1=67953
    ```

  - 응답

    ```xml
    <stopServerInstancesResponse>
       <requestId>46c78e6b-ede6-4b76-a765-28cb8f57cebe</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <serverInstanceList>
          <serverInstance>
             <serverInstanceNo>340837</serverInstanceNo>
             <serverName>jin-good12</serverName>
             <serverDescription>테스트</serverDescription>
             <cpuCount>4</cpuCount>
             <memorySize>8589934592</memorySize>
             <baseBlockStorageSize>53687091200</baseBlockStorageSize>
             <platformType>
                <code>LNX64</code>
                <codeName>Linux 64 Bit</codeName>
             </platformType>
             <loginKeyName>cloudqa</loginKeyName>
             <isFeeChargingMonitoring>false</isFeeChargingMonitoring>
             <publicIp />
             <privateIp>10.113.178.198</privateIp>
             <serverImageName>centos-6.3-64</serverImageName>
             <serverInstanceStatus>
                <code>RUN</code>
                <codeName>Server run state</codeName>
             </serverInstanceStatus>
             <serverInstanceOperation>
                <code>SHTDN</code>
                <codeName>Server SHUTDOWN OP</codeName>
             </serverInstanceOperation>
             <serverInstanceStatusName>shutting down</serverInstanceStatusName>
             <createDate>2017-07-27T03:45:55+0900</createDate>
             <uptime>2017-07-27T04:20:14+0900</uptime>
             <serverImageProductCode>SPSW0LINUX000031</serverImageProductCode>
             <serverProductCode>SPSVRSTAND000005</serverProductCode>
             <isProtectServerTermination>false</isProtectServerTermination>
             <portForwardingPublicIp>192.168.120.111</portForwardingPublicIp>
             <zone>
                <zoneNo>2</zoneNo>
                <zoneName>KR-1</zoneName>
                <zoneDescription>KR-1 zone</zoneDescription>
             </zone>
             <region>
                <regionNo>1</regionNo>
                <regionCode>KR</regionCode>
                <regionName>KOREA</regionName>
             </region>
             <baseBlockStorageDiskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </baseBlockStorageDiskType>
             <baseBlockStroageDiskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </baseBlockStroageDiskDetailType>
             <internetLineType>
                <code>PUBLC</code>
                <codeName>PUBLC</codeName>
             </internetLineType>
             <userData />
             <accessControlGroupList>
                <accessControlGroup>
                   <accessControlGroupConfigurationNo>1038</accessControlGroupConfigurationNo>
                   <accessControlGroupName>ncloud-default-acg</accessControlGroupName>
                   <accessControlGroupDescription>Default AccessControlGroup</accessControlGroupDescription>
                   <isDefaultGroup>true</isDefaultGroup>
                   <createDate>2013-12-03T10:37:39+0900</createDate>
                </accessControlGroup>
             </accessControlGroupList>
          </serverInstance>
       </serverInstanceList>
    </stopServerInstancesResponse>
    ```

#### getRootPassword

- API명

  루트패스워드조회

- action

  getRootPassword

- 설명

  서버(VM)의 로그인키로 root 계정의 비밀번호를 조회합니다.


- 요청 파라미터

| 파라미터명            | 간략 설명         | 타입     | 제약                                    | 필수여부 |
| ---------------- | ------------- | ------ | ------------------------------------- | ---- |
| serverInstanceNo | 서버인스턴스번호      | String |                                       | Yes  |
| privateKey       | 서버의 로그인키(인증키) | String | 로그인키 내용이 그대로 들어와야 하므로, \n을 붙여주어야 합니다. | No  |

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getRootPassword
    ?serverInstanceNo=67953
    &privateKey=-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAtNkTS9cHBLXQcDY0s02KqaLb8GGupaeCLvWzNDM3aVZxUDFo\n kZYaEKFXbWhR1oZ4HyZnwo4y1VDxV1m35Ltq/HRCHP8+caNHaM6n2rivfHT8nMxg\n KvzsXjopWIVp+8oHvmi0TO+zcEusoNOv/jb7LcJwfeZ0WQvianQ7j6ppaXgHfZSX\n Tdqwyuf9UmzppUa8f2wLslDOlcYQW6VQ9S5f9cx9HgTXbc4vlb+NDLwdx0E+AIjw\n p5PgWCjbEqGKz2Myw4X7HJ06619BScwXSkyG+G3g0VjtL7WnEhhdmfGLCUE/BcKv\n Fz9KeRXIQAx8NrAW4c0Vq+CPyBgz5EWWMpTUXQIDAQABAoIBABn7AXmot3pmwD4O\n m32SyzPZkK0060kjCmHCrG74WKKKZ5b0sigQH0h6VTwDe5ZNFR6sfsWFdioNCc7Z\n tcBnaFRCQ2k1Bfx/T3fwEE8srxE7ITtJZRtn4HEc++maqQIiIQCqvBQ9b1LXnEIy\n hxsHPQhy4YREwjw0p99ROWlHOwOKm6KWbc4YFbDKmEc9v+NLxxNjf2KF7jNuQK0l\n VjeJEzBa02sFBGhMeLAMvhmHj9u1NbAFUn/uC4MrMFiQMoCnx2qBSoUPxuvL6WXH\n NpUoLT/rJrlqKUCffS3RIVt+lwjU6vVXlrxuYNTLDH4c+XJHkFprYDdq/lZktuRM\n f9uYa4ECgYEA75xeol7dvFGe6Es8pcNrdZUMEwkVR16DER+nfndl3fJMNu1YIBaf\n XKnDZLjS505pP+a0alwq0aQdXY8FIik9O9ugqpnd1EfI2fMlrVynUOcBIhVbvYip\n PNFg+tIuz37f3vMms7NCQ5W3SlincB63ptl2tovkOjXKbo1r1sZaGf0CgYEAwTfB\n wqvGm1GpMv8jrCFGNS7FXxZy5VcP/APXqfQb6Lpwe4rarxfb8nnap5KYOn0qSbY7\n BOoidV6QysT9Xm3pDjNUoeH9CujK0mx3sL/4utZiCqmVhGljGq9D4A7PsCnT4X4+\n Akvk9L9RS+xNs9NsK8jTz9zthaJRUzhAHcWSAeECgYEA7rUvqj8sVBJUZ0OdFd8L\n zUZBky03X7SOip6odNtqRqS+vPHTG5SuCtitakifBAUf4aNrFZLgrZ38C1sSWCgR\n cvKoq41Ca9tgA5GydXWa0oRwoo34qWfeglJtdTOzos/ZI/nFEr2BRGeBBLYxiQdx\n Gu4G0HGpWzx/gYeuaXeOB9kCgYBEKznPRu+RSORbO60IQ80TYmb8P11WELtw/KIQ\n MjHOkEizLbAt6ksNZ3R/frb6m8JZs1NrTnfN1QlcoNeLg1egTPflDWhLewpj5yTr\n VS+aK5z3ihFYYB45AfD+kfswefFpMzMJeGFVAFLcaIiZk1QstnQUeCvM5BGxPL1S\n Q6xZwQKBgQCSeU8FRIa0jUxN7hx5R1+IAIBPl2JUM7bMME9T3eX3Qh6wNCMjTxse\n NU70sp2m+8sv7Bq4QY5P13Cajo/+fwI1BSa83mF2kXnyEpXsrfw+4FM74YTrX0JA\n FlSDMaL95g7fCSSMuM8sOqMuIBn7d7DiK2nbrez/iRsZFH2qOqusOA==\n
    -----END RSA PRIVATE KEY-----\n
    &AUTHPARAMS
    ```

  - 응답

    ```xml
    <getRootPasswordResponse>
    	<requestId>d3709b68-3540-48a7-8fa0-3a40cde57d2c</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<rootPassword>
    		<rootPassword>YY64RG6UET2</rootPassword>
    	</rootPassword>
    </getRootPasswordResponse>
    ```


### 회원서버이미지

#### getMemberServerImageList

- API명

  회원서버이미지리스트조회

- action

  getMemberServerImageList

- 설명

  회원서버이미지 리스트를 조회합니다.

- 요청 파라미터

| 파라미터명                     | 간략 설명        | 타입      | 제약                            | 필수여부 |
| ------------------------- | ------------ | ------- | ----------------------------- | ---- |
| memberServerImageNoList.N | 회원서버이미지번호리스트 | List\<String>  |                               | No   |
| platformTypeCodeList.N    | 플랫폼구분코드리스트   | List\<String>  | Min : 1,<br/>Max : 5          | No   |
| regionNo                  | 리전번호         | String  |                               | No   |
| pageNo                    | 페이지번호        | Integer | Min : 0,<br/>Max : 2147483647 | No   |
| pageSize                  | 페이지사이즈       | Integer | Min : 0,<br/>Max : 2147483647 | No   |
| sortedBy                  | 정렬 대상        | String  |                               | No   |
| sortingOrder              | 정렬 순서        | String  |                               | No   |

- memberServerImageNoList.N
  - 조회할 회원서버이미지번호 리스트
- platformTypeCodeList.N
  - 조회할 서버이미지의 플랫폼코드 리스트
  - 리눅스32Bit(LNX32) | 리눅스64Bit(LNX64) | 윈도우 32Bit (WND32) | 윈도우 64Bit (WND64) | 우분투 데스크톱 64Bit (UBD64) | 우분투 서버 64Bit (UBS64)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회할 페이지 사이즈
- sortedBy
  - 목록 결과를 정렬할 기준 칼럼을 지정합니다.
  - 회원서버이미지명(memberServerImageName) | 회원서버이미지번호(memberServerImageNo) [대소문자 구분 없음]
  - default : 회원서버이미지번호(memberServerImageNo)
- sortingOrder
  - 목록 결과 정렬 순서를 오름차순과 내림차순 중에서 지정합니다.
  - 오름차순(ascending) | 내림차순(descending) [대소문자 구분 없음]
  - default : 오름차순(ascending)

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getMemberServerImageList
    ?platformTypeCodeList.1=LNX32
    ```

  - 응답

    ```xml
    <getMemberServerImageListResponse>
    	<requestId>d5b1eaff-659a-452a-a64b-7dcf5f5e1ddc</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<memberServerImageList>
    		<memberServerImage>
    			<memberServerImageNo>1755</memberServerImageNo>
    			<memberServerImageName>img</memberServerImageName>
    			<memberServerImageDescription />
    			<originalServerInstanceNo>67916</originalServerInstanceNo>
    			<originalServerProductCode>SPSVRSTAND000043</originalServerProductCode>
    			<originalServerName>i-0217</originalServerName>
    			<originalBaseBlockStorageDiskType>
    				<code>LOCAL</code>
    				<codeName>Local storage</codeName>
    			</originalBaseBlockStorageDiskType>
    			<originalServerImageProductCode>SPSW0LINUX000009</originalServerImageProductCode>
    			<originalOsInformation>CentOS 5.7 32Bit</originalOsInformation>
    			<originalServerImageName>centos-5.7-32-cnc1</originalServerImageName>
    			<memberServerImageStatusName>created</memberServerImageStatusName>
    			<memberServerImageStatus>
    				<code>CREAT</code>
    				<codeName>NSI CREATED state</codeName>
    			</memberServerImageStatus>
    			<memberServerImageOperation>
    				<code>NULL</code>
    				<codeName>NSI NULLOP</codeName>
    			</memberServerImageOperation>
    			<memberServerImagePlatformTypeCode>
    				<code>LNX32</code>
    				<codeName>Linux 32 Bit</codeName>
    			</memberServerImagePlatformTypeCode>
    			<createDate>2014-02-17T15:20:51+0900</createDate>
    			<region>
    				<regionNo>1</regionNo>
    				<regionCode>KR</regionCode>
    				<regionName>KOREA</regionName>
    			</region>
    			<zone>
    				<zoneNo>2</zoneNo>
    				<zoneName>zone2</zoneName>
    				<zoneDescription>nang zone</zoneDescription>
    			</zone>
    			<memberServerImageBlockStorageTotalRows>2</memberServerImageBlockStorageTotalRows>
    			<memberServerImageBlockStorageTotalSize>13409189888</memberServerImageBlockStorageTotalSize>
    		</memberServerImage>
    	</memberServerImageList>
    </getMemberServerImageListResponse>
    ```

#### createMemberServerImage

- API명

  회원서버이미지생성

- action

  createMemberServerImage

- 설명

  회원서버이미지를 생성합니다.

- 요청 파라미터

| 파라미터명                        | 간략 설명     | 타입     | 제약                       | 필수여부 |
| ---------------------------- | --------- | ------ | ------------------------ | ---- |
| memberServerImageName        | 회원서버이미지명  | String | Min : 3, Max : 30        | No   |
| memberServerImageDescription | 회원서버이미지설명 | String | Min : 10,<br/>Max : 1000 | No   |
| serverInstanceNo             | 서버인스턴스번호  | String |                          | Yes  |

- memberServerImageName
  - 생성할 회원서버이미지명
  - default : Ncloud가 알아서 배정
- memberServerImageDescription
  - 생성할 회원서버이미지에 대한 설명
- serverInstanceNo
  - 이미지를 생성할 대상이 되는 서버인스턴스번호
  - 필수항목이며, getServerInstanceList 액션을 통해 서버인스턴스번호를 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${SERVER_API_URL}/createMemberServerImage
    ?serverInstanceNo=67953
    ```

  - 응답

    ```xml
    <createMemberServerImageResponse>
    	<requestId>303a26e1-85a9-4a0d-ba70-950282144b37</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<memberServerImageList>
    		<memberServerImage>
    			<memberServerImageNo>1756</memberServerImageNo>
    			<memberServerImageName>img-7f871658ff847d8</memberServerImageName>
    			<memberServerImageDescription />
    			<originalServerInstanceNo>67953</originalServerInstanceNo>
    			<originalServerProductCode>SPSVRSTAND000043</originalServerProductCode>
    			<originalServerName>myserver</originalServerName>
    			<originalBaseBlockStorageDiskType>
    				<code>LOCAL</code>
    				<codeName>Local storage</codeName>
    			</originalBaseBlockStorageDiskType>
    			<originalServerImageProductCode>SPSW0LINUX000032</originalServerImageProductCode>
    			<originalOsInformation>CentOS 6.3 32Bit</originalOsInformation>
    			<originalServerImageName>centos-6.3-32</originalServerImageName>
    			<memberServerImageStatusName>creating</memberServerImageStatusName>
    			<memberServerImageStatus>
    				<code>INIT</code>
    				<codeName>NSI INIT state</codeName>
    			</memberServerImageStatus>
    			<memberServerImageOperation>
    				<code>CREAT</code>
    				<codeName>NSI CREAT OP</codeName>
    			</memberServerImageOperation>
    			<memberServerImagePlatformTypeCode>
    				<code>LNX32</code>
    				<codeName>Linux 32 Bit</codeName>
    			</memberServerImagePlatformTypeCode>
    			<createDate>2014-02-18T17:22:43+0900</createDate>
    			<memberServerImageBlockStorageTotalRows>0</memberServerImageBlockStorageTotalRows>
    			<memberServerImageBlockStorageTotalSize>0</memberServerImageBlockStorageTotalSize>
    		</memberServerImage>
    	</memberServerImageList>
    </createMemberServerImageResponse>
    ```

#### deleteMemberServerImages

- API명

  회원서버이미지삭제

- action

  deleteMemberServerImages

- 설명
  - 회원서버이미지를 삭제합니다.
- 요청 파라미터

| 파라미터명                     | 간략 설명      | 타입     | 제약   | 필수여부 |
| ------------------------- | ---------- | ------ | ---- | ---- |
| memberServerImageNoList.N | 회원서버이미지리스트 | List\<String> | 중복불가 | Yes  |

- Example

- 요청

  ```
  ${SERVER_API_URL}/deleteMemberServerImages
  ?memberServerImageNoList.1=1756
  ```

- 응답

  ```xml
  <deleteMemberServerImagesResponse>
  	<requestId>b5bc0716-32e5-4edf-bf39-9eabfb2efdaf</requestId>
  	<returnCode>0</returnCode>
  	<returnMessage>success</returnMessage>
  	<totalRows>1</totalRows>
  	<memberServerImageList>
  		<memberServerImage>
  			<memberServerImageNo>1756</memberServerImageNo>
  			<memberServerImageName>img-7f871658ff847d8</memberServerImageName>
  			<memberServerImageDescription />
  			<originalServerInstanceNo>67953</originalServerInstanceNo>
  			<originalServerProductCode>SPSVRSTAND000043</originalServerProductCode>
  			<originalServerName>myserver</originalServerName>
  			<originalBaseBlockStorageDiskType>
  				<code>LOCAL</code>
  				<codeName>Local storage</codeName>
  			</originalBaseBlockStorageDiskType>
  			<originalServerImageProductCode>SPSW0LINUX000032</originalServerImageProductCode>
  			<originalOsInformation>CentOS 6.3 32Bit</originalOsInformation>
  			<originalServerImageName>centos-6.3-32</originalServerImageName>
  			<memberServerImageStatusName>terminating</memberServerImageStatusName>
  			<memberServerImageStatus>
  				<code>CREAT</code>
  				<codeName>NSI CREATED state</codeName>
  			</memberServerImageStatus>
  			<memberServerImageOperation>
  				<code>TERMT</code>
  				<codeName>NSI TERMINATE OP</codeName>
  			</memberServerImageOperation>
  			<memberServerImagePlatformTypeCode>
  				<code>LNX32</code>
  				<codeName>Linux 32 Bit</codeName>
  			</memberServerImagePlatformTypeCode>
  			<createDate>2014-02-18T17:22:43+0900</createDate>
  			<region>
  				<regionNo>1</regionNo>
  				<regionCode>KR</regionCode>
  				<regionName>KOREA</regionName>
  			</region>
  			<zone>
  				<zoneNo>3</zoneNo>
  				<zoneName>zone3</zoneName>
  				<zoneDescription>nang zone2</zoneDescription>
  			</zone>
  			<memberServerImageBlockStorageTotalRows>2</memberServerImageBlockStorageTotalRows>
  			<memberServerImageBlockStorageTotalSize>13409189888</memberServerImageBlockStorageTotalSize>
  		</memberServerImage>
  	</memberServerImageList>
  </deleteMemberServerImagesResponse>
  ```


### 블록스토리지

#### getBlockStorageInstanceList

- API명

  블록스토리지인스턴스리스트조회

- action

  getBlockStorageInstanceList

- 설명

  블록스토리지인스턴스 리스트를 조회합니다.


- 요청 파라미터

| 파라미터명                          | 간략 설명           | 타입      | 제약                            | 필수여부 |
| ------------------------------ | --------------- | ------- | ----------------------------- | ---- |
| serverInstanceNo               | 서버인스턴스번호        | String  |                               | No   |
| blockStorageInstanceNoList.N   | 블록스토리지인스턴스번호리스트 | List\<String>  |                               | No   |
| searchFilterName               | 검색할필터명          | String  |                               | No   |
| searchFilterValue              | 검색할필터값          | String  |                               | No   |
| blockStorageTypeCodeList.N     | 블록스토리지구분코드리스트   | List\<String>  | Min : 1,<br/>Max : 5          | No   |
| blockStorageInstanceStatusCode | 블록스토리지인스턴스상태코드  | String  | Min : 1,<br/>Max : 5          | No   |
| diskTypeCode                   | 디스크유형코드         | String  |                               | No   |
| diskDetailTypeCode             | 디스크유형상세코드       | String  |                               | No   |
| regionNo                       | 리전번호            | String  |                               | No   |
| zoneNo                         | ZONE번호           | String   |                               | No   |
| pageNo                         | 페이지번호           | Integer | Min : 0,<br/>Max : 2147483647 | No   |
| pageSize                       | 페이지사이즈          | Integer | Min : 0,<br/>Max : 2147483647 | No   |
| sortedBy                       | 정렬 대상           | String  |                               | No   |
| sortingOrder                   | 정렬 순서           | String  |                               | No   |

- serverInstanceNo
  - 서버인스턴스에 attach된 블록스토리지 조회 시 사용됩니다.
- blockStorageInstanceNoList.N
  - 블록스토리지인스턴스번호리스트에 해당하는 블록스토리지를 조회합니다.
- searchFilterName
  - 블록스토리지명(blockStorageName) | 연결정보(attachmentInformation) [대소문자 구분 없음]
  - 연결정보의 경우 블록스토리지명[공백]연결정보 또는 블록스토리지명:연결정보 형식으로 입력되어야 합니다.
- searchFilterValue
  - 검색 할 값
- blockStorageTypeCodeList.N
  - 블록스토리지구분코드리스트에 해당하는 블록스토리지만 조회할 수 있습니다.
  - 기본블록스토리지(BASIC) | 추가블록스토리지(SVRBS)
  - default : 기본블록스토리지(BASIC), 추가블록스토리지(SVRBS)
- blockStorageInstanceStatusCode
  - 블록스토리지인스턴스상태별로 조회가 가능합니다.
  - 입력가능한 상태는 블록스토리지인스턴스 데이터타입(BlockStorageInstance)의 블록스토리지인스턴스상태(blockStorageInstanceStatus) 값을 참고하시기 바랍니다.
- diskTypeCode
  - 디스크유형코드 구분코드
  - 네트워크 스토리지(NET) | 로컬스토리지(LOCAL)
- diskDetailTypeCode
  - 디스크유형상세 구분코드
  - 하드디스크(HDD) | SSD(SSD)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- zoneNo
  - 블록스토리지인스턴스리스트를 ZONE을 이용해 필터링 할 수 있습니다.
  - 필터를 설정하지 않으면 해당리전의 ZONE 모두가 선택됩니다.
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회 할 페이지 사이즈
- sortedBy
  - 목록 결과를 정렬할 기준 칼럼을 지정합니다.
  - 블록스토리지명(blockStorageName) | 블록스토리지인스턴스번호(blockStorageInstanceNo) [대소문자 구분 없음]
  - default : 블록스토리지인스턴스번호(blockStorageInstanceNo)
- sortingOrder
  - 목록 결과 정렬 순서를 오름차순과 내림차순 중에서 지정합니다.
  - 오름차순(ascending) | 내림차순(descending) [대소문자 구분 없음]
  - default : 오름차순(ascending)

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getBlockStorageInstanceList
    ?blockStorageInstanceStatusCode=ATTAC
    &blockStorageTypeCodeList.1=BASIC
    ```

  - 응답

    ```xml
    <getBlockStorageInstanceListResponse>
       <requestId>78128ff9-dab5-432f-af63-ae29247c14f6</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>40</totalRows>
       <blockStorageInstanceList>
          <blockStorageInstance>
             <blockStorageInstanceNo>320132</blockStorageInstanceNo>
             <serverInstanceNo>320131</serverInstanceNo>
             <serverName>svr-9ad2547efcc382a</serverName>
             <blockStorageType>
                <code>BASIC</code>
                <codeName>Basic BS</codeName>
             </blockStorageType>
             <blockStorageName>svr-9ad2547efcc382a</blockStorageName>
             <blockStorageSize>53687091200</blockStorageSize>
             <deviceName />
             <blockStorageProductCode>SPBSTBSTBS000001</blockStorageProductCode>
             <blockStorageInstanceStatus>
                <code>INIT</code>
                <codeName>Block storage INIT state</codeName>
             </blockStorageInstanceStatus>
             <blockStorageInstanceOperation>
                <code>CREAT</code>
                <codeName>Block storage CREATE OP</codeName>
             </blockStorageInstanceOperation>
             <blockStorageInstanceStatusName>creating</blockStorageInstanceStatusName>
             <createDate>2017-02-28T15:14:25+0900</createDate>
             <blockStorageInstanceDescription>svr-9ad2547efcc382a's basic storage</blockStorageInstanceDescription>
             <diskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </diskType>
             <diskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </diskDetailType>
          </blockStorageInstance>
       </blockStorageInstanceList>
    </getBlockStorageInstanceListResponse>
    ```

#### createBlockStorageInstance

- API명

  블록스토리지인스턴스생성

- action

  createBlockStorageInstance

- 설명

  블록스토리지인스턴스를 생성합니다.


- 요청 파라미터

| 파라미터명                   | 간략 설명     | 타입     | 제약                   | 필수여부 |
| ----------------------- | --------- | ------ | -------------------- | ---- |
| blockStorageName        | 블록스토리지명   | String | Min : 3, Max : 30    | No   |
| blockStorageSize        | 블록스토리지사이즈 | Long | Min : 10, Max : 1000 | Yes  |
| blockStorageDescription | 블록스토리지설명  | String | Min : 10, Max : 1000 | No   |
| serverInstanceNo        | 서버인스턴스번호  | String |                      | Yes  |
| diskDetailTypeCode      | 디스크유형상세코드 | String |                      | Yes  |

- blockStorageName
  - 생성할 블록스토리지명
  - default : Ncloud가 알아서 배정
- blockStorageSize
  - 생성할 블록스토리지 사이즈를 입력합니다. GB 단위로 입력이 가능하고, 최대 1000GB 까지만 입력할 수 있습니다.
- blockStorageDescription
  - 블록스토리지설명
- serverInstanceNo
  - attach할 서버인스턴스번호
  - 필수항목이며, getServerInstanceList 액션을 통해 서버인스턴스번호를 획득할 수 있습니다.
- diskDetailTypeCode
  - 하드디스크(HDD)와 SSD(SSD) 중, 선택 가능합니다.
  - default : HDD

- Example

  - 요청

    ```
    ${SERVER_API_URL}/createBlockStorageInstance
    ?blockStorageSize=10
    &serverInstanceNo=67953
    ```

  - 응답

    ```xml
    <createBlockStorageInstanceResponse>
       <requestId>45d8b5bb-a2d7-4404-87a3-d04ad9efb4aa</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>1</totalRows>
       <blockStorageInstanceList>
          <blockStorageInstance>
             <blockStorageInstanceNo>340846</blockStorageInstanceNo>
             <serverInstanceNo>340837</serverInstanceNo>
             <serverName>jin-good12</serverName>
             <blockStorageType>
                <code>SVRBS</code>
                <codeName>Server BS</codeName>
             </blockStorageType>
             <blockStorageName>bst-9b467cb6510c782</blockStorageName>
             <blockStorageSize>10737418240</blockStorageSize>
             <deviceName />
             <blockStorageProductCode>SPBSTBSTAD000002</blockStorageProductCode>
             <blockStorageInstanceStatus>
                <code>INIT</code>
                <codeName>Block storage INIT state</codeName>
             </blockStorageInstanceStatus>
             <blockStorageInstanceOperation>
                <code>NULL</code>
                <codeName>Block Storage NULLOP</codeName>
             </blockStorageInstanceOperation>
             <blockStorageInstanceStatusName>initialized</blockStorageInstanceStatusName>
             <createDate>2017-07-27T04:23:39+0900</createDate>
             <blockStorageInstanceDescription />
             <diskType>
                <code>NET</code>
                <codeName>Network Storage</codeName>
             </diskType>
             <diskDetailType>
                <code>HDD</code>
                <codeName>HDD</codeName>
             </diskDetailType>
          </blockStorageInstance>
       </blockStorageInstanceList>
    </createBlockStorageInstanceResponse>
    ```


#### deleteBlockStorageInstances

- API명

  블록스토리지인스턴스삭제

- action

  deleteBlockStorageInstances

- 설명

  블록스토리지인스턴스를 삭제합니다.

  detach 후 삭제를 진행합니다.


- 요청 파라미터

| 파라미터명                        | 간략 설명           | 타입     | 제약   | 필수여부 |
| ---------------------------- | --------------- | ------ | ---- | ---- |
| blockStorageInstanceNoList.N | 블록스토리지인스턴스번호리스트 | List\<String> | 중복불가 | Yes  |

- blockStorageInstanceNoList.N
  - 삭제할 블록스토리지인스턴스번호 리스트
  - getBlockStorageInstanceList 액션을 통해서 획득할 수 있습니다.

- Example

  - 요청

  ```
  ${SERVER_API_URL}/deleteBlockStorageInstances
  ?blockStorageInstanceNoList.1=340846
  ```

  - 응답

  ```xml
  <deleteBlockStorageInstancesResponse>
     <requestId>f7ccf579-d8ec-4e9e-930a-567e38cb286c</requestId>
     <returnCode>0</returnCode>
     <returnMessage>success</returnMessage>
     <totalRows>1</totalRows>
     <blockStorageInstanceList>
        <blockStorageInstance>
           <blockStorageInstanceNo>340846</blockStorageInstanceNo>
           <serverInstanceNo>340837</serverInstanceNo>
           <serverName>jin-good12</serverName>
           <blockStorageType>
              <code>SVRBS</code>
              <codeName>Server BS</codeName>
           </blockStorageType>
           <blockStorageName>bst-9b467cb6510c782</blockStorageName>
           <blockStorageSize>10737418240</blockStorageSize>
           <deviceName>/dev/xvdb</deviceName>
           <blockStorageProductCode>SPBSTBSTAD000002</blockStorageProductCode>
           <blockStorageInstanceStatus>
              <code>ATTAC</code>
              <codeName>Block storage ATTACHED state</codeName>
           </blockStorageInstanceStatus>
           <blockStorageInstanceOperation>
              <code>DETAC</code>
              <codeName>Block Storage RESTART OP</codeName>
           </blockStorageInstanceOperation>
           <blockStorageInstanceStatusName>detaching</blockStorageInstanceStatusName>
           <createDate>2017-07-27T04:23:39+0900</createDate>
           <blockStorageInstanceDescription />
           <diskType>
              <code>NET</code>
              <codeName>Network Storage</codeName>
           </diskType>
           <diskDetailType>
              <code>HDD</code>
              <codeName>HDD</codeName>
           </diskDetailType>
        </blockStorageInstance>
     </blockStorageInstanceList>
  </deleteBlockStorageInstancesResponse>
  ```

#### createBlockStorageSnapshotInstance

- API명

  블록스토리지스냅샷인스턴스리스트조회

- action

  createBlockStorageSnapshotInstance

- 설명

  블록스토리지스냅샷인스턴스를 생성합니다.


- 요청 파라미터

| 파라미터명                      | 간략 설명                | 타입   | 제약                 | 필수여부 |
| ------------------------------- | -------------------------| ------ | -------------------- | -------- |
| blockStorageInstanceNo          | 블록스토리지인스턴스번호 | String | 중복불가             | Yes      |
| blockStorageSnapshotName        | 블록스토리지스냅샷이름   | String | Min : 3,  Max : 30   | No       |
| blockStorageSnapshotDescription | 블록스토리지스냅샷설명   | String | Min : 10, Max : 1000 | No       |

- blockStorageInstanceNo
  - 블록스토리지스냅샷을 생성할 블록스토리지인스턴스번호
- blockStorageSnapshotName
  - 생성할 블록스토리지스냅샷 이름
  - default : Ncloud에서 기본값으로 할당
- blockStorageSnapshotDescription
  - 생성할 블록스토리지스냅샷 설명

- Example

  - 요청

    ```
    ${SERVER_API_URL}/createBlockStorageSnapshotInstance
    ```

  - 응답

    ```xml
	<createBlockStorageSnapshotInstanceResponse>
	   <script />
	   <requestId>8ee82b50-bb6c-428e-bd1a-55af5864a1b2</requestId>
	   <returnCode>0</returnCode>
	   <returnMessage>success</returnMessage>
	   <totalRows>1</totalRows>
	   <blockStorageSnapshotInstanceList>
	      <blockStorageSnapshot>
		 <blockStorageSnapshotInstanceNo>694783</blockStorageSnapshotInstanceNo>
		 <blockStorageSnapshotName>snap1644516a9a5</blockStorageSnapshotName>
		 <blockStorageSnapshotVolumeSize>53687091200</blockStorageSnapshotVolumeSize>
		 <originalBlockStorageInstanceNo>694553</originalBlockStorageInstanceNo>
		 <originalBlockStorageName>s-5ds0yzequgdxx</originalBlockStorageName>
		 <blockStorageSnapshotInstanceStatus>
		    <code>INIT</code>
		    <codeName>Block storage INIT state</codeName>
		 </blockStorageSnapshotInstanceStatus>
		 <blockStorageSnapshotInstanceOperation>
		    <code>NULL</code>
		    <codeName>Block Storage NULLOP</codeName>
		 </blockStorageSnapshotInstanceOperation>
		 <blockStorageSnapshotInstanceStatusName>initialized</blockStorageSnapshotInstanceStatusName>
		 <createDate>2018-06-28T15:31:10+0900</createDate>
		 <blockStorageSnapshotInstanceDescription />
		 <serverImageProductCode>SPSW0LINUX000046</serverImageProductCode>
		 <osInformation>CentOS 7.3 (64-bit)</osInformation>
	      </blockStorageSnapshot>
	   </blockStorageSnapshotInstanceList>
	</createBlockStorageSnapshotInstanceResponse>
    ```

#### deleteBlockStorageSnapshotInstances

- API명

  블록스토리지스냅샷인스턴스삭제

- action

  deleteBlockStorageSnapshotInstances

- 설명

  블록스토리지스냅샷인스턴스를 삭제합니다.


- 요청 파라미터

| 파라미터명                         | 간략설명                             | Type        | 제약     | 필수여부|
| ---------------------------------- | ------------------------------------ | ----------- | -------- | ------- |
| blockStorageSnapshotInstanceNoList | 블록스토리지스냅샷인스턴스번호리스트 | List\<String>| 중복불가 | Yes     |

- blockStorageSnapshotInstanceNoList
  - 삭제할 블록스토리지스냅샷인스턴스번호 리스트

- Example

  - 요청

    ```
    ${SERVER_API_URL}/deleteBlockStorageSnapshotInstances
    ```

  - 응답

    ```xml
	<deleteBlockStorageSnapshotInstancesResponse>
	   <script />
	   <requestId>15104c45-243f-4e98-8841-4cff02e08bb6</requestId>
	   <returnCode>0</returnCode>
	   <returnMessage>success</returnMessage>
	   <totalRows>1</totalRows>
	   <blockStorageSnapshotInstanceList>
	      <blockStorageSnapshot>
		 <blockStorageSnapshotInstanceNo>693535</blockStorageSnapshotInstanceNo>
		 <blockStorageSnapshotName>snap164355fe5f4</blockStorageSnapshotName>
		 <blockStorageSnapshotVolumeSize>53687091200</blockStorageSnapshotVolumeSize>
		 <originalBlockStorageInstanceNo>691658</originalBlockStorageInstanceNo>
		 <originalBlockStorageName>ms-ad-test-01</originalBlockStorageName>
		 <blockStorageSnapshotInstanceStatus>
		    <code>CREAT</code>
		    <codeName>Block storage CREATED state</codeName>
		 </blockStorageSnapshotInstanceStatus>
		 <blockStorageSnapshotInstanceOperation>
		    <code>TERMT</code>
		    <codeName>Block Storage TERMINATE OP</codeName>
		 </blockStorageSnapshotInstanceOperation>
		 <blockStorageSnapshotInstanceStatusName>terminating</blockStorageSnapshotInstanceStatusName>
		 <createDate>2018-06-25T14:17:14+0900</createDate>
		 <blockStorageSnapshotInstanceDescription />
		 <serverImageProductCode>SPSW0WINNTEN0016</serverImageProductCode>
		 <osInformation>Windows Server 2016 (64-bit) English Edition</osInformation>
	      </blockStorageSnapshot>
	   </blockStorageSnapshotInstanceList>
	</deleteBlockStorageSnapshotInstancesResponse>
    ```

#### getBlockStorageSnapshotInstanceList

- API명

  블록스토리지스냅샷인스턴스리스트조회

- action

  getBlockStorageSnapshotInstanceList

- 설명

  블록스토리지스냅샷인스턴스리스트를 조회합니다.


- 요청 파라미터

| 파라미터명    | 간략 설명  | 타입     | 제약                        | 필수여부 |
| -------- | ------ | ------ | ------------------------- | ---- |
| blockStorageSnapshotInstanceNoList | 블록스토리지스냅샷인스턴스번호리스트 | List\<String> | 중복불가                  | No      |
| originalBlockStorageInstanceNoList | 원본블록스토리지인스턴스번호리스트   | List\<String> | 중복불가                  | No      |
| regionNo | 리전번호   | String |                           | No   |
| pageNo   | 페이지번호  | Integer | Min : 0, Max : 2147483647 | No   |
| pageSize | 페이지사이즈 | Integer | Min : 0, Max : 2147483647 | No   |

- blockStorageSnapshotInstanceNoList
  - 블록스토리지스냅샷인스턴스번호리스트에 해당하는 블록스토리지스탭샷을 조회합니다.
- originalBlockStorageInstanceNoList
  - 원본블록스토리지인스턴스번호리스트에 해당하는 블록스토리지스냅샷을 조회합니다.
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회할 페이지 사이즈

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getBlockStorageSnapshotInstanceList
    ```

  - 응답

    ```xml
    <getBlockStorageSnapshotInstanceListResponse>
       <requestId>78ca2d57-d729-4077-b0ff-ce35248b71de</requestId>
       <returnCode>0</returnCode>
       <returnMessage>success</returnMessage>
       <totalRows>3</totalRows>
       <blockStorageSnapshotInstanceList>
          <blockStorageSnapshot>
             <blockStorageSnapshotInstanceNo>334118</blockStorageSnapshotInstanceNo>
             <blockStorageSnapshotName>s0615bc</blockStorageSnapshotName>
             <blockStorageSnapshotVolumeSize>53687091200</blockStorageSnapshotVolumeSize>
             <originalBlockStorageInstanceNo>334105</originalBlockStorageInstanceNo>
             <originalBlockStorageName>x0627</originalBlockStorageName>
             <blockStorageSnapshotInstanceStatus>
                <code>CREAT</code>
                <codeName>Block storage CREATED state</codeName>
             </blockStorageSnapshotInstanceStatus>
             <blockStorageSnapshotInstanceOperation>
                <code>NULL</code>
                <codeName>Block Storage NULLOP</codeName>
             </blockStorageSnapshotInstanceOperation>
             <createDate>2017-06-27T18:56:42+0900</createDate>
             <blockStorageSnapshotInstanceDescription />
             <serverImageProductCode>SPSW0WINNT000016</serverImageProductCode>
             <osInformation>Windows Server 2016 (64-bit)</osInformation>
          </blockStorageSnapshot>
       </blockStorageSnapshotInstanceList>
    </getBlockStorageSnapshotInstanceListResponse>
    ```


### 공인IP

#### getPublicIpInstanceList

- API명

  공인IP인스턴스리스트조회

- action

  getPublicIpInstanceList

- 설명

  공인IP인스턴스 리스트를 조회합니다.
  페이징 처리가 가능합니다.

- 요청 파라미터

| 파라미터명                    | 간략 설명         | 타입      | 제약                            | 필수여부 |
| ------------------------ | ------------- | ------- | ----------------------------- | ---- |
| isAssociated             | 할당여부          | Boolean |                               | No   |
| publicIpInstanceNoList.N | 공인IP인스턴스번호리스트 | String  | 중복불가                          | No   |
| publicIpList.N           | 공인IP리스트       | String  | Min : 5, Max : 15             | No   |
| searchFilterName         | 검색할필터명        | String  |                               | No   |
| searchFilterValue        | 검색할필터값        | String  |                               | No   |
| internetLineTypeCode     | 인터넷라인구분코드     | String  | Min : 1, Max : 5              | No   |
| regionNo                 | 리전번호          | String  |                               | No   |
| zoneNo                   | ZONE번호          | String  |                               | No       |
| pageNo                   | 페이지번호         | Integer | Min : 0,<br/>Max : 2147483647 | No   |
| pageSize                 | 페이지사이즈        | Integer | Min : 0,<br/>Max : 2147483647 | No   |
| sortedBy                 | 정렬 대상         | String  |                               | No   |
| sortingOrder             | 정렬 순서         | String  |                               | No   |

- isAssociated
  - 할당된 공인IP, 할당되지 않은 공인IP를 조회할 수 있습니다.
- publicIpInstanceNoList.N
  - 조회할 공인IP인스턴스번호 리스트
- publicIpList.N
  - 조회할 공인IP 리스트
- searchFilterName
  - 공인아이피(publicIp) | 할당된서버명(associatedServerName)
- searchFilterValue
  - 조회할 값
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- pageNo
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- zoneNo
  - 공인IP인스턴스리스트를 ZONE을 이용해 필터링 할 수 있습니다.
  - 필터를 설정하지 않으면 해당리전의 ZONE에 속한 공인IP리스트가 모두 선택됩니다.
- pageSize
  - 한 페이지에서 조회 할 페이지 사이즈
- sortedBy
  - 목록 결과를 정렬할 기준 칼럼을 지정합니다.
  - 공인IP(publicIp) | 공인IP인스턴스번호(publicIpInstanceNo) [대소문자 구분 없음]
  - default : 공인IP인스턴스번호(publicIpInstanceNo)
- sortingOrder
  - 목록 결과 정렬 순서를 오름차순과 내림차순 중에서 지정합니다.
  - 오름차순(ascending) | 내림차순(descending) [대소문자 구분 없음]
  - default : 오름차순(ascending)

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getPublicIpInstanceList
    ```

  - 응답

    ```xml
    <getPublicIpInstanceListResponse>
    	<requestId>98275c8a-0865-4c8f-8273-80878b42704c</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>2</totalRows>
    	<publicIpInstanceList>
    		<publicIpInstance>
    			<publicIpInstanceNo>67653</publicIpInstanceNo>
    			<publicIp>192.168.200.156</publicIp>
    			<publicIpDescription>기본 제공 공인 아이피</publicIpDescription>
    			<createDate>2014-02-06T15:21:41+0900</createDate>
    			<internetLineType>
    				<code>PUBLC</code>
    				<codeName>Public</codeName>
    			</internetLineType>
    			<publicIpInstanceStatusName>used</publicIpInstanceStatusName>
    			<publicIpInstanceStatus>
    				<code>USED</code>
    				<codeName>NET USED state</codeName>
    			</publicIpInstanceStatus>
    			<publicIpInstanceOperation>
    				<code>NULL</code>
    				<codeName>NET NULL OP</codeName>
    			</publicIpInstanceOperation>
    			<publicIpKindType>
    				<code>DFLT</code>
    				<codeName>Default</codeName>
    			</publicIpKindType>
    			<serverInstanceAssociatedWithPublicIp>
    				<serverInstanceNo>67920</serverInstanceNo>
    				<serverName>svr-7f86d7cf2279599</serverName>
    				<serverDescription>Auto scaling group 'asg-0212' 소속의 자동 생성된 서버</serverDescription>
    				<cpuCount>2</cpuCount>
    				<memorySize>4294967296</memorySize>
    				<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    				<platformType>
    					<code>LNX32</code>
    					<codeName>Linux 32 Bit</codeName>
    				</platformType>
    				<loginKeyName>yh-nang-test</loginKeyName>
    				<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    				<publicIp>192.168.200.156</publicIp>
    				<privateIp>10.101.6.75</privateIp>
    				<serverImageName>centos-5.7-32-cnc1</serverImageName>
    				<serverInstanceStatus>
    					<code>RUN</code>
    					<codeName>Server run state</codeName>
    				</serverInstanceStatus>
    				<serverInstanceOperation>
    					<code>NULL</code>
    					<codeName>Server NULL OP</codeName>
    				</serverInstanceOperation>
    				<serverInstanceStatusName>running</serverInstanceStatusName>
    				<createDate>2014-02-17T12:30:21+0900</createDate>
    				<uptime>2014-02-17T13:55:03+0900</uptime>
    				<serverImageProductCode>SPSW0LINUX000009</serverImageProductCode>
    				<serverProductCode>SPSVRSTAND000043</serverProductCode>
    				<isProtectServerTermination>false</isProtectServerTermination>
    				<portForwardingPublicIp />
    				<zone>
    					<zoneNo>2</zoneNo>
    					<zoneName>zone2</zoneName>
    					<zoneDescription>nang zone</zoneDescription>
    				</zone>
    				<baseBlockStorageDiskType>
    					<code>LOCAL</code>
    					<codeName>Local storage</codeName>
    				</baseBlockStorageDiskType>
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
    			</serverInstanceAssociatedWithPublicIp>
    		</publicIpInstance>
    		<publicIpInstance>
    			<publicIpInstanceNo>68002</publicIpInstanceNo>
    			<publicIp>192.168.200.195</publicIp>
    			<publicIpDescription />
    			<createDate>2014-02-18T17:42:23+0900</createDate>
    			<publicIpInstanceStatusName>created</publicIpInstanceStatusName>
    			<publicIpInstanceStatus>
    				<code>CREAT</code>
    				<codeName>NET CREATE state</codeName>
    			</publicIpInstanceStatus>
    			<publicIpInstanceOperation>
    				<code>NULL</code>
    				<codeName>NET NULL OP</codeName>
    			</publicIpInstanceOperation>
    			<publicIpKindType>
    				<code>GEN</code>
    				<codeName>General</codeName>
    			</publicIpKindType>
    			<serverInstanceAssociatedWithPublicIp />
    		</publicIpInstance>
    	</publicIpInstanceList>
    </getPublicIpInstanceListResponse>
    ```

#### getPublicIpTargetServerInstanceList

- API명

  공인IP할당(가능)서버인스턴스리스트조회

- action

  getPublicIpTargetServerInstanceList

- 설명

  공인IP할당(가능)서버인스턴스 리스트를 조회합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명     | 타입     | 제약               | 필수여부 |
| -------------------- | --------- | ------ | ---------------- | ---- |
| internetLineTypeCode | 인터넷라인구분코드 | String | Min : 1, Max : 5 | No   |
| regionNo             | 리전번호      | String |                  | No   |
| zoneNo               | ZONE번호      | String  |                | No       |

- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getPublicIpTargetServerInstanceList
    ?serverInstanceNo=67953
    ```

  - 응답

    ```xml
    <getPublicIpTargetServerInstanceListResponse>
    	<requestId>fc0a990d-1536-4285-a6cb-d2a4cc203b52</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>3</totalRows>
    	<serverInstanceList>
    		<serverInstance>
    			<serverInstanceNo>67943</serverInstanceNo>
    			<serverName>svr-7f86d867d343949</serverName>
    			<serverDescription>Auto scaling group 'asg-0212' 소속의 자동 생성된 서버</serverDescription>
    			<cpuCount>2</cpuCount>
    			<memorySize>4294967296</memorySize>
    			<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    			<platformType>
    				<code>LNX32</code>
    				<codeName>Linux 32 Bit</codeName>
    			</platformType>
    			<loginKeyName>yh-nang-test</loginKeyName>
    			<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    			<publicIp />
    			<privateIp>10.101.5.109</privateIp>
    			<serverImageName>centos-5.7-32-cnc1</serverImageName>
    			<serverInstanceStatus>
    				<code>RUN</code>
    				<codeName>Server run state</codeName>
    			</serverInstanceStatus>
    			<serverInstanceOperation>
    				<code>NULL</code>
    				<codeName>Server NULL OP</codeName>
    			</serverInstanceOperation>
    			<serverInstanceStatusName>running</serverInstanceStatusName>
    			<createDate>2014-02-17T13:30:28+0900</createDate>
    			<uptime>2014-02-17T13:37:30+0900</uptime>
    			<serverImageProductCode>SPSW0LINUX000009</serverImageProductCode>
    			<serverProductCode>SPSVRSTAND000043</serverProductCode>
    			<isProtectServerTermination>false</isProtectServerTermination>
    			<portForwardingPublicIp />
    			<zone>
    				<zoneNo>3</zoneNo>
    				<zoneName>zone3</zoneName>
    				<zoneDescription>nang zone2</zoneDescription>
    			</zone>
    			<region>
    				<regionNo>1</regionNo>
    				<regionCode>KR</regionCode>
    				<regionName>KOREA</regionName>
    			</region>
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
    		…
    	</serverInstanceList>
    </getPublicIpTargetServerInstanceListResponse>
    ```

#### createPublicIpInstance

- API명

  공인IP인스턴스생성

- action

  createPublicIpInstance

- 설명

  공인IP인스턴스를 생성합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명     | 타입     | 제약                   | 필수여부 |
| -------------------- | --------- | ------ | -------------------- | ---- |
| serverInstanceNo     | 서버인스턴스번호  | String |                      | No   |
| publicIpDescription  | 공인IP설명    | String | Min : 10, Max : 1000 | No   |
| internetLineTypeCode | 인터넷라인구분코드 | String | Min : 1, Max : 5     | No   |
| regionNo             | 리전번호           | String |                      | No       |
| zoneNo               | ZONE번호           | String |                      | No       |
- serverInstanceNo
  - 공인IP를 생성후 할당할 서버인스턴스번호
  - getPublicIpTargetServerInstanceList 액션을 통해 획득할 수 있습니다.
- publicIpDescription
  - 공인IP설명
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
  - default : PUBLC(Public)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- zoneNo
  - 공인 IP가 생설될 ZONE을 결정할 수 있습니다.
  - getZoneList 액션을 통해서 획득할 수 있습니다.
  - default : 해당리전의 첫번째 ZONE을 선택

- Example

  - 요청

    ```
    ${SERVER_API_URL}/createPublicIpInstance
    ?serverInstanceNo=67953
    ```

  - 응답

    ```xml
    <createPublicIpInstanceResponse>
    	<requestId>f1a120a8-c5b3-4b2f-b672-9f4b40f4d8a4</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<publicIpInstanceList>
    		<publicIpInstance>
    			<publicIpInstanceNo>68003</publicIpInstanceNo>
    			<publicIp>192.168.200.198</publicIp>
    			<publicIpDescription />
    			<createDate>2014-02-18T17:50:05+0900</createDate>
    			<internetLineType>
    				<code>PUBLC</code>
    				<codeName>Public</codeName>
    			</internetLineType>
    			<publicIpInstanceStatusName>using</publicIpInstanceStatusName>
    			<publicIpInstanceStatus>
    				<code>CREAT</code>
    				<codeName>NET CREATE state</codeName>
    			</publicIpInstanceStatus>
    			<publicIpInstanceOperation>
    				<code>USE</code>
    				<codeName>NET USE OP</codeName>
    			</publicIpInstanceOperation>
    			<publicIpKindType>
    				<code>GEN</code>
    				<codeName>General</codeName>
    			</publicIpKindType>
    			<serverInstanceAssociatedWithPublicIp>
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
    				<publicIp>192.168.200.198</publicIp>
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
    			</serverInstanceAssociatedWithPublicIp>
    		</publicIpInstance>
    	</publicIpInstanceList>
    </createPublicIpInstanceResponse>
    ```

#### associatePublicIpWithServerInstance

- API명

  공인IP를서버인스턴스에할당

- action

  associatePublicIpWithServerInstance

- 설명

  - 공인IP를 서버인스턴스에 할당합니다.

- 요청 파라미터

| 파라미터명              | 간략 설명      | 타입     | 제약   | 필수여부 |
| ------------------ | ---------- | ------ | ---- | ---- |
| publicIpInstanceNo | 공인IP인스턴스번호 | String |      | Yes  |
| serverInstanceNo   | 서버인스턴스번호   | String |      | Yes  |

- publicIpInstanceNo
  - 할당할 공인IP인스턴스번호
- serverInstanceNo
  - 할당할 서버인스턴스번호
  - getPublicIpTargetServerInstanceList 액션을 통해 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${SERVER_API_URL}/associatePublicIpWithServerInstance
    ?publicIpInstanceNo=68002
    &serverInstanceNo=67953
    ```

  - 응답

    ```xml
    <associatePublicIpWithServerInstanceResponse>
    	<requestId>9b87c1c5-416f-442f-8f11-74e34ba75999</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<publicIpInstanceList>
    		<publicIpInstance>
    			<publicIpInstanceNo>68002</publicIpInstanceNo>
    			<publicIp>192.168.200.195</publicIp>
    			<publicIpDescription />
    			<createDate>2014-02-18T17:42:23+0900</createDate>
    			<internetLineType>
    				<code>PUBLC</code>
    				<codeName>Public</codeName>
    			</internetLineType>
    			<publicIpInstanceStatusName>using</publicIpInstanceStatusName>
    			<publicIpInstanceStatus>
    				<code>CREAT</code>
    				<codeName>NET CREATE state</codeName>
    			</publicIpInstanceStatus>
    			<publicIpInstanceOperation>
    				<code>USE</code>
    				<codeName>NET USE OP</codeName>
    			</publicIpInstanceOperation>
    			<publicIpKindType>
    				<code>GEN</code>
    				<codeName>General</codeName>
    			</publicIpKindType>
    			<serverInstanceAssociatedWithPublicIp>
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
    				<publicIp>192.168.200.195</publicIp>
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
    			</serverInstanceAssociatedWithPublicIp>
    		</publicIpInstance>
    	</publicIpInstanceList>
    </associatePublicIpWithServerInstanceResponse>
    ```

#### disassociatePublicIpFromServerInstance

- API명

  공인IP를서버인스턴스에할당해제

- action

  disassociatePublicIpFromServerInstance

- 설명
  - 공인IP를 서버인스턴스에 할당해제 합니다.
- 요청 파라미터

| 파라미터명              | 간략 설명      | 타입     | 제약   | 필수여부 |
| ------------------ | ---------- | ------ | ---- | ---- |
| publicIpInstanceNo | 공인IP인스턴스번호 | String |      | Yes  |

- publicIpInstanceNo
  - 할당 해제할 공인IP인스턴스번호

- Example

  - 요청

    ```
    ${SERVER_API_URL}/disassociatePublicIpFromServerInstance
    ?publicIpInstanceNo=68002
    ```

  - 응답

    ```XML
    <disassociatePublicIpFromServerInstanceResponse>
    	<requestId>cc6072ce-4ac4-4606-abd4-7b0e226918a7</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<publicIpInstanceList>
    		<publicIpInstance>
    			<publicIpInstanceNo>68002</publicIpInstanceNo>
    			<publicIp>192.168.200.195</publicIp>
    			<publicIpDescription />
    			<createDate>2014-02-18T17:42:23+0900</createDate>
    			<internetLineType>
    				<code>PUBLC</code>
    				<codeName>Public</codeName>
    			</internetLineType>
    			<publicIpInstanceStatusName>disusing</publicIpInstanceStatusName>
    			<publicIpInstanceStatus>
    				<code>USED</code>
    				<codeName>NET USED state</codeName>
    			</publicIpInstanceStatus>
    			<publicIpInstanceOperation>
    				<code>DISUS</code>
    				<codeName>NET DISUSE OP</codeName>
    			</publicIpInstanceOperation>
    			<publicIpKindType>
    				<code>GEN</code>
    				<codeName>General</codeName>
    			</publicIpKindType>
    			<serverInstanceAssociatedWithPublicIp>
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
    				<publicIp>192.168.200.195</publicIp>
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
    			</serverInstanceAssociatedWithPublicIp>
    		</publicIpInstance>
    	</publicIpInstanceList>
    </disassociatePublicIpFromServerInstanceResponse>
    ```

#### deletePublicIpInstances

- API명

  공인IP인스턴스삭제

- action

  deletePublicIpInstances

- 설명
  - 공인IP인스턴스를 삭제합니다.
- 요청 파라미터

| 파라미터명                    | 간략 설명         | 타입     | 제약   | 필수여부 |
| ------------------------ | ------------- | ------ | ---- | ---- |
| publicIpInstanceNoList.N | 공인IP인스턴스번호리스트 | List\<String> | 중복불가 | Yes  |

- publicIpInstanceNoList.N
  - 삭제할 공인IP인스턴스번호리스트
  - getPublicIpInstanceList 액션을 통해서 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${SERVER_API_URL}/deletePublicIpInstances
    ?publicIpInstanceNoList.1=68002
    ```

  - 응답

    ```xml
    <deletePublicIpInstancesResponse>
    	<requestId>72c30b26-1c10-4c1b-a6d2-4669e1899e9c</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<totalRows>1</totalRows>
    	<publicIpInstanceList>
    		<publicIpInstance>
    			<publicIpInstanceNo>68002</publicIpInstanceNo>
    			<publicIp>192.168.200.195</publicIp>
    			<publicIpDescription />
    			<createDate>2014-02-18T17:42:23+0900</createDate>
    			<internetLineType>
    				<code>PUBLC</code>
    				<codeName>Public</codeName>
    			</internetLineType>
    			<publicIpInstanceStatusName>terminated</publicIpInstanceStatusName>
    			<publicIpInstanceStatus>
    				<code>TERMT</code>
    				<codeName>NET TERMINATED state</codeName>
    			</publicIpInstanceStatus>
    			<publicIpInstanceOperation>
    				<code>NULL</code>
    				<codeName>NET NULL OP</codeName>
    			</publicIpInstanceOperation>
    			<publicIpKindType>
    				<code>GEN</code>
    				<codeName>General</codeName>
    			</publicIpKindType>
    			<serverInstanceAssociatedWithPublicIp />
    		</publicIpInstance>
    	</publicIpInstanceList>
    </deletePublicIpInstancesResponse>
    ```

#### replaceServerInstanceAssociatedWithPublicIp

- API명

  공인IP를지정된서버로교체

- action

  replaceServerInstanceAssociatedWithPublicIp

- 설명

  - 서버에 할당된 공인IP를 다른서버에 할당합니다.

- 요청 파라미터

| 파라미터명              | 간략 설명      | 타입     | 제약   | 필수여부 |
| ------------------ | ---------- | ------ | ---- | ---- |
| publicIpInstanceNo | 공인IP인스턴스번호 | String |      | Yes  |
| serverInstanceNo   | 서버인스턴스번호   | String |      | Yes  |

- publicIpInstanceNo
  - 기존서버에 할당된 공인IP인스턴스번호

- serverInstanceNo
  - 교체할 서버인스턴스번호
  - getPublicIpTargetServerInstanceList 액션을 통해 획득할 수 있습니다.

- Example

  - 요청

    ```
    ${SERVER_API_URL}/replaceServerInstanceAssociatedWithPublicIp
    ?serverInstanceNo=691083
    &publicIpInstanceNo=662308
    ```

  - 응답

    ```xml
	<replaceServerInstanceAssociatedWithPublicIpResponse>
		<requestId>82d58738-1aae-4677-982f-b194b24a683b</requestId>
		<returnCode>0</returnCode>
		<returnMessage>success</returnMessage>
		<totalRows>1</totalRows>
		<publicIpInstanceList>
			<publicIpInstanceNo>662308</publicIpInstanceNo>
			<publicIp>49.236.160.36</publicIp>
			<publicIpDescription>testfsdf</publicIpDescription>
			<createDate>2018-05-23T11:04:38+0900</createDate>
			<publicIpInstanceStatusName>changing</publicIpInstanceStatusName>
			<publicIpInstanceStatus>
				<code>USED</code>
				<codeName>NET USED state</codeName>
			</publicIpInstanceStatus>
			<publicIpInstanceOperation>
				<code>CHANG</code>
				<codeName>NET CHANGE OP</codeName>
			</publicIpInstanceOperation>
			<publicIpKindType>
				<code>GEN</code>
				<codeName>General</codeName>
			</publicIpKindType>
			<serverInstanceAssociatedWithPublicIp>
				<serverInstanceNo>691083</serverInstanceNo>
				<serverName>import-key</serverName>
				<serverDescription></serverDescription>
				<cpuCount>2</cpuCount>
				<memorySize>4294967296</memorySize>
				<baseBlockStorageSize>53687091200</baseBlockStorageSize>
				<platformType>
					<code>LNX64</code>
					<codeName>Linux 64 Bit</codeName>
				</platformType>
				<loginKeyName>import-key</loginKeyName>
				<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
				<publicIp>49.236.160.36</publicIp>
				<privateIp>10.39.3.136</privateIp>
				<serverImageName>centos-6.6-64</serverImageName>
				<serverInstanceStatus>
					<code>RUN</code>
					<codeName>Server run state</codeName>
				</serverInstanceStatus>
				<serverInstanceOperation>
					<code>NULL</code>
					<codeName>Server NULL OP</codeName>
				</serverInstanceOperation>
				<serverInstanceStatusName>running</serverInstanceStatusName>
				<createDate>2018-06-15T11:15:10+0900</createDate>
				<uptime>2018-06-15T11:15:10+0900</uptime>
				<serverImageProductCode>SPSW0LINUX000044</serverImageProductCode>
				<serverProductCode>SPSVRSSD00000003</serverProductCode>
				<isProtectServerTermination>false</isProtectServerTermination>
				<portForwardingPublicIp>49.236.160.11</portForwardingPublicIp>
				<zone>
					<zoneNo>2</zoneNo>
					<zoneName>KR-1</zoneName>
					<zoneDescription>가산 zone</zoneDescription>
					<regionNo>1</regionNo>
				</zone>
				<region>
					<regionNo>1</regionNo>
					<regionCode>KR</regionCode>
					<regionName>Korea</regionName>
				</region>
				<baseBlockStorageDiskType>
					<code>NET</code>
					<codeName>Network Storage</codeName>
				</baseBlockStorageDiskType>
				<baseBlockStorageDiskDetailType>
					<code>SSD</code>
					<codeName>SSD</codeName>
				</baseBlockStorageDiskDetailType>
				<serverInstanceType>
					<code>STAND</code>
					<codeName>Standard</codeName>
				</serverInstanceType>
				<userData></userData>
			</serverInstanceAssociatedWithPublicIp>
			<zone>
				<zoneNo>2</zoneNo>
				<zoneName>KR-1</zoneName>
				<zoneDescription>가산 zone</zoneDescription>
				<regionNo>1</regionNo>
			</zone>
		</publicIpInstanceList>
	</replaceServerInstanceAssociatedWithPublicIpResponse>
    ```

### 포트포워딩

#### getPortForwardingRuleList

- API명

  포트포워딩Rule리스트조회

- action

  getPortForwardingRuleList

- 설명

  포트포워딩룰리스트 정보를 조회합니다.

  최초에 서버를 생성하면, 계정당 하나씩 포트포워딩용 공인IP가 부여됩니다.


- 요청 파라미터

| 파라미터명                | 간략 설명     | 타입     | 제약               | 필수여부 |
| -------------------- | --------- | ------ | ---------------- | ---- |
| internetLineTypeCode | 인터넷라인구분코드 | String | Min : 1, Max : 5 | No   |
| regionNo             | 리전번호      | String |                  | No   |
| zoneNo               | ZONE번호      | String |                  | No   |
- internetLineTypeCode
  - 인터넷라인구분코드
  - PUBLC(Public), GLBL(글로벌)
  - default : PUBLC(Public)
- regionNo
  - 입력가능한 상태는 getRegionList 액션을 통해서 획득할 수 있습니다.
- zoneNo
  - getZoneList 액션을 통해서 획득할 수 있습니다.
  - default : 해당리전의 첫번째 ZONE을 선택

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getPortForwardingRuleList
    ```

  - 응답

    ```xml
    <getPortForwardingRuleListResponse>
    	<requestId>08842664-ea53-49b5-9192-7e4d165b86d6</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<portForwardingConfigurationNo>1676</portForwardingConfigurationNo>
    	<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    	<totalRows>2</totalRows>
    	<portForwardingRuleList>
    		<portForwardingRule>
    			<portForwardingExternalPort>1025</portForwardingExternalPort>
    			<portForwardingInternalPort>3389</portForwardingInternalPort>
    			<serverInstance>
    				<serverInstanceNo>274079</serverInstanceNo>
    				<serverName>pjaser-2</serverName>
    				<serverDescription />
    				<cpuCount>1</cpuCount>
    				<memorySize>2147483648</memorySize>
    				<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    				<platformType>
    					<code>WND32</code>
    					<codeName>Windows 32 Bit</codeName>
    				</platformType>
    				<loginKeyName>pja-1126</loginKeyName>
    				<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    				<publicIp />
    				<privateIp>10.101.6.101</privateIp>
    				<serverImageName>win-2008-32-R1</serverImageName>
    				<serverInstanceStatus>
    					<code>FSTOP</code>
    					<codeName>Server failure stopped state</codeName>
    				</serverInstanceStatus>
    				<serverInstanceOperation>
    					<code>NULL</code>
    					<codeName>Server NULL OP</codeName>
    				</serverInstanceOperation>
    				<serverInstanceStatusName>repairing</serverInstanceStatusName>
    				<createDate>2015-03-04T15:12:47+0900</createDate>
    				<uptime>2015-03-27T11:36:29+0900</uptime>
    				<serverImageProductCode>SPSW0WINNT000013</serverImageProductCode>
    				<serverProductCode>SPSVRSTAND000003</serverProductCode>
    				<isProtectServerTermination>false</isProtectServerTermination>
    				<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    				<portForwardingExternalPort>1025</portForwardingExternalPort>
    				<portForwardingInternalPort>3389</portForwardingInternalPort>
    				<zone>
    					<zoneNo>2</zoneNo>
    					<zoneName>nang_zone</zoneName>
    					<zoneDescription>nang zone</zoneDescription>
    				</zone>
    				<baseBlockStorageDiskType>
    					<code>NET</code>
    					<codeName>Network Storage</codeName>
    				</baseBlockStorageDiskType>
    				<userData />
    				<accessControlGroupList>
    					<accessControlGroup>
    						<accessControlGroupConfigurationNo>3321</accessControlGroupConfigurationNo>
    						<accessControlGroupName>pja-acg</accessControlGroupName>
    						<accessControlGroupDescription />
    						<isDefault>false</isDefault>
    						<createDate>2015-03-04T15:12:21+0900</createDate>
    					</accessControlGroup>
    				</accessControlGroupList>
    			</serverInstance>
    		</portForwardingRule>
    		<portForwardingRule>
    			<portForwardingExternalPort>1026</portForwardingExternalPort>
    			<portForwardingInternalPort>22</portForwardingInternalPort>
    			<serverInstance>
    				<serverInstanceNo>274317</serverInstanceNo>
    				<serverName>x0312b</serverName>
    				<serverDescription />
    				<cpuCount>1</cpuCount>
    				<memorySize>2147483648</memorySize>
    				<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    				<platformType>
    					<code>LNX64</code>
    					<codeName>Linux 64 Bit</codeName>
    				</platformType>
    				<loginKeyName>pja-1126</loginKeyName>
    				<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    				<publicIp />
    				<privateIp>10.101.6.115</privateIp>
    				<serverImageName>centos-6.3-64</serverImageName>
    				<serverInstanceStatus>
    					<code>FSTOP</code>
    					<codeName>Server failure stopped state</codeName>
    				</serverInstanceStatus>
    				<serverInstanceOperation>
    					<code>NULL</code>
    					<codeName>Server NULL OP</codeName>
    				</serverInstanceOperation>
    				<serverInstanceStatusName>repairing</serverInstanceStatusName>
    				<createDate>2015-03-12T18:29:39+0900</createDate>
    				<uptime>2015-03-13T10:08:45+0900</uptime>
    				<serverImageProductCode>SPSW0LINUX000031</serverImageProductCode>
    				<serverProductCode>SPSVRSTAND000003</serverProductCode>
    				<isProtectServerTermination>false</isProtectServerTermination>
    				<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    				<portForwardingExternalPort>1026</portForwardingExternalPort>
    				<portForwardingInternalPort>22</portForwardingInternalPort>
    				<zone>
    					<zoneNo>2</zoneNo>
    					<zoneName>nang_zone</zoneName>
    					<zoneDescription>nang zone</zoneDescription>
    				</zone>
    				<baseBlockStorageDiskType>
    					<code>NET</code>
    					<codeName>Network Storage</codeName>
    				</baseBlockStorageDiskType>
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
    		</portForwardingRule>
    	</portForwardingRuleList>
    </getPortForwardingRuleListResponse>
    ```

#### addPortForwardingRules

- API명

  포트포워딩Rule추가

- action

  addPortForwardingRules

- 설명

  포트포워딩룰을 추가합니다.

  가지고 있는 서버에 포트포워딩룰을 추가하여 포트포워딩 공인IP로 접속할 수 있습니다.

- 요청 파라미터

| 파라미터명                                    | 간략 설명                 | 타입     | 제약                   | 필수여부 |
| ---------------------------------------- | --------------------- | ------ | -------------------- | ---- |
| portForwardingConfigurationNo            | 포트포워딩설정번호             | String |                      | Yes  |
| portForwardingRuleList.N.serverInstanceNo | 포트포워딩룰리스트.N.서버인스턴스번호  | List\<String> |                      | Yes  |
| portForwardingRuleList.N.portForwardingExternalPort | 포트포워딩룰리스트.N.포트포워딩외부포트 | String | Min : 1, Max : 65534 | Yes  |
| portForwardingRuleList.N.portForwardingInternalPort | 포트포워딩룰리스트.N.포트포워딩내부포트 | String | Min : 1, Max : 65534 | Yes  |

- portForwardingConfigurationNo
  - 포트포워딩설정번호
  - 네이버 클라우드 플랫폼에서 포트포워딩을 위해 생성한 key 값
- portForwardingRuleList.N.serverInstanceNo
  - 포트포워딩을 설정한 서버인스턴스번호
- portForwardingRuleList.N.portForwardingExternalPort
  - 포트포워딩으로 접속할 외부포트
- portForwardingRuleList.N.portForwardingInternalPort
  - 포트포워딩으로 접속할 내부포트
  - 다음 포트만 입력이 가능합니다. [리눅스 : 22 | 윈도우 : 3389]

- Example

  - 요청

    ```
    ${SERVER_API_URL}/addPortForwardingRules
    ?portForwardingConfigurationNo=1676
    &portForwardingRuleList.1.serverInstanceNo=274079
    &portForwardingRuleList.1.portForwardingExternalPort=1025
    &portForwardingRuleList.1.portForwardingInternalPort=3389
    ```

  - 응답

    ```xml
    <addPortForwardingRulesResponse>
    	<requestId>943e41d1-f2b9-43a9-b308-5f12152a2f7f</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<portForwardingConfigurationNo>1676</portForwardingConfigurationNo>
    	<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    	<totalRows>2</totalRows>
    	<portForwardingRuleList>
    		<portForwardingRule>
    			<portForwardingExternalPort>1025</portForwardingExternalPort>
    			<portForwardingInternalPort>3389</portForwardingInternalPort>
    			<serverInstance>
    				<serverInstanceNo>274079</serverInstanceNo>
    				<serverName>pjaser-2</serverName>
    				<serverDescription />
    				<cpuCount>1</cpuCount>
    				<memorySize>2147483648</memorySize>
    				<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    				<platformType>
    					<code>WND32</code>
    					<codeName>Windows 32 Bit</codeName>
    				</platformType>
    				<loginKeyName>pja-1126</loginKeyName>
    				<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    				<publicIp />
    				<privateIp>10.101.6.101</privateIp>
    				<serverImageName>win-2008-32-R1</serverImageName>
    				<serverInstanceStatus>
    					<code>FSTOP</code>
    					<codeName>Server failure stopped state</codeName>
    				</serverInstanceStatus>
    				<serverInstanceOperation>
    					<code>NULL</code>
    					<codeName>Server NULL OP</codeName>
    				</serverInstanceOperation>
    				<serverInstanceStatusName>repairing</serverInstanceStatusName>
    				<createDate>2015-03-04T15:12:47+0900</createDate>
    				<uptime>2015-03-27T11:36:29+0900</uptime>
    				<serverImageProductCode>SPSW0WINNT000013</serverImageProductCode>
    				<serverProductCode>SPSVRSTAND000003</serverProductCode>
    				<isProtectServerTermination>false</isProtectServerTermination>
    				<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    				<portForwardingExternalPort>1025</portForwardingExternalPort>
    				<portForwardingInternalPort>3389</portForwardingInternalPort>
    				<zone>
    					<zoneNo>2</zoneNo>
    					<zoneName>nang_zone</zoneName>
    					<zoneDescription>nang zone</zoneDescription>
    				</zone>
    				<baseBlockStorageDiskType>
    					<code>NET</code>
    					<codeName>Network Storage</codeName>
    				</baseBlockStorageDiskType>
    				<userData />
    				<accessControlGroupList>
    					<accessControlGroup>
    						<accessControlGroupConfigurationNo>3321</accessControlGroupConfigurationNo>
    						<accessControlGroupName>pja-acg</accessControlGroupName>
    						<accessControlGroupDescription />
    						<isDefault>false</isDefault>
    						<createDate>2015-03-04T15:12:21+0900</createDate>
    					</accessControlGroup>
    				</accessControlGroupList>
    			</serverInstance>
    		</portForwardingRule>
    	</portForwardingRuleList>
    ```

#### deletePortForwardingRules

- API명

  포트포워딩Rule삭제

- action

  deletePortForwardingRules

- 설명

  포트포워딩룰을 삭제합니다.

  가지고 있는 서버에 포트포워딩룰을 삭제할 수 있습니다.

- 요청 파라미터

| 파라미터명                                    | 간략 설명                 | 타입     | 제약                   | 필수여부 |
| ---------------------------------------- | --------------------- | ------ | -------------------- | ---- |
| portForwardingConfigurationNo            | 포트포워딩설정번호             | String |                      | Yes  |
| portForwardingRuleList.N.serverInstanceNo | 포트포워딩룰리스트.N.서버인스턴스번호  | List\<String> |                      | Yes  |
| portForwardingRuleList.N.portForwardingExternalPort | 포트포워딩룰리스트.N.포트포워딩외부포트 | String | Min : 1, Max : 65534 | Yes  |
| portForwardingRuleList.N.portForwardingInternalPort | 포트포워딩룰리스트.N.포트포워딩내부포트 | String | Min : 1, Max : 65534 | Yes  |

- portForwardingConfigurationNo
  - 포트포워딩설정번호
  - 네이버 클라우드 플랫폼에서 포트포워딩을 위해 생성한 key 값
- portForwardingRuleList.N.serverInstanceNo
  - 포트포워딩을 설정한 삭제대상 서버인스턴스번호
- portForwardingRuleList.N.portForwardingExternalPort
  - 삭제대상 외부포트
- portForwardingRuleList.N.portForwardingInternalPort
  - 삭제대상 내부포트
  - 다음 포트만 입력이 가능합니다. [리눅스 : 22 | 윈도우 : 3389]

- Example

  - 요청

    ```
    ${SERVER_API_URL}/deletePortForwardingRules
    ?portForwardingConfigurationNo=1676
    &portForwardingRuleList.1.serverInstanceNo=274079
    &portForwardingRuleList.1.portForwardingExternalPort=1025
    &portForwardingRuleList.1.portForwardingInternalPort=3389
    ```

  - 응답

    ```xml
    <deletePortForwardingRulesResponse>
    	<requestId>54b32354-3acb-489c-8bdb-09a722555a75</requestId>
    	<returnCode>0</returnCode>
    	<returnMessage>success</returnMessage>
    	<portForwardingConfigurationNo>1676</portForwardingConfigurationNo>
    	<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    	<totalRows>1</totalRows>
    	<portForwardingRuleList>
    		<portForwardingRule>
    			<portForwardingExternalPort>1026</portForwardingExternalPort>
    			<portForwardingInternalPort>22</portForwardingInternalPort>
    			<serverInstance>
    				<serverInstanceNo>274317</serverInstanceNo>
    				<serverName>x0312b</serverName>
    				<serverDescription />
    				<cpuCount>1</cpuCount>
    				<memorySize>2147483648</memorySize>
    				<baseBlockStorageSize>53687091200</baseBlockStorageSize>
    				<platformType>
    					<code>LNX64</code>
    					<codeName>Linux 64 Bit</codeName>
    				</platformType>
    				<loginKeyName>pja-1126</loginKeyName>
    				<isFeeChargingMonitoring>false</isFeeChargingMonitoring>
    				<publicIp />
    				<privateIp>10.101.6.115</privateIp>
    				<serverImageName>centos-6.3-64</serverImageName>
    				<serverInstanceStatus>
    					<code>FSTOP</code>
    					<codeName>Server failure stopped state</codeName>
    				</serverInstanceStatus>
    				<serverInstanceOperation>
    					<code>NULL</code>
    					<codeName>Server NULL OP</codeName>
    				</serverInstanceOperation>
    				<serverInstanceStatusName>repairing</serverInstanceStatusName>
    				<createDate>2015-03-12T18:29:39+0900</createDate>
    				<uptime>2015-03-13T10:08:45+0900</uptime>
    				<serverImageProductCode>SPSW0LINUX000031</serverImageProductCode>
    				<serverProductCode>SPSVRSTAND000003</serverProductCode>
    				<isProtectServerTermination>false</isProtectServerTermination>
    				<portForwardingPublicIp>192.168.120.28</portForwardingPublicIp>
    				<portForwardingExternalPort>1026</portForwardingExternalPort>
    				<portForwardingInternalPort>22</portForwardingInternalPort>
    				<zone>
    					<zoneNo>2</zoneNo>
    					<zoneName>nang_zone</zoneName>
    					<zoneDescription>nang zone</zoneDescription>
    				</zone>
    				<baseBlockStorageDiskType>
    					<code>NET</code>
    					<codeName>Network Storage</codeName>
    				</baseBlockStorageDiskType>
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
    		</portForwardingRule>
    	</portForwardingRuleList>
    </deletePortForwardingRulesResponse>

### 태그

#### createInstanceTags

- API명

  인스턴스태그생성

- action

  createInstanceTags

- 설명

  인스턴스태그를 생성합니다.


- 요청 파라미터

| 파라미터명                | 간략 설명     | 타입     | 제약               | 필수여부 |
| -------------------- | --------- | ------ | ---------------- | ---- |
| instanceNoList.N | 인스턴스번호리스트 | List\<String> | 중복불가 | Yes   |
| instanceTagList.N.tagKey             | 인스턴스태그리스트. 태그키      | String |                  | Yes   |
| instanceTagList.N.tagValue               | 인스턴스태그리스트. 태그값      | String |                  | Yes   |

- instanceNoList
  - 인스턴스태그를 생성할 인스턴스번호리스트 (서버한정)
- instanceTagList.N.tagKey
  - 생성할 인스턴스태그리스트. 태그 키
- instanceTagList.N.tagValue
  - 생성할 인스턴스태그리스트. 태그 값

- Example

  - 요청

    ```
    ${SERVER_API_URL}/createInstanceTags
    ?instanceNoList=937486
    &instanceTagList.1.tagKey=peach
    &instanceTagList.1.tagValue=999999
    ```

  - 응답

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <createInstanceTagsResponse>
      <requestId>0d101bfc-1f68-45c5-aa56-e8def873233d</requestId>
      <returnCode>0</returnCode>
      <returnMessage>success</returnMessage>
      <totalRows>1</totalRows>
      <instanceTagList>
        <instanceTag>
          <instanceNo>937486</instanceNo>
          <instanceType>
            <code>SVR</code>
            <codeName>Server</codeName>
          </instanceType>
          <tagKey>peach</tagKey>
          <tagValue>999999</tagValue>
        </instanceTag>
      </instanceTagList>
    </createInstanceTagsResponse>
    ```

#### deleteInstanceTags

- API명

  인스턴스태그삭제

- action

  deleteInstanceTags

- 설명

  인스턴스태그를 삭제합니다.

- 요청 파라미터

| 파라미터명                | 간략 설명     | 타입     | 제약               | 필수여부 |
| -------------------- | --------- | ------ | ---------------- | ---- |
| instanceNoList | 인스턴스번호리스트 | List\<String> | 중복불가 | Yes   |
| instanceTagList.N.tagKey             | 인스턴스태그리스트. 태그키      | String |                  | No   |
| instanceTagList.N.tagValue             | 인스턴스태그리스트. 태그값      | String |                  | No   |

- instanceNoList
  - 인스턴스태그를 삭제할 인스턴스번호리스트 (서버한정)
- instanceTagList.N.tagKey
  - 삭제할 인스턴스태그리스트. 태그 키
- instanceTagList.N.tagValue
  - 삭제할 인스턴스태그리스트. 태그 값

- Example

  - 요청

    ```
    ${SERVER_API_URL}/deleteInstanceTags
    ?instanceNoList.1=937486
    ```

  - 응답

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <deleteInstanceTagsResponse>
      <requestId>7b6e0d85-7c10-4b3f-8686-eb3dba501146</requestId>
      <returnCode>0</returnCode>
      <returnMessage>success</returnMessage>
      <totalRows>0</totalRows>
      <instanceTagList/>
    </deleteInstanceTagsResponse>
    ```

#### getInstanceTagList

- API명

  인스턴스태그조회

- action

  getInstanceTagList

- 설명

  인스턴스태그를 조회합니다.

- 요청 파라미터

| 파라미터명                                    | 간략 설명                 | 타입     | 제약                   | 필수여부 |
| ---------------------------------------- | --------------------- | ------ | -------------------- | ---- |
| instanceNoList.N            | 인스턴스번호 리스트             | List\<String> |   중복불가                   | No  |
| tagKeyList.N | 태그 키 리스트  | List\<String> |  중복불가                    | No  |
| tagValueList.N | 태그 값 리스트 | List\<String> | 중복불가 | No  |
| pageNo | 페이지 번호 | Integer |  | No  |
| pageSize | 페이지 크기 | Integer |  | No  |

- instanceNoList
  - 인스턴스태그를 조회할 인스턴스번호 리스트 (서버한정)
- tagKeyList
  - 태그 키 리스트
- tagValueList
  - 태그 값 리스트
- pageSize
  - 건수가 많을 경우 페이지 사이즈에 해당하는 페이지 번호
- pageSize
  - 한 페이지에서 조회 할 페이지 사이즈

- Example

  - 요청

    ```
    ${SERVER_API_URL}/getInstanceTagList
    ?instanceNoList=937486
    &tagKeyList.1=gorilla
    ```

  - 응답

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <getInstanceTagListResponse>
      <requestId>bbce4209-306c-4c54-94ce-7dbd37982a76</requestId>
      <returnCode>0</returnCode>
      <returnMessage>success</returnMessage>
      <totalRows>1</totalRows>
      <instanceTagList>
        <instanceTag>
          <instanceNo>937486</instanceNo>
          <instanceType>
            <code>SVR</code>
            <codeName>Server</codeName>
          </instanceType>
          <tagKey>gorilla</tagKey>
          <tagValue>77777</tagValue>
        </instanceTag>
      </instanceTagList>
    </getInstanceTagListResponse>
    ```
