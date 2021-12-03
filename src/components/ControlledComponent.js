import React, { useState } from "react";

function ControlledComponent() {

    //const [val, setVal] = useState("");
    const [val, setVal] = useState("000");

    return (
        <div className="text-center">
            <h1>Controlled Component</h1>
            {/* <input type="text" defaultValue="000" onChange={(e) => setVal(e.target.value)} /> */}
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <div>{val}</div>
        </div>
    )
}

export default ControlledComponent;