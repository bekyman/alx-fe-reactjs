import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
    // Construct the query string
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data; // This returns an object with an 'items' array
};
