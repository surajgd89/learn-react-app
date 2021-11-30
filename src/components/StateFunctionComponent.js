import React, { useState } from 'react';

//Example 1

/* function StateFunctionComponent() {

    let [data, SetData] = useState("Suraj");
    function updateData() {
        SetData("Kajal");
    }

    return (
        <div>
            <h1>State</h1>
            <div>{data}</div>
            <button onClick={updateData}>Update</button>
        </div>
    );
} */

//Example 2

function StateFunctionComponent() {

    let [data, SetData] = useState(0);
    function updateData() {
        SetData(data + 1);
    }

    return (
        <div className="text-center">
            <h1>State Function Component</h1>
            <div>{data}</div>
            <button onClick={updateData}>Update</button>
        </div>
    );
}

export default StateFunctionComponent;