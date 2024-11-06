// eslint-disable-next-line import/prefer-default-export
export const selectToncoinPricing = store =>
  store?.ton?.queries?.['getCoinPrice("toncoin")']?.data;
