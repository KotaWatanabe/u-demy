import React, { Component } from 'react'

export class ClassCounter extends Component {
    state = {
        counter: 0
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.incrementCounter()}>Counter: {this.state.counter}</button>
            </div>
        )
    }
}

export default ClassCounter
