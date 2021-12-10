import React from "react";
import { useNavigate } from 'react-router-dom'

function User(props) {

    console.log(props)
    return (
        <>
            <div>
                <h2>User Component</h2>
            </div>

        </>
    );
}


export default (() => {

    return useNavigate(User);
});