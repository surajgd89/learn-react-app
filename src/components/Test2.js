
import React from "react";

class Test2 extends React.Component {

    componentWillUnmount() {
        console.log("componentWillUnmount method called");
    }

    render() {
        return (
            <div className="text-center" >
                <h1>Test 2 Child Component</h1>
            </div>
        );
    }

}

export default Test2;