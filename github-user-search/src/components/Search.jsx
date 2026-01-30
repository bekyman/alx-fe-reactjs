import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data.items); // Search API returns results in 'items'
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap -mx-3 mb-4">
                    <input
                        className="border rounded w-full py-2 px-3 mx-3 mb-2"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="border rounded w-full py-2 px-3 mx-3 mb-2"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <input
                        className="border rounded w-full py-2 px-3 mx-3 mb-2"
                        type="number"
                        placeholder="Min Repositories"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
                    Search
                </button>
            </form>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {users.map((user) => (
                    <div key={user.id} className="border p-4 rounded shadow flex items-center space-x-4">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                        <div>
                            <h3 className="font-bold">{user.login}</h3>
                            <p className="text-sm text-gray-600">{user.location || "Location not specified"}</p>
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm">
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
