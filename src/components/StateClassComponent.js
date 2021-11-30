
import React from "react";

class StateClassComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            data: "Suraj"
        }
    }

    updateData() {
        this.setState({ data: "Kajal" })
    }

    render() {
        return (
            <div className="text-center">
                <h1>State Class Component Example</h1>
                <div>{this.state.data}</div>
                <button onClick={() => this.updateData()}>Update</button>
            </div>
        )
    }
}

export default StateClassComponent;