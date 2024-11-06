export const selectLiquidityFormTokenAAmount = state =>
  state?.forms?.liquidity?.tokenA?.amount;

export const selectLiquidityFormTokenACurrency = state =>
  state?.forms?.liquidity?.tokenA?.currency;

export const selectLiquidityFormTokenABalance = state =>
  state?.forms?.liquidity?.tokenA?.balance;

export const selectLiquidityFormTokenBAmount = state =>
  state?.forms?.liquidity?.tokenB?.amount;

export const selectLiquidityFormTokenBCurrency = state =>
  state?.forms?.liquidity?.tokenB?.currency;

export const selectLiquidityFormTokenBBalance = state =>
  state?.forms?.liquidity?.tokenB?.balance;
