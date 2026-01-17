import React, { useContext } from 'react';
import UserContext from './UserContext'; // Adjust path if UserContext is in a different folder

const UserProfile = () => {
  const data = useContext(UserContext); // Consuming the context

  return (
    <div>
      <h2>User Profile</h2>
      {/* Render data safely checking if it exists */}
      <p>Name: {data ? data.name : 'Loading...'}</p>
      <p>Email: {data ? data.email : 'Loading...'}</p>
    </div>
  );
};

export default UserProfile;
