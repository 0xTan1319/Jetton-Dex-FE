import store from '../../store';
import { updateTokenA, updateTokenB } from './liquidityFormSlice';

export const updateTokenAActionCreator = payload =>
  store.dispatch(updateTokenA(payload));

export const updateTokenBActionCreator = payload =>
  store.dispatch(updateTokenB(payload));
