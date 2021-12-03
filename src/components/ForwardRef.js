import Test6 from "../components/Test6";
import React, { useRef } from "react";
function ForwardRef() {

    let inputRef = useRef(null);

    function updateInput() {
        inputRef.current.value = "10000"
        inputRef.current.style.color = "red"
        inputRef.current.focus()
    }

    return (
        <div className="text-center">
            <h1>forwardRef in React</h1>
            <div>forward ref to paretn to child cpmponent</div>
            <Test6 ref={inputRef} />
            <button onClick={updateInput}>Forward Ref</button>
        </div>
    )
}

export default ForwardRef;