import React from "react";
import Test2 from "../components/Test2"

class ComponentWillUnmount extends React.Component {

    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div className="text-center">
                <h1>Component Will Update</h1>
                {this.state.show ? <Test2 /> : <div> Child Component Removed </div>}
                <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Component</button>
            </div>
        )
    }
}

export default ComponentWillUnmount;