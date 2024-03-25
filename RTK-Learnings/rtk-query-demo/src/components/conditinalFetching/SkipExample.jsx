import { useState } from "react";
import { useGetUserByIdQuery } from "../../store/api/userSlice";

const SkipExample = ({ userId }) => {
  const [shouldSkip, setShouldSkip] = useState(true);

  const { data, isLoading, isError } = useGetUserByIdQuery(userId, {
    skip: shouldSkip,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Conditional Fetching Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={() => setShouldSkip(false)}
      >
        Toggle skip
      </button>
    </div>
  );
};

export default SkipExample;
