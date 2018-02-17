import React from 'react'
import {
  move,
  determineRowBounds
} from '../../utils/controls/playerControls.js'
import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'
import { LEVELS } from '../../constants/levels'

describe('move player', () => {
  const currentPosition = 1
  const difficulty = 5

  it('returns the correct new position depending on input', () => {
    let direction = RIGHT
    let newPosition = 2

    expect(move(currentPosition, direction, 1)).toEqual(newPosition)

    direction = LEFT
    newPosition = 0

    expect(move(currentPosition, direction, 1)).toEqual(newPosition)

    direction = DOWN
    newPosition = 6

    expect(move(currentPosition, direction, 1)).toEqual(newPosition)

    direction = UP
    const newCurrentPosition = 6
    newPosition = 1

    expect(move(newCurrentPosition, direction, 1)).toEqual(newPosition)
  })

  it('does not let a user go beyond the bounds of the board', () => {
    let currentPosition = 24

    let direction = RIGHT

    expect(move(currentPosition, direction, 1)).toEqual(24)
    direction = DOWN

    expect(move(currentPosition, direction, 1)).toEqual(24)

    currentPosition = 4
    direction = RIGHT

    expect(move(currentPosition, direction, 1)).toEqual(4)
  })
})

it('determines the row bounds', () => {
  let difficulty = 5
  let position = 4
  expect(determineRowBounds(difficulty, position)).toEqual([0, 4])

  position = 23
  expect(determineRowBounds(difficulty, position)).toEqual([20, 24])
})

describe('move block', () => {
  let currentPosition = 3
  let direction = RIGHT

  expect(move(currentPosition, direction, 1)).toEqual(4)
})
