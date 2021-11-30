import React from 'react';
class LifeCycleComponent extends React.Component {
    constructor(props) {
        super();
        console.log('constructor called');
        this.state = {
            name: props.name,
            email: 'suraj.gd89@gmail.com',
        };
    }

    render() {
        console.log('render called');
        return (
            <div className="text-center">
                <h1>Life Cycle Component</h1>
                <div>
                    Hello {this.state.name} and {this.state.email}
                </div>
                <button
                    onClick={() =>
                        this.setState({
                            name: 'Kajal',
                            email: 'kajal.gd89@gmail.com',
                        })
                    }
                >
                    Update Email Address
                </button>
            </div>
        );
    }
}

export default LifeCycleComponent;
