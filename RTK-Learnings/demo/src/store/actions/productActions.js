// actions/productActions.js
import { GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } from './types';

export const getProductsPending = () => ({
  type: GET_PRODUCTS_PENDING
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

export const getProductsFailed = (error) => ({
  type: GET_PRODUCTS_FAILED,
  payload: error
});

export const getProducts = () => async (dispatch) => {
  dispatch(getProductsPending());
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(getProductsFailed(error));
  }
};
