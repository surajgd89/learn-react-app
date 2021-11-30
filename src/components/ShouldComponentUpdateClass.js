import React from 'react';

class ShouldComponentUpdateClass extends React.Component {
    constructor() {
        super();
        console.warn('constructor method called');

        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.warn('componentDidMount method called');
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.warn('componentDidUpdate method called');
    }

    shouldComponentUpdate() {
        console.warn('shouldComponentUpdate method called', this.state.count);
        //can stop rendering
        if (this.state.count > 5 && this.state.count < 10) {
            return true;
        }
    }

    render() {
        console.warn('render method called');

        return (
            <div className="text-center">
                <h1>Should Component Update Class</h1>
                <div>{this.state.count}</div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update Count
                </button>
            </div>
        );
    }
}

export default ShouldComponentUpdateClass;
