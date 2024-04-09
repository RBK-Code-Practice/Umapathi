import { useLazyGetProductsQuery } from "../../store/api/apiSlice";

const LazyQueryDemo = () => {

  const [trigger, result, lastPromiseInfo] = useLazyGetProductsQuery();

  const {status, data, error, isError, isLoading } = result;

  console.log(result, lastPromiseInfo, status);
  
  if (status === "uninitialized") {
    return <button onClick={() => trigger()}>Fetch Products</button>;
  } else {
    if (isError)
      return (
        <div>
          {error.status}
          <br />
          {error.data}
        </div>
      );
    if (isLoading) return <div>loading...</div>;
    return (
      <div>{JSON.stringify(data,null,2)}</div>
    );
  }
};

export default LazyQueryDemo;
