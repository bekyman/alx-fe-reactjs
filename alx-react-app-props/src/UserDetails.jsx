import React, { useContext } from 'react';
import UserContext from './components/UserContext'; // Adjust path if needed

function UserDetails() {
  // Access userData directly from the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
