
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = { count: 0, color: 'red' };
  }

  changeCount() {
    this.setState({ count: this.state.count + 1 })
  }

  changeColor() {
    this.setState({ color: "green" })
  }

  render() {
    return (
      <div>
        <h1 style={{ color: `${this.state.color}` }}>{this.state.count}</h1>
        <button onClick={() => this.changeCount()}>+</button>
        <button onClick={() => this.changeColor()}>Color</button>
      </div>
    )
  }
}
