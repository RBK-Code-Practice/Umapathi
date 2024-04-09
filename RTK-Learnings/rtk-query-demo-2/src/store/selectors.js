import { createSelector } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';

// Define a memoized selector using createSelector
export const selectProducts = createSelector(
  (state) => apiSlice.endpoints.getProducts.select()(state).data,
  (products) => {
    return products;
  }
);