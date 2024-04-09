import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/selectors";

function Child() {
  const products = useSelector(selectProducts);
  const x = useSelector(state=> state)
  return (
    <div>
      <h2>child component</h2>
      {console.log(x)}
      {JSON.stringify(products, null, 2)}
    </div>
  );
}

export default Child;
