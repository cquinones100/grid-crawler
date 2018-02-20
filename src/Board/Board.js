import React, { Component } from 'react'
import Cell from './Cell'
import PropTypes from 'prop-types'
import { findLevelById } from '../constants/levels'
import { UP, DOWN, LEFT, RIGHT } from '../constants/movementDirections'
import {  spacesToMove, move } from '../utils/controls/playerControls'
import { boxPositions } from '../utils/board/boxPositions'
import { updateScore } from '../utils/board/updateScore'
import { targetPositions } from '../utils/board/targetPositions'
import { totalCells } from '../utils/board/totalCells'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level: {},
      gridArray: [],
      style: {},
      totalNumberOfCells: 0,
      position: 0,
      score: 0
    }
  }

  componentDidMount() {
    window.document.addEventListener('keydown', e => this.handleKeyDown(e))
    this.setLevel(this.props.level)
  }

  setLevel(levelId) {
    const level = findLevelById(levelId)
    const { difficulty } = level

    const totalNumberOfCells = totalCells(difficulty)
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

    const { startingPosition } = level

    this.setState({
      ...this.state,
      level,
      gridArray,
      style,
      totalNumberOfCells,
      position: startingPosition,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { level, lives } = this.props
    const { level:nextLevel, lives:nextLives, transitioning, fadingOut } = nextProps

    if (transitioning || fadingOut) { return }

    if (level !== nextLevel || lives > nextLives) {
      return this.setLevel(nextLevel)
    }
  }

  componentDidUpdate() {
    const { score, level } = this.state
    const { transitioning, fadingOut } = this.props

    if (transitioning || fadingOut) { return }


    if (score === targetPositions(level).length) {
      this.props.nextLevel()
    }
  }

  handleMovement(direction) {
    const { position, level } = this.state
    const { difficulty, boxes } = level
    const newPositions = move(position, direction, level)

    const newBoxes = boxPositions(level).map(boxPos => {
      const box = boxes.find(obs =>
        obs.position === boxPos
      )

      if (box.position === newPositions[0]) {
        return {
          ...box,
          position: boxPos + spacesToMove(direction, difficulty)
        }
      }
      return box
    })

    this.setState({
      ...this.state,
      position: newPositions[0],
      level: {
        ...this.state.level,
        boxes: newBoxes
      }
    }, () => {
      const { level, score } = this.state
      const newScore = updateScore(level)

      if (score !== newScore) {
        this.setState({
          ...this.state,
          score: newScore
        })
      }
    })
  }

  handleKeyDown(e) {
    const directions = [UP, DOWN, LEFT, RIGHT]
    const direction = e.keyCode
    if (e.keyCode === 82) {
      this.props.restartLevel()
    }

    if (directions.includes(direction)) {
      this.handleMovement(direction)
    }

  }

  render() {
    const { position, level, style, gridArray } = this.state
    const { difficulty, boxes, targets, spaces } = level
    const { lives } = this.props

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
            box={boxes.find(box => box.position === index) ? true : false}
            difficulty={difficulty}
            position={position}
            target={targets.find(targ => targ.position === index) ? true : false}
            space={spaces.find(space => space.position === index) ? true : false}
            lives={this.props.lives}
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
