import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log('componetDidMount')
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        console.log('componetWillMount')
        document.title = `Clicked ${this.state.count} times`
    }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
