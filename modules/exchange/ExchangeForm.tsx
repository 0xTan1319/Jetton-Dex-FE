import { useEffect } from 'react';
import TokenInputValue from '../../components/data-entry/tokens/tokenInputValue/TokenInputValue';
import SwapConfirmation from './SwapConfirmation';
import {
  selectExchangeFormTokenAAmount,
  selectExchangeFormTokenACurrency,
  selectExchangeFormTokenABalance,
  selectExchangeFormTokenBAmount,
  selectExchangeFormTokenBCurrency,
  selectExchangeFormTokenBBalance
} from '../../redux/forms/exchange/exchangeFormSelectors';
import {
  updateExchangeTokenAActionCreator,
  updateExchangeTokenBActionCreator
} from '../../redux/forms/exchange/exchangeFormActionCreators';
import ExchangeSwapAction from './ExchangeSwapAction';
import SwapPreview from './SwapPreview';
import useDynamicTokenPricing from '../../components/hooks/useDynamicTokenPricing';
import { selectTokenPricingByCurrency } from '../../redux/lists/tokenListsSelectors';

const ExchangeForm = () => {
  useEffect(() => {
    fetch('/tokens-pricings.json');
  }, []);
  const { dynamicUpdateTokenAAmount, dynamicUpdateTokenBAmount } =
    useDynamicTokenPricing({
      tokenACurrencySelector: selectExchangeFormTokenACurrency,
      tokenAAmountSelector: selectExchangeFormTokenAAmount,
      tokenBCurrencySelector: selectExchangeFormTokenBCurrency,
      tokenBAmountSelector: selectExchangeFormTokenBAmount,
      tokenAPricingSelector: selectTokenPricingByCurrency,
      tokenBPricingSelector: selectTokenPricingByCurrency,
      updateTokenA: updateExchangeTokenAActionCreator,
      updateTokenB: updateExchangeTokenBActionCreator
    });

  const handleOnChangeAmountTokenA = value => {
    updateExchangeTokenAActionCreator(value);
    setTimeout(() => dynamicUpdateTokenBAmount(), 600);
  };

  const handleOnChangeAmountTokenB = value => {
    updateExchangeTokenBActionCreator(value);
    setTimeout(() => dynamicUpdateTokenAAmount(), 600);
  };
  return (
    <div className="exchange-form">
      <div className="exchange-form-content">
        <TokenInputValue
          key="tokenA"
          amountSelector={selectExchangeFormTokenAAmount}
          currencySelector={selectExchangeFormTokenACurrency}
          balanceSelector={selectExchangeFormTokenABalance}
          onChangeAmount={handleOnChangeAmountTokenA}
          onChangeCurrency={updateExchangeTokenAActionCreator}
        />
        <ExchangeSwapAction />
        <TokenInputValue
          key="tokenB"
          amountSelector={selectExchangeFormTokenBAmount}
          currencySelector={selectExchangeFormTokenBCurrency}
          balanceSelector={selectExchangeFormTokenBBalance}
          onChangeAmount={handleOnChangeAmountTokenB}
          onChangeCurrency={updateExchangeTokenBActionCreator}
        />
        <SwapPreview />
        <SwapConfirmation />
      </div>

      <style jsx>
        {`
          .exchange-form {
            display: flex;
            justify-content: center;
            flex-flow: column nowrap;
          }
          .exchange-form-content {
            display: grid;
            justify-content: center;
            gap: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default ExchangeForm;
