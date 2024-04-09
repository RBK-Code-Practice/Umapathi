import { configureStore } from '@reduxjs/toolkit'
import { petApi } from './petApi'

export const store = configureStore({
  reducer: {
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
})