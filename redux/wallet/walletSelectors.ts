import { createSelector } from '@reduxjs/toolkit';
import { isStringWithCharacters } from '../../utils/functions/validations/string';

export const selectWallet = store =>
  store?.wallet?.queries?.['connectWallet(undefined)'];

export const selectWalletAddress = createSelector(
  selectWallet,
  wallet => wallet?.data?.address
);

export const selectIsWalletConnected = createSelector<any, boolean>(
  selectWalletAddress,
  address => isStringWithCharacters(address)
);

export const selectIsLoadingConnectingWallet = createSelector<any, boolean>(
  selectWallet,
  wallet => wallet?.status === 'pending'
);
