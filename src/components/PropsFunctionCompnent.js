//Example 1

/* function PropsFunctionCompnent(props) {
    return (
        <div>
            <h1>Props Function Component</h1>
            <div>Name : {props.name} </div>
            <div>Email : {props.email} </div>
            <div>Address : {props.other.address} </div>
            <div>Mobile : {props.other.mobile == null ? "-" : props.other.mobile} </div>
        </div>
    )
}
 */

//Example 2 (update state on click)
import React, { useState } from 'react';
function PropsFunctionCompnent(props) {
    let [data, setName] = useState(props.name);

    return (
        <div className="text-center">
            <h1>Props Function Component</h1>
            <div>Name : {data} </div>
            <button onClick={() => setName('Kajal')}>Click</button>
        </div>
    );
}

export default PropsFunctionCompnent;
