import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

function Router() {
    return (
        <Routes>
            {/* Home */}
            <Route path="/" element={<Home/>}></Route>

        </Routes>
    );
}
export default Router;