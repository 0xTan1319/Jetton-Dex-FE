import {
  selectExchangeFormTokenACurrency,
  selectExchangeFormTokenAAmount,
  selectExchangeFormTokenBCurrency,
  selectExchangeFormTokenBAmount
} from '../../redux/forms/exchange/exchangeFormSelectors';
import { selectTokenPricingByCurrency } from '../../redux/lists/tokenListsSelectors';
import ConfirmComponent from '../../components/data-entry/forms/ConfirmComponent';

const SwapConfirmation = () => (
  <ConfirmComponent
    buttonText="Swap"
    titleToConfirm="Confirm Swap"
    titleConfirmed="Swap"
    titleSuccess="Swap confirmed"
    tokenUnion={<img src="/arrow-right.svg" />}
    tokenACurrencySelector={selectExchangeFormTokenACurrency}
    tokenAAmountSelector={selectExchangeFormTokenAAmount}
    tokenBCurrencySelector={selectExchangeFormTokenBCurrency}
    tokenBAmountSelector={selectExchangeFormTokenBAmount}
    tokenAPricingSelector={selectTokenPricingByCurrency}
    tokenBPricingSelector={selectTokenPricingByCurrency}
  />
);

export default SwapConfirmation;
