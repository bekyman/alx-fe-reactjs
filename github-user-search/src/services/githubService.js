import axios from 'axios';

// Function to fetch a single user's data
export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};
