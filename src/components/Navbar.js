import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/contact">Contact</Link>
        </>
    )
}

export default Navbar;
