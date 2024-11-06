import store from '../store';
import { walletApi } from './walletApi';

// eslint-disable-next-line import/prefer-default-export
export const resetWalletActionCreator = () =>
  store.dispatch(walletApi.util.resetApiState());
