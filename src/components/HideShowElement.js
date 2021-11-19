
import React from 'react'

function HideShowElement(params) {
    let [status, setStatus] = React.useState(true);


    return (
        <>
            {status ? <h1>Hide / Show Element Example</h1> : null}
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </>
    )
}

export default HideShowElement;