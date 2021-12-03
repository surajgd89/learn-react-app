import React from "react";

class Test5 extends React.PureComponent {

    render() {
        console.log("child rendering");
        return (
            <div className="text-center" >
                <h1>Test 5</h1>
                <div>Count : {this.props.data}</div>
            </div>
        )
    }
}

export default Test5;