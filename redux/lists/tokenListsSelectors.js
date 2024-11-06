import { createSelector } from '@reduxjs/toolkit';
import { selectToncoinPricing } from '../ton/tonSelectors';

// eslint-disable-next-line import/prefer-default-export
export const selectTokenPricingByCurrency = createSelector(
  [selectToncoinPricing, (store, currency) => currency],
  (toncoinPricing, currency) => {
    if (!currency) {
      return 0;
    }
    const numberByCurrency = currency?.codePointAt(1) ?? 0.7;
    return toncoinPricing * numberByCurrency;
  }
);
