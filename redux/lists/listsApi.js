import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getPoolsFakerApi from './fakerPoolsApi';

export const listsApi = createApi({
  reducerPath: 'lists',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getTokenList: builder.query({
      query: () => 'https://bridge.arbitrum.io/token-list-42161.json',
      transformResponse: response => response?.tokens
    }),
    getPoolsList: builder.query({
      queryFn: getPoolsFakerApi
    })
  })
});

export const { useGetTokenListQuery, useGetPoolsListQuery } = listsApi;
