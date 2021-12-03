
import React, { useState, useMemo } from "react";

function UseMemo(props) {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const multiCountMemo = useMemo(
        function multiCount() {
            console.log("multicount called")
            return count * 5;
        }, [count])


    return (
        <div className="text-center">
            <h1>useMemo in React</h1>
            <div>
                stop unwanted rerendering in component
            </div>

            <div>count : {count}</div>
            <div>Item : {item}</div>
            <div>{multiCountMemo}</div>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div>
    )
}

export default UseMemo;