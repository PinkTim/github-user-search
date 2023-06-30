import React, { useState } from "react";
import "./search.css";
import lupa from "./search_3.png";

export default function UserSearch({ onSearch }) {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(username);
        setUsername("");
    }

    return (
        <form onSubmit={handleSubmit} className="search__menu">
            <div className="search__bar">
                <img
                    className="search__lupa"
                    src={lupa}
                    alt="lupa"
                    height={25}
                    width={25}
                ></img>
                <input
                    className="search__input"
                    type="text"
                    placeholder="Input username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <button type="submit" className="search__button">
                Search
            </button>
        </form>
    );
}
