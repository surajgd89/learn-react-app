import React from "react";
//Example 1
//   Check below Synario with State (not rendering dom in same value)
/* class PureComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1,
        }
    }

    render() {
        console.log("rendering");
        return (
            <div className="text-center" >
                <h1>Pure Component State</h1>
                <div>
                    only use in class components.
                </div>
                <div>Count : {this.state.count}</div>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>
                {<button onClick={() => this.setState({ count: 1 })}>Not Update Count</button>}
            </div>
        )
    }
} */

//Example 2
//   Check below Synario with props (not rendering dom in same value)
class PureComponent extends React.PureComponent {


    render() {
        console.log("rendering");
        return (
            <div className="text-center" >
                <h1>Pure Component Props</h1>
                <div>
                    only use in class components.
                </div>


            </div>
        )
    }
}

export default PureComponent;