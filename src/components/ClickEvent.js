
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
        <div className="text-center">
            <h1>
                Click Event
            </h1>
            <button onClick={() => alert("Hello")}>Click me 2</button>
        </div>
    )

}

export default ClickEvent;