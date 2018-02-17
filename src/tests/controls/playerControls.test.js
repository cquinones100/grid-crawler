import React from 'react'
import {
  movePlayer,
  determineRowBounds
} from '../../utils/controls/playerControls.js'
import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'

describe('move player', () => {
  const currentPosition = 1
  const difficulty = 5

  it('returns the correct new position depending on input', () => {
    let direction = RIGHT
    let newPosition = 2

    expect(movePlayer(currentPosition, direction, difficulty)).toEqual(newPosition)

    direction = LEFT
    newPosition = 0

    expect(movePlayer(currentPosition, direction, difficulty)).toEqual(newPosition)

    direction = DOWN
    newPosition = 6

    expect(movePlayer(currentPosition, direction, difficulty)).toEqual(newPosition)

    direction = UP
    const newCurrentPosition = 6
    newPosition = 1

    expect(movePlayer(newCurrentPosition, direction, difficulty)).toEqual(newPosition)
  })

  it('does not let a user go beyond the bounds of the board', () => {
    let currentPosition = 24

    let direction = RIGHT

    expect(movePlayer(currentPosition, direction, difficulty)).toEqual(24)
    direction = DOWN

    expect(movePlayer(currentPosition, direction, difficulty)).toEqual(24)

    currentPosition = 4
    direction = RIGHT

    expect(movePlayer(currentPosition, direction, difficulty)).toEqual(4)
  })
})

it('determines the row bounds', () => {
  let difficulty = 5
  let position = 4
  expect(determineRowBounds(difficulty, position)).toEqual([0, 4])

  position = 23
  expect(determineRowBounds(difficulty, position)).toEqual([20, 24])
})
