import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'
import { LEVELS, findLevelById } from '../../constants/levels'

const totalCells = difficulty => Math.pow(difficulty, 2)

export const boxPositions = level => level.obstacles.map(obs => obs.position)

const isWithinRowBounds = (newPosition, rowBounds) =>
  newPosition >= rowBounds[0] && newPosition <= rowBounds[1]

const moveIsLeftOrRight = direction => direction === LEFT || direction === RIGHT

const moveIsOutOfBoundsHorizontally = (direction, newPosition, rowBounds) =>
  moveIsLeftOrRight(direction) && !isWithinRowBounds(newPosition, rowBounds)

const moveIsOutOfBoardBounds = (newPosition, difficulty) =>
  newPosition <= -1 || newPosition >= totalCells(difficulty)

export const movePlayer = (currentPosition, direction, difficulty, levelId) => {
  const directions = {
    [RIGHT]: 1,
    [LEFT]: -1,
    [DOWN]: difficulty,
    [UP]: difficulty * -1
  }

  const level = findLevelById(levelId)

  const newPosition = currentPosition + directions[direction]

  const rowBounds = determineRowBounds(difficulty, currentPosition)

  if (moveIsOutOfBoundsHorizontally(direction, newPosition, rowBounds)) {
    return currentPosition
  }
  if (moveIsOutOfBoardBounds(newPosition, difficulty)) { return currentPosition }

  return newPosition
}

export const determineRowBounds = (difficulty, position) => {
  let base = difficulty - 1
  let outerBound = base
  while (position > outerBound) {
    outerBound += difficulty
  }
  return [outerBound - base, outerBound]
}

export const move = (currentPosition, direction, levelId) => {
  const level = findLevelById(levelId)
  const { difficulty } = level

  const directions = {
    [RIGHT]: 1,
    [LEFT]: -1,
    [DOWN]: difficulty,
    [UP]: difficulty * -1
  }

  const newPosition = currentPosition + directions[direction]

  const rowBounds = determineRowBounds(difficulty, currentPosition)

  if (moveIsOutOfBoundsHorizontally(direction, newPosition, rowBounds)) {
    return currentPosition
  }
  if (moveIsOutOfBoardBounds(newPosition, difficulty)) { return currentPosition }

  return newPosition
}
