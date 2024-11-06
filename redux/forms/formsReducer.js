import { combineReducers } from '@reduxjs/toolkit';
import { reducer as liquidity } from './liquidity/liquidityFormSlice';
import { reducer as exchange } from './exchange/exchangeFormSlice';

const formsReducers = combineReducers({
  exchange,
  liquidity
});

export default formsReducers;
