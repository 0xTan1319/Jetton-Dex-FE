import { Input } from 'antd';
import TokenSelect from '../tokenSelect/TokenSelect';
import { useSelector } from '../../../hooks/useRedux';
import PercentageSlider from '../../slider/PercentageSlider';

export type TokenInputValueProps = {
  amountSelector: any;
  currencySelector: any;
  balanceSelector: any;
  onChangeAmount: any;
  onChangeCurrency: any;
};

const TokenInputValue = ({
  amountSelector,
  currencySelector,
  balanceSelector,
  onChangeAmount,
  onChangeCurrency
}: TokenInputValueProps) => {
  const amount = useSelector(amountSelector);
  const currency = useSelector(currencySelector);
  const balance = useSelector(balanceSelector);
  const handleOnChangeAmount = ({ target: { value: newAmount } }) => {
    onChangeAmount({ amount: newAmount });
  };
  const handleOnChangeCurrency = newCurrency => {
    onChangeCurrency({ currency: newCurrency });
  };
  const onChangeByPercentage = percentage => {
    const newAmount = (percentage / 100) * balance;
    onChangeAmount({ amount: newAmount });
  };

  return (
    <>
      <Input
        value={amount}
        onChange={handleOnChangeAmount}
        size="large"
        className="token-input-value"
        placeholder="0.0"
        suffix={
          <TokenSelect value={currency} onChange={handleOnChangeCurrency} />
        }
      />
      <h6>Balance {balance}</h6>
      <PercentageSlider onChange={onChangeByPercentage} />
      <style jsx>{`
        .token-input-value {
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default TokenInputValue;
