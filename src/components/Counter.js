import React from 'react';

class Counter extends React.Component {
    // Called before mounting
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        });
    }

    render() {
        return <div>
            <div>
                Counter: {this.state.counter}
            </div>
            <button onClick={this.incrementCounter}>CLick Me</button>
        </div>
    }
}

export default Counter;