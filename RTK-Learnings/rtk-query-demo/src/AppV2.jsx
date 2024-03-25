import React, { useState } from "react";
import ProductComponentOne from "./components/defaltCachingBehaviourExample/ProductComponentOne";
import ProductComponentTwo from "./components/defaltCachingBehaviourExample/ProductComponentTwo";
import ProductComponentThree from "./components/defaltCachingBehaviourExample/ProductComponentThree";
import RefetchExample from "./components/refetchExample/RefetchExample";
import SkipExample from "./components/conditinalFetching/SkipExample";
import Pagination from "./components/paginationExample/Pagination";
// import RefetchOnMountExample from "./components/RefetchOnMountExample";

const AppV2 = () => {

  return (
    <div>
      {/* Default caching behavior */}
      <ProductComponentOne />
      <ProductComponentTwo />
      <ProductComponentThree />
      {/* Refetch example */}
      <RefetchExample />
      {/* conditional fetching */}
      <SkipExample userId={1}/>
      {/* pagination example */}
      <Pagination/>

    </div>
  );
};

export default AppV2;
