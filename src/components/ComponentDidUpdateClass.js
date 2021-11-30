import React from "react";

class ComponentDidUpdateClass extends React.Component {

    constructor() {
        super();

        console.warn("constructor method called");

        this.state = {
            count: 0
        }
    }


    componentDidMount() {

        console.warn("componentDidMount method called");
    }

    componentDidUpdate(preProps, preState, snapshot) {

        console.warn("componentDidUpdate method called");
        console.warn("previousState =", preState.count);
        console.warn("currentState=", this.state.count);

        if (this.state.count < 20) {
            this.setState({ count: this.state.count + 1 })
        }

    }

    render() {
        console.warn("===========================================================");
        console.warn("render method called");
        return (
            <div className="text-center">
                <h1>Component Did Update Class</h1>
                <div>Count {this.state.count}</div>
                <button onClick={() => this.setState({ count: 1 })}>Update Count</button>
            </div>
        )
    }
}

export default ComponentDidUpdateClass;