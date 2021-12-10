import React, { useState } from 'react';
import '../components/style2.css'

function HighOrderComponent() {
    return (
        <div className="text-center">
            <h1>High Order Component (Simple)</h1>
            <ThemeRed dataTheme={Counter} />
            <ThemeGreen dataTheme={Counter} />
            <ThemeBlue dataTheme={Counter} />
        </div>
    );
}

function ThemeRed(props) {
    return (
        <span className="counter red-bg">
            <props.dataTheme />
        </span >
    );
}

function ThemeGreen(props) {
    return (
        <span className="counter green-bg">
            <props.dataTheme />
        </span>
    );
}

function ThemeBlue(props) {
    return (
        <span className="counter blue-bg">
            <props.dataTheme />
        </span>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </>
    );
}

export default HighOrderComponent;
