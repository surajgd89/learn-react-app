
import React, { useState } from 'react'
function GetInputValue(props) {

    let [data, setData] = useState(null);
    let [print, setPrint] = useState(false);


    function getVal(val) {
        setData(val.target.value);
        setPrint(false)
    }

    return (
        <div>
            {print ? <h1>Get Input Box Value : {data}</h1> : <h1>Get Input Box Value </h1>}
            <input type="text" onChange={getVal} />
            <div>{data}</div>
            <button onClick={() => setPrint(true)}>Print</button>
        </div>
    )
}

export default GetInputValue;