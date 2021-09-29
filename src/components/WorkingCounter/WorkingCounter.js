import React from 'react';
import './WorkingCounter.css';

class WorkingCounter extends React.Component {
    // Called before mounting
    constructor(props) {
        super(props);

        this.state = {
            counter: props.startNum
        }

        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // Use arrow function, so you won't need to bind
    incrementCounter() {
        this.setState((state,props) => {
            return {
                counter: state.counter + 1
            }
        })
    }

    render() {
        return <div className='counter'>
            <div>
                Counter: {this.state.counter}
            </div>
            <button onClick={this.incrementCounter}>Add</button>
        </div>
    }
}

export default WorkingCounter;