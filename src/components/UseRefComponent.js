
import React, { useRef } from "react";

function UseRefComponent() {

    const inputRef = useRef(null);

    function handleInput() {

        inputRef.current.value = "1000";
        inputRef.current.focus();
        inputRef.current.style.color = "#fff";
        inputRef.current.style.backgroundColor = "red";
    }

    return (
        <div className="text-center">
            <h1>useRef in Functional Component</h1>
            <div>
                Change DOM Forcefully Manipulate
            </div>

            <input type="text" ref={inputRef} />
            <button onClick={() => handleInput()}>Handle Input</button>

        </div>
    )
}

export default UseRefComponent;