import React, { Component } from 'react'
import Cell from './Cell'
import PropTypes from 'prop-types'
import { LEVELS } from '../constants/levels'
import { movePlayer } from '../utils/controls/playerControls'
import { UP, DOWN, LEFT, RIGHT } from '../constants/movementDirections'
import { boxPositions } from '../utils/controls/playerControls'

class Board extends Component {
  constructor(props) {
    super(props)
    const level = LEVELS.find(level => level.id === this.props.level)
    const { difficulty } = level

    const totalNumberOfCells = Math.pow(difficulty, 2)

    const gridArray = new Array(totalNumberOfCells).fill('')
    const rowAndColumnArray = new Array(difficulty).fill('')

    const rowAndColumnStyling = rowAndColumnArray.reduce(acc => acc += 'auto ', '')
    const widthAndHeight = difficulty * 80

    const style = {
      gridTemplateRows: rowAndColumnStyling,
      gridTemplateColumns: rowAndColumnStyling,
      width: widthAndHeight + 'px',
      height: widthAndHeight + 'px'
    }

    this.state = { level, gridArray, style, totalNumberOfCells, position: 0 }
  }

  componentDidMount() {
    window.document.addEventListener('keydown', e => this.handleKeyDown(e))
  }

  handleKeyDown(e) {
    const directions = [UP, DOWN, LEFT, RIGHT]
    const { position, level } = this.state
    const { difficulty } = level
    const direction = e.keyCode

    if (directions.includes(direction)) {
      this.setState({
        position: movePlayer(position, direction, difficulty, level.id)
      }, () => {
        const { position, level } = this.state
        const { obstacles } = level

        if (boxPositions(level).includes(position)) {
          const newObstacles = obstacles.map(box => {
            if (parseInt(box.position, 10) === parseInt(position, 10)) {
              return { ...box, position: box.position + 1 }
            }
            return {...box}
          })

          this.setState({
            ...this.state,
            level: {
              ...this.state.level,
              obstacles: newObstacles
            }
          })
        }
      })
    }
  }

  render() {
    const { position, level, style, gridArray } = this.state
    const { difficulty, obstacles } = level

    return(
      <div
        className='grid-container'
        style={{...style}}
        onKeyDown={e => this.handleKeyDown(e)}
      >
        { gridArray.map((ele, index) =>
          <Cell
            key={index}
            index={index}
            man={index === position ? true : false}
            obstacle={obstacles.find(obs => obs.position === index) ? true : false}
            difficulty={difficulty}
            position={position}
          />
        )}
      </div>
    )
  }
}

Board.propTypes = {
  style: PropTypes.object,
  level: PropTypes.number,
}

export default Board
