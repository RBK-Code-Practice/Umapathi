import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from '../store/actions/productActions';
import { getProducts,selectProductsState } from "../rtk-store/slices/productSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.data);
  const products = useSelector(selectProductsState);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  // Fetch products on page load
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Render loading state
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Render error state
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {/* {console.log("selectProductsState",selectProductsState())} */}
      {products?.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4"
        >
          <img className="w-100" src={product.image} alt="product" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-justify">{product.description}</p>
            <p className="text-red-900 text-center">Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
