import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    state = {
        count: 0,
        name:''
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
                <input 
                    type="text" 
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})} 
                />
            </div>
        )
    }
}

export default ClassCounterOne
