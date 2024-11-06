import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from './useRedux';

type useDynamicTokenPricingProps = {
  tokenACurrencySelector: any;
  tokenAAmountSelector: any;
  tokenBCurrencySelector: any;
  tokenBAmountSelector: any;
  tokenAPricingSelector: any;
  tokenBPricingSelector: any;
  updateTokenA: any;
  updateTokenB: any;
};

const useDynamicTokenPricing = ({
  tokenACurrencySelector,
  tokenAAmountSelector,
  tokenBCurrencySelector,
  tokenBAmountSelector,
  tokenAPricingSelector,
  tokenBPricingSelector,
  updateTokenA,
  updateTokenB
}: useDynamicTokenPricingProps) => {
  const tokenAAmount = useSelector(tokenAAmountSelector);
  const tokenBAmount = useSelector(tokenBAmountSelector);
  const tokenACurrency = useSelector(tokenACurrencySelector);
  const tokenBCurrency = useSelector(tokenBCurrencySelector);
  const tokenAPricing = useSelector(tokenAPricingSelector, tokenACurrency);
  const tokenBPricing = useSelector(tokenBPricingSelector, tokenBCurrency);

  const dynamicUpdateTokenAAmount = useCallback(() => {
    const newTokenAAmount = tokenBAmount * tokenAPricing;
    updateTokenA({ amount: newTokenAAmount });
  }, [tokenAPricing, tokenBAmount, updateTokenA]);

  const dynamicUpdateTokenBAmount = useCallback(() => {
    const newTokenAAmount = tokenAAmount * tokenBPricing;
    updateTokenB({ amount: newTokenAAmount });
  }, [tokenAAmount, tokenBPricing, updateTokenB]);

  const dynamicTokenPricing = useMemo(
    () => ({
      dynamicUpdateTokenAAmount,
      dynamicUpdateTokenBAmount
    }),
    [dynamicUpdateTokenAAmount, dynamicUpdateTokenBAmount]
  );
  return dynamicTokenPricing;
};

export default useDynamicTokenPricing;
