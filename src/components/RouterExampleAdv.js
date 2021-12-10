import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NotFoundPage from "../components/NotFoundPage";

function RouterExampleAdv() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route exact={true} path="/" element={<Home />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </>

    ); 
}

export default RouterExampleAdv;







