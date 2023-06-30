import React, { useReducer } from "react";
import axios from "axios";
import "./index.css";
import Root from "./router/root";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { initialState, tasksReducer } from "./components/taskReducer.js";
import UserPage from "./router/user-page";
import ErrorPage from "./router/error-page";

export function App() {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    async function handleSearch(username) {
        try {
            const response = await axios.get(
                `https://api.github.com/users/${username}`
            );
            dispatch({
                type: "added",
                data: response.data,
            });
        } catch (error) {
            console.error(error);
        }
    }
    function onDelete(response) {
        dispatch({
            type: "delete",
            id: response,
        });
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    errorElement={<ErrorPage />}
                    element={
                        <Root
                            handleSearch={handleSearch}
                            onDelete={onDelete}
                            userList={state}
                        />
                    }
                ></Route>
                <Route
                    path="/user/:username"
                    errorElement={<ErrorPage />}
                    element={<UserPage userList={state} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
