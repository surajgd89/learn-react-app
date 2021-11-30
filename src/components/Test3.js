import React, { useEffect } from 'react';


function Test3(props) {

    useEffect(() => {
        console.warn('update props');
    });

    useEffect(() => {
        console.warn('update count');
    }, [props.count]);

    useEffect(() => {
        console.warn('update name');
    }, [props.name]);

    return (
        <div className="text-center">
            <h1>useEffect in React Test3 </h1>
            <div>Props Name :: {props.name}</div>
            <div>Props Count :: {props.count}</div>
        </div>
    );
}

export default Test3;