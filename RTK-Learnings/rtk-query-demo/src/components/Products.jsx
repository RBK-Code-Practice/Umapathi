import { useGetProductByIdQuery } from "./api"; // Import the created API

export default function Products() {
  const { data, error, isLoading } = useGetProductByIdQuery(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} />
    </div>
  );
}
