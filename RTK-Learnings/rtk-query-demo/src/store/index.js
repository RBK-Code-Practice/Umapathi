import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, counterReducer } from "./api/apiSlice";
import { productsSlice } from "./api/productSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userSlice } from "./api/userSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [productsSlice.reducerPath]: productsSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, userSlice.middleware), // Include userSlice.middleware here
});

setupListeners(store.dispatch, (e) => {
  console.log('Listeners enabled...');
});

export default store;