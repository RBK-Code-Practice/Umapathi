import { useGetProductByIdQuery } from "../../store/api/productSlice";

function RefetchExample() {
  const { data, error, isLoading, refetch, isFetching } =
    useGetProductByIdQuery(1);

  if (isLoading) return <div>Loading...</div>;
  if (isFetching) return <div>Fetching...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => refetch()}
      >
        Refetch
      </button>
    </div>
  );
}

export default RefetchExample;
