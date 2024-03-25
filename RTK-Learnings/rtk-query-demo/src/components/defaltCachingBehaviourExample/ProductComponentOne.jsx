import { useGetProductByIdQuery } from "../../store/api/productSlice";

function ProductComponentOne() {
  const { data, error, isLoading } = useGetProductByIdQuery(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div class="bg-gray-200 p-4 rounded-lg shadow-md">
      Component 1<h2 class="text-2xl font-bold text-blue-700">{data.title}</h2>
      <p class="text-gray-800 mt-2">{data.description}</p>
      <img
        src={data.image}
        alt={data.title}
        class="mt-4 rounded-lg shadow-md w-10 h-10"
      />
    </div>
  );
}

export default ProductComponentOne;
