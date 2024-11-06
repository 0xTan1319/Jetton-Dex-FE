import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tonApi = createApi({
  reducerPath: 'ton',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.ton.sh/'
  }),
  endpoints: builder => ({
    getCoinPrice: builder.query({
      query: () => 'getCoinPrice',
      transformResponse: response => response?.result
    })
  })
});

export const { useGetCoinPriceQuery } = tonApi;
