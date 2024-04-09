import React from "react";
import Child from "./Child";

import { useGetProductsQuery } from "../../store/api/apiSlice";

function SelectorExample() {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <h2>Parent component Data</h2>
      {JSON.stringify(JSON.stringify(data, null, 2))}
      <Child />
    </div>
  );
}

export default SelectorExample;
