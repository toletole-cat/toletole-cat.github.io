import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/info" element={<Info />}></Route>
        </Routes>
    )
}
export default Routers