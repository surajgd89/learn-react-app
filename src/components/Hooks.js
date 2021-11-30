
import React, { useState } from "react";

function Hooks() {

    const [data, setData] = useState("Suraj")

    return (
        <div className="text-center">
            <h1>Hooks</h1>
            <div>{data}</div>
            <button onClick={() => setData("Kajal")}>Update Data</button>
        </div>
    )
}

export default Hooks;