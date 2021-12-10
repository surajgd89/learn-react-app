import React from "react";
import { Link, Routes, Route } from 'react-router-dom'
import User from "./User";

function DynamicRouting() {

    let users = [
        { id: 1, name: "Suraj", email: "suraj@test.com" },
        { id: 2, name: "Rashmin", email: "rashmin@test.com" },
        { id: 3, name: "Sarfaraz", email: "sarfaraz@test.com" },
        { id: 4, name: "Rohit", email: "rohit@test.com" }
    ]

    return (
        <div className="text-center">
            <h1>Dynamic Routing</h1>



            {users.map((item, index) =>

                <div key={index}>
                    <Link to={"/users/" + item.id}>{item.name}</Link>
                </div>

            )}


            <Routes>
                <Route path="/users/:id" element={<User />}></Route>
            </Routes>


        </div>
    );
}


export default DynamicRouting;