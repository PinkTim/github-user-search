import React, { useState } from 'react';

export default function UserSearch ({ onSearch }) {
const [username, setUsername] = useState('');

function handleSearch () {
    onSearch(username);
};

return (
    <div>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
    <button onClick={handleSearch}>Search</button>
    </div>
);
};

