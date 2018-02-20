import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'
import { findLevelById } from '../../constants/levels'
import { moveShouldCancel, shouldMoveBlock } from './moveAssertions.js'

export const spacesToMove = (direction, difficulty) => {
  const directions = {
    [RIGHT]: 1,
    [LEFT]: -1,
    [DOWN]: difficulty,
    [UP]: difficulty * -1
  }

  return directions[direction]
}

export const move = (currentPosition, direction, level) => {
  const { difficulty } = level

  const newPosition = currentPosition + spacesToMove(direction, difficulty)

  let boxPosition = null

  if (shouldMoveBlock(newPosition, level)) {
    boxPosition = newPosition + spacesToMove(direction, difficulty)
  }

  if (moveShouldCancel(direction, difficulty, newPosition, boxPosition, currentPosition, level)) {
    return [currentPosition, null]
  }

  return [newPosition, boxPosition]
}
