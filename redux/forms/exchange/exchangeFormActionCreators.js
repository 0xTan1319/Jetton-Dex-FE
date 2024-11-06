import store from '../../store';
import { updateTokenA, updateTokenB } from './exchangeFormSlice';

export const updateExchangeTokenAActionCreator = payload =>
  store.dispatch(updateTokenA(payload));

export const updateExchangeTokenBActionCreator = payload =>
  store.dispatch(updateTokenB(payload));
