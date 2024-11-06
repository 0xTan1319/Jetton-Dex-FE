import { useGetCoinPriceQuery } from '../../../redux/ton/tonApi';
import TokenPricing from '../../data-display/token/TokenPricing';

const ToncoinTokenPricing = () => {
  const { data } = useGetCoinPriceQuery('toncoin', { pollingInterval: 10000 });
  return <TokenPricing value={data} />;
};

export default ToncoinTokenPricing;
