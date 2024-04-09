import React from "react";
import { usePrefetch } from "../../store/api/apiSlice";

const PrefetchExample = () => {
  const prefetchProducts = usePrefetch("getProducts");

  return (
    <>
      <h1>PrefetchExample</h1>
      <button onMouseEnter={() => prefetchProducts({ ifOlderThan: 35 })}>
        Low priority
      </button>
      <button onMouseEnter={() => prefetchProducts({ force: true })}>
        High priority
      </button>
    </>
  );
};

export default PrefetchExample;
