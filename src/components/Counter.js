import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        };
    }

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleDecrementClick = () => {
        this.setState({
            count: this.state.count - 1 >= 0 ? this.state.count - 1 : 0
        });
    };

    render() {
        return (
            <div>
                <div>count: {this.state.count} </div>
                <button onClick={this.handleIncrementClick}>Increment</button>
                <button onClick={this.handleDecrementClick}>Decrement</button>
            </div>
        );
    }
}
