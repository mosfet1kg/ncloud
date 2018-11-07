import * as ncloud from '../src';
import * as fs from 'fs';
import * as path from 'path';

const {
  accessKey,
  secretKey,
} = require('./env.json');

const sslCert = {
  privateKey: fs.readFileSync(path.join(__dirname, './privateKey.pem')).toString(),
  publicKeyCertificate: fs.readFileSync(path.join(__dirname, './publicKeyCertificate.pem')).toString(),
  certificateChain: fs.readFileSync(path.join(__dirname, './certificateChain.pem')).toString(),
};

describe('Test IaaS LoadBalancer Method', () => {
  beforeAll(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test getLoadBalancerInstanceList', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerList = await loadBalancer.getLoadBalancerInstanceList({
        loadBalancerInstanceNoList: ['979426'],
      });
      console.log(loadBalancerList);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test getLoadBalancerTargetServerInstanceList', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerTargetServerInstanceList = await loadBalancer.getLoadBalancerTargetServerInstanceList();
      console.log(loadBalancerTargetServerInstanceList);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test changeLoadBalancerInstanceConfiguration', async (done) => {
    try {
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
          },
        ],
      });
      console.log(changeLoadBalancerInstanceConfigurationResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test createLoadBalancerInstance', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
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
          },
        ],
      });
      console.log(createLoadBalancerInstanceResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test getLoadBalancedServerInstanceList', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const getLoadBalancedServerInstanceListResponse = await loadBalancer.getLoadBalancedServerInstanceList({
        loadBalancerInstanceNo: '979426',
      });
      console.log(getLoadBalancedServerInstanceListResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test changeLoadBalancedServerInstances', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const getLoadBalancedServerInstanceListResponse = await loadBalancer.changeLoadBalancedServerInstances({
        loadBalancerInstanceNo: '1030011',
        serverInstanceNoList: ['979072'],
      });
      console.log(getLoadBalancedServerInstanceListResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test deleteLoadBalancerInstances', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const getLoadBalancedServerInstanceListResponse = await loadBalancer.deleteLoadBalancerInstances({
        loadBalancerInstanceNoList: ['1030011'],
      });
      console.log(getLoadBalancedServerInstanceListResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test getLoadBalancerSslCertificateList', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const loadBalancer = client.IaaS.loadBalancer();
      const getLoadBalancerSslCertificateListResponse = await loadBalancer.getLoadBalancerSslCertificateList({
      });
      console.log(getLoadBalancerSslCertificateListResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });

  test('Test addLoadBalancerSslCertificate', async (done) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        regionNo: '1',
      });

      const certificateName = 'my-test1';
      const {
        privateKey,
        publicKeyCertificate,
        certificateChain,
      } = sslCert as any;

      const loadBalancer = client.IaaS.loadBalancer();
      const addLoadBalancerSslCertificateResponse = await loadBalancer.addLoadBalancerSslCertificate({
        certificateName,
        privateKey,
        publicKeyCertificate,
        certificateChain,
      });

      console.log(addLoadBalancerSslCertificateResponse);

      done();
    } catch (e) {
      console.log(e);
      done.fail(e);
    }
  });
});
