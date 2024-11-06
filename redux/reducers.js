import { combineReducers } from '@reduxjs/toolkit';
import { reducer as config } from './config/config.slice';
import { listsApi } from './lists/listsApi';
import { tonApi } from './ton/tonApi';
import { walletApi } from './wallet/walletApi';
import forms from './forms/formsReducer';

const reducers = combineReducers({
  config,
  forms,
  [listsApi.reducerPath]: listsApi.reducer,
  [tonApi.reducerPath]: tonApi.reducer,
  [walletApi.reducerPath]: walletApi.reducer
});

export default reducers;
