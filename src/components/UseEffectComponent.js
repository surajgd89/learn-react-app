import React, { useEffect, useState } from 'react';
import Test3 from '../components/Test3';

function UseEffectComponent(props) {
    const [count, SetCount] = useState(0);
    const [name, SetName] = useState('Suraj');

    useEffect(() => {
        console.warn('not update state');
    }, []);

    useEffect(() => {
        console.warn('===========================================');
        console.warn('update state');
    });

    useEffect(() => {
        console.warn('update count');
    }, [count]);

    useEffect(() => {
        console.warn('update name');
    }, [name]);

    function updateDataAll() {
        SetCount(count + 1);
        SetName('Bhaskar');
    }

    function updateCount() {
        SetCount(count + 1);
    }

    function updateName() {
        SetName('Kajal');
    }

    return (
        <div className="text-center">
            <h1>useEffect in React</h1>
            <div>State Name::{name}</div>
            <div>State Count::{count}</div>
            <Test3 name={name} count={count} />
            <button onClick={() => updateDataAll()}>Update Data All</button>
            <button onClick={() => updateCount()}>Update Count</button>
            <button onClick={() => updateName()}>Update Name</button>
        </div>
    );
}

export default UseEffectComponent;
