import React, { useRef } from 'react';

function UnControlledComponent() {
    const inputRef1 = useRef('');
    const inputRef2 = useRef('');

    function submitForm(e) {
        e.preventDefault();
        console.log(inputRef1.current.value);
        console.log(inputRef2.current.value);
        const input3 = document.getElementById('input3').value;
        console.log(input3);
    }

    return (
        <div className="text-center">
            <h1> UnControlled Component In React</h1>
            <form onSubmit={submitForm}>
                <input ref={inputRef1} type="text" placeholder="FirstName" />
                <br />
                <br />
                <input ref={inputRef2} type="text" placeholder="MiddleName" />
                <br />
                <br />
                <input type="text" id="input3" placeholder="LastName" />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default UnControlledComponent;
