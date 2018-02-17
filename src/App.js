import React, { Component } from 'react'
import './App.css'
import Board from './Board/Board'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { level: 1 }
  }

  render() {
    const { level } = this.state

    if (!level) { return <div /> }

    return (
      <div className='stage-container'>
        <Board level={1} />
      </div>
    )
  }
}

export default App
