import React from "react";
import { useGetProductsQuery } from "../../store/api/apiSlice"; // Import the useGetProductsQuery hook from your API slice

const PollingExample = () => {
  const { data, error, isLoading, isFetching } = useGetProductsQuery(undefined,{
    pollingInterval: 3000,
    // skipPollingIfUnfocused: true
  });

  if (isLoading) return <div>Loading...</div>;
  if (isFetching) return <div>fetching...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Products List</h2>
       {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default PollingExample;
