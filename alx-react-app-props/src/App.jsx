import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext'; // Adjust path if needed

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide the userData to all child components via the Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
