type Token = {
  chainId: string;
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  tags: Array<string>;
};

export default Token;
