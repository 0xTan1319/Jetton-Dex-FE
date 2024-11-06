import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fakerConnectWalletApi from './fakerConnectWalletApi';

export const walletApi = createApi({
  reducerPath: 'wallet',
  baseQuery: fetchBaseQuery({}),
  endpoints: builder => ({
    connectWallet: builder.query({
      queryFn: fakerConnectWalletApi
    })
  })
});

export const {
  useConnectWalletQuery,
  useLazyConnectWalletQuery,
  useConnectWalletQueryState
} = walletApi;
