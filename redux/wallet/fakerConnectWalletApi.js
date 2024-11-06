const address = 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N';

export const timeout = time =>
  new Promise(resolve => setTimeout(resolve, time));

const fakerConnectWalletApi = async () => {
  await timeout(2000);
  return { data: { address } };
};

export default fakerConnectWalletApi;
