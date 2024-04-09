import React from 'react';
import { useGetUserByIdQuery } from '../../store/api/apiSlice';

function UserDetails({ userId }) {
  const { data, error, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <div>
          <h1>User Details</h1>
          {/* <p>ID: {data.user.id}</p>
          <p>Name: {data.user.name}</p> */}
          {JSON.stringify(data,null,2)}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
