import { useState } from "react";
import {
  useGetProductsQuery,
  useAddProductMutation,
} from "./store/api/apiSlice";
import { increment } from "./store/api/apiSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const { count } = useSelector((state) => state.counter);

  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    data,
    error,
    endpointName,
    requestId,
    status,
    startedTimeStamp,
    fulfilledTimeStamp,
  } = useGetProductsQuery();

  // Add new Product
  const [
    addProduct,
    {
      error: addProductError,
      isError: isAddProductError,
      isLoading: isAddProductLoding,
    },
  ] = useAddProductMutation();
console.log("data",data)
  //get product
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isFetching) {
    return <h1>fetching data...</h1>;
  }
  if (isError) {
    return <h1>Error Occurred :: {error}</h1>;
  }
  // add product
  if (isAddProductLoding) {
    return <h1>loading...</h1>;
  }
  if (isAddProductError) {
    return <h1>Error Occurred during add product:: {addProductError}</h1>;
  }
  const handleSubmit =  (e) => {
    e.preventDefault(e);
    addProduct(product).unwrap();
    // increment after adding product
    dispatch(increment());
  };
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h1 class="text-4xl font-bold text-teal-400 leading-tight">
        Product Added Count  {count}
      </h1>
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            type="text"
            name="productData"
            onChange={(e) => setProduct(e.target.value)}
            value={product}
            className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter product data"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>

      <div>
        <p className="font-bold text-gray-800">Request Information:</p>
        <p className="text-gray-600">Request ID: {requestId}</p>
        <p className="text-gray-600">Endpoint Name: {endpointName}</p>
        <p className="text-gray-600">Status: {status}</p>
        <p className="text-gray-600">
          Started Time: {new Date(startedTimeStamp).toString()}
        </p>
        <p className="text-gray-600">
          Fulfilled Time: {new Date(fulfilledTimeStamp).toString()}
        </p>
        <p className="text-gray-600">Success: {isSuccess ? "Yes" : "No"}</p>
        <p className="font-bold text-gray-800">Data:</p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
