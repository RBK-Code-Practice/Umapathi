import React, { useState } from "react";
import { useListProductsQuery } from "../../store/api/productSlice";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useListProductsQuery(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No products found.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product) => (
          <div key={product?.id} className="bg-white shadow-md p-4 rounded-lg">
            <p className="text-lg font-semibold">{product?.title}</p>
            <p className="text-gray-600">${product?.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPage(page - 1)} //previous
          disabled={isLoading || isFetching}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)} //next
          disabled={isLoading || isFetching}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
