import React from 'react';

class ComponentDidMountClass extends React.Component {
    constructor() {
        super();
        console.warn('constructor called');

        this.state = {
            name: 'Suraj',
        };
    }

    componentDidMount() {
        console.warn('componentDidMount called');
    }

    render() {
        console.warn('render called');

        return (
            <div className="text-center">
                <h1>Component Did Mount Class</h1>
                <div>{this.state.name}</div>
                <button onClick={() => this.setState({ name: 'Kajal' })}>
                    Update Name
                </button>
            </div>
        );
    }
}

export default ComponentDidMountClass;
