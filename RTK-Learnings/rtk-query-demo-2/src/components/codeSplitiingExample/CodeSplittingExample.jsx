import React from "react";
import { useGetProductsV2Query } from "../../store/api/productSlice";
import { useGetUsersQuery } from "../../store/api/userSlice";

function CodeSplittingExample() {
  const products = useGetProductsV2Query();
  const users = useGetUsersQuery();
  return (
    <div>
      <h1>code splitting Example</h1>
      <h2>Products</h2>
      {JSON.stringify(products, null, 2)}
      <h2>Users</h2>
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default CodeSplittingExample;
