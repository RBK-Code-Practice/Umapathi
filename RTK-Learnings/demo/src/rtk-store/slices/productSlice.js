// import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   data: [],
//   error: null,
// };

// export const getProducts = createAsyncThunk("product/getProducts", async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products?limit=9");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// });

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(getProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {

//         state.data = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error;
//       });
//   },
// });

// //I created selector for ease of use for complex nested data
// const selectProductState = state => state.products;
// const selectLoading = state => selectProductState(state).loading;
// const selectProducts = state => selectProductState(state).data;
// const selectError = state => selectProductState(state).error;

// export const loading = createSelector(
//   [selectLoading],
//   loading => loading
// );

// export const products = createSelector(
//   [selectProducts],
//   data => data
// );

// export const error = createSelector(
//   [selectError],
//   error => error
// );



// export default productSlice.reducer


import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=9");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  },
});

// Selectors
const selectProductState = state => state.products; // Adjusted to correct slice name
const selectProducts = state => selectProductState(state).data;

export const selectProductsState = createSelector(
  [selectProducts],
  data => {
    return data
  }
);


export default productSlice.reducer;
