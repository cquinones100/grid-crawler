import { LEFT, RIGHT } from '../../constants/movementDirections'
import { totalCells } from '../board/totalCells'
import { determineRowBounds } from '../board/determineRowBounds'
import { boxPositions } from '../board/boxPositions'
import { isASpacePosition, spacePositions } from '../board/spacePositions'

const isWithinRowBounds = (newPosition, rowBounds) =>
  newPosition >= rowBounds[0] && newPosition <= rowBounds[1]

const moveIsLeftOrRight = direction => direction === LEFT || direction === RIGHT

export const moveIsOutOfBoundsHorizontally = (direction, newPosition, rowBounds) => {
  if (newPosition === null) return false
  return moveIsLeftOrRight(direction) && !isWithinRowBounds(newPosition, rowBounds)
}

export const moveIsOutOfBoardBounds = (newPosition, difficulty) => {
  if (newPosition === null) return false
  return newPosition <= -1 || newPosition >= totalCells(difficulty)
}

export const moveShouldCancel = (direction, difficulty, newPosition, boxPosition, currentPosition, level) => {
  const rowBounds = determineRowBounds(difficulty, currentPosition)
  return (
    moveIsOutOfBoundsHorizontally(direction, newPosition, rowBounds) ||
    moveIsOutOfBoardBounds(newPosition, difficulty) ||
    moveIsOutOfBoundsHorizontally(direction, boxPosition, rowBounds) ||
    moveIsOutOfBoardBounds(boxPosition, difficulty) ||
    boxPositions(level).includes(boxPosition) ||
    !isASpacePosition(level, newPosition) ||
    !isASpacePosition(level, boxPosition)
  )
}

export const shouldMoveBlock = (newPosition, level) =>
  boxPositions(level).includes(newPosition)
