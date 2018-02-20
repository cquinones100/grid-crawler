import React from 'react'
import { move } from '../../utils/controls/playerControls.js'
import { shouldMoveBlock } from '../../utils/controls/moveAssertions'
import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'

const level = {
  id: 1,
  difficulty: 5,
  targets: [
    { position: 3 },
    { position: 5 },
    { position: 24 },
  ],
  boxes: [
    { position: 8 },
    { position: 5 },
    { position: 21 },
    { position: 25 }
  ],
  obstacles: [

  ]
}

describe('move player', () => {
  const currentPosition = 1

  it('returns the correct new position depending on input', () => {
    let direction = RIGHT
    let newPosition = [2, null]

    expect(move(currentPosition, direction, level)).toEqual(newPosition)

    direction = LEFT
    newPosition = [0, null]

    expect(move(currentPosition, direction, level)).toEqual(newPosition)

    direction = DOWN
    newPosition = [6, null]

    expect(move(currentPosition, direction, level)).toEqual(newPosition)

    direction = UP
    const newCurrentPosition = 6
    newPosition = [1, null]

    expect(move(newCurrentPosition, direction, level)).toEqual(newPosition)
  })

  it('does not let a user go beyond the bounds of the board', () => {
    let currentPosition = 24

    let direction = RIGHT

    expect(move(currentPosition, direction, level)).toEqual([24, null])
    direction = DOWN

    expect(move(currentPosition, direction, level)).toEqual([24, null])

    currentPosition = 4
    direction = RIGHT

    expect(move(currentPosition, direction, level)).toEqual([4, null])
  })
})

describe('move block', () => {
  const currentPosition = 2
  const direction = RIGHT
  const newPosition = 3

  it('knows when it should move a block', () => {
    expect(shouldMoveBlock(newPosition, level)).toEqual(true)
  })

  it('knows when it should move a block', () => {
    expect(shouldMoveBlock(2, level)).toEqual(false)
  })

  it('moves blocks', () => {
    expect(move(currentPosition, direction, level)).toEqual([3, 4])
  })

  xit('cannot move block off of the board', () => {
    let currentPosition = 4
    let direction = RIGHT

    expect(move(currentPosition, direction, level)).toEqual([3, null])
  })
})
