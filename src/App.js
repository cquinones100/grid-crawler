import React, { Component } from 'react'
import './App.css'
import Board from './Board/Board'
import { LEVELS } from './constants/levels'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level: 1,
      lives: 4,
      transitioning: false,
      fadingOut: false
    }
  }

  transition(callback) {
    return this.setState({
      fadingOut: true
    }, () => {
      setTimeout(() => {
        this.setState({
          fadingOut: false,
          transitioning: true
        }, () => {
          callback(() => {
            this.setState({
              transitioning: false,
              fadingOut: false
            })
          })
        })
      }, 500)
    })
  }

  nextLevel() {
    const { level } = this.state
    const nextLevel = level + 1

    if (nextLevel <= LEVELS.length) {
      this.transition(callback => {
        this.setState({level: nextLevel}, callback())
      })
    }
  }

  resetLevel() {
    const { lives } = this.state

    this.transition(callback => {
      this.setState({
        lives: lives - 1,
      }, () => {
        const { lives } = this.state

        if (lives <= -1) {
          this.setState({
            level: 1,
            lives: 4
          })
        }
      }, callback())
    })
  }

  render() {
    const { level, lives, transitioning, fadingOut } = this.state

    if (!level) { return <div /> }

    if (transitioning) { return <div />}

    let className = 'stage-container'

    if (fadingOut) {
      className += ' fade-out'
    }

    return (
      <div className={className}>
        <Board
          level={level}
          nextLevel={() => this.nextLevel()}
          lives={lives}
          restartLevel={() => this.resetLevel()}
          transitioning={transitioning}
          fadingOut={fadingOut}
        />
      </div>
    )
  }
}

export default App
