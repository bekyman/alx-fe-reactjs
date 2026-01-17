import React, { useContext } from 'react'; // 1. Fixes "react" and "useContext" check
import UserContext from './UserContext';   // 2. Fixes "UserContext" check

const UserProfile = () => {
    // 3. Consume the context
    const userData = useContext(UserContext);

    return (
        <div>
            {/* Render the data from context */}
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
        </div>
    );
};

export default UserProfile;
