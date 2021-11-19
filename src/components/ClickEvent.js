
//Example 1

/* function ClickEvent() {
    function callme() {
        alert("Alert Call on click")
    }
    return (
        <>
            <button onClick={callme}>Click me</button>
        </>
    )

} */

//Example 2

/* function ClickEvent() {
    function callme() {
        alert("Alert Call on click")
    }
    return (
        <>

            <button onClick={() => callme()}>Click me</button>

        </>
    )

} */

//Example 3

function ClickEvent() {

    return (
        <>
            <button onClick={() => alert("Hello")}>Click me 2</button>
        </>
    )

}

export default ClickEvent;