import React from "react";

//Example 1
/* function ConditionalRendering() {
    const [LoggedIn, SetLoggedIn] = useState(true);
    return (
        <>
            <h1>Conditional Rendering | if/else condition</h1>
            {LoggedIn ? <div>Welcome Suraj</div> : <div>Welcome Guest</div>}
        </>
    );
} */

//Example 2
function ConditionalRendering() {
    const [LoggedIn, SetLoggedIn] = React.useState(1);
    return (
        <div className="text-center">
            <h1>Conditional Rendering | if/else condition</h1>
            {LoggedIn === 1 ?
                <div>Welcome Suraj </div>
                : LoggedIn === 2 ?
                    <div> Welcome Kajal </div>
                    : LoggedIn === 3 ?
                        <div> Welcome Manu </div>
                        : <div>Welcome Guest</div>}
            {SetLoggedIn(null)}
        </div>
    );
}

//Example 3 (Not Recommanded)

/* function ConditionalRendering() {
    const [LoggedIn, SetLoggedIn] = useState();
    if (LoggedIn === "Suraj") {
        return (
            <>
                <h1>Conditional Rendering | if/else condition</h1>
                <div> Welcome Suraj </div>
            </>
        );
    } else if (LoggedIn === "Kajal") {
        return (
            <>
                <h1>Conditional Rendering | if/else condition</h1>
                <div> Welcome Kajal </div>
            </>
        );
    } else if (LoggedIn === "Manu") {
        return (
            <>
                <h1>Conditional Rendering | if/else condition</h1>
                <div> Welcome Manu </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Conditional Rendering | if/else condition</h1>
                <div>Welcome Guest</div>
                {SetLoggedIn("Manu")}
            </>
        );
    }
} */
export default ConditionalRendering;

