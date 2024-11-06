import { useSelector } from '../../components/hooks/useRedux';
import {
  updateExchangeTokenAActionCreator,
  updateExchangeTokenBActionCreator
} from '../../redux/forms/exchange/exchangeFormActionCreators';
import {
  selectExchangeFormTokenAAmount,
  selectExchangeFormTokenACurrency,
  selectExchangeFormTokenBAmount,
  selectExchangeFormTokenBCurrency
} from '../../redux/forms/exchange/exchangeFormSelectors';

const ExchangeSwapAction = () => {
  const tokenAAmount = useSelector(selectExchangeFormTokenAAmount);
  const tokenACurrency = useSelector(selectExchangeFormTokenACurrency);
  const tokenBAmount = useSelector(selectExchangeFormTokenBAmount);
  const tokenBCurrency = useSelector(selectExchangeFormTokenBCurrency);
  const onSwap = () => {
    updateExchangeTokenAActionCreator({
      currency: tokenBCurrency,
      amount: tokenBAmount
    });
    updateExchangeTokenBActionCreator({
      currency: tokenACurrency,
      amount: tokenAAmount
    });
  };
  return (
    <div className="align-center">
      <div role="presentation" className="cursor-pointer" onClick={onSwap}>
        <img src="swap-icon.svg" alt="swap icon" />
      </div>
    </div>
  );
};

export default ExchangeSwapAction;
