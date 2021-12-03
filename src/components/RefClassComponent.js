
import React, { createRef } from "react";

class RefClassComponent extends React.Component {

    constructor() {
        super()
        this.inputRef = createRef();
    }

    //Set Value

    /* componentDidMount() {
        console.log(this.inputRef.current.value = "200");
    } */

    //Get Value

    getVal() {
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color = "#fff";
        this.inputRef.current.style.backgroundColor = "red";
        this.inputRef.current.focus();
    }


    render() {
        return (
            <div className="text-center">
                <h1>Ref in Class Component</h1>
                <div>
                    Use DOM Forcefully Maniplutions (ex. color change, value change)
                </div>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getVal()}>Get Value</button>
            </div>
        )
    }
}


export default RefClassComponent;