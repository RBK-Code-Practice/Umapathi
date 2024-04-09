// productsApi.js
import { apiSlice } from './apiSlice';

apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductsV2: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsV2Query} = apiSlice;
