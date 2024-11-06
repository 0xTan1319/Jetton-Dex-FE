export const selectExchangeFormTokenAAmount = state =>
  state?.forms?.exchange?.tokenA?.amount;

export const selectExchangeFormTokenACurrency = state =>
  state?.forms?.exchange?.tokenA?.currency;

export const selectExchangeFormTokenABalance = state =>
  state?.forms?.exchange?.tokenA?.balance;

export const selectExchangeFormTokenBAmount = state =>
  state?.forms?.exchange?.tokenB?.amount;

export const selectExchangeFormTokenBCurrency = state =>
  state?.forms?.exchange?.tokenB?.currency;

export const selectExchangeFormTokenBBalance = state =>
  state?.forms?.exchange?.tokenB?.balance;
