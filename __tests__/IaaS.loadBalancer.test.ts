import * as ncloud from '../src'

const {
  accessKey,
  secretKey,
} = require('./env.json');

const sslCert = require('./sslCert.json');

describe('Test IaaS LoadBalancer Method', function( ){
  beforeAll(function (){
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    console.log('set Interval');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test getLoadBalancerInstanceList', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerList = await loadBalancer.getLoadBalancerInstanceList();
      console.log( loadBalancerList );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });


  test('Test getLoadBalancerTargetServerInstanceList', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerTargetServerInstanceList = await loadBalancer.getLoadBalancerTargetServerInstanceList();
      console.log( loadBalancerTargetServerInstanceList );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test changeLoadBalancerInstanceConfiguration', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
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
      console.log( changeLoadBalancerInstanceConfigurationResponse );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test createLoadBalancerInstance', async ( done ) => {
    try {
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
      console.log( createLoadBalancerInstanceResponse );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test getLoadBalancedServerInstanceList', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const getLoadBalancedServerInstanceListResponse = await loadBalancer.getLoadBalancedServerInstanceList({
        loadBalancerInstanceNo: '1030011',
      });
      console.log( getLoadBalancedServerInstanceListResponse );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test changeLoadBalancedServerInstances', async ( done ) => {
    try {
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
      console.log( getLoadBalancedServerInstanceListResponse );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test deleteLoadBalancerInstances', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const getLoadBalancedServerInstanceListResponse = await loadBalancer.deleteLoadBalancerInstances({
        loadBalancerInstanceNoList: ['1030011'],
      });
      console.log( getLoadBalancedServerInstanceListResponse );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });

  test('Test addLoadBalancerSslCertificate', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: "1",
      });

      const certificateName = 'my-test';
      const {
        privateKey,
        publicKeyCertificate,
        certificateChain,
      } = sslCert;

      const loadBalancer = client.IaaS.loadBalancer();
      const addLoadBalancerSslCertificateResponse = await loadBalancer.addLoadBalancerSslCertificate({
        certificateName,
        privateKey,
        publicKeyCertificate,
        certificateChain
      });

      console.log( addLoadBalancerSslCertificateResponse );

      done();
    } catch (e) {
      console.log( e );
      done.fail(e);
    }
  });
});

