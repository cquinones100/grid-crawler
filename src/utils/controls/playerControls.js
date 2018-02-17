import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'

const totalCells = difficulty => Math.pow(difficulty, 2)

export const movePlayer = (currentPosition, direction, difficulty) => {
  const directions = {
    [RIGHT]: 1,
    [LEFT]: -1,
    [DOWN]: difficulty,
    [UP]: difficulty * -1
  }

  const newPosition = currentPosition + directions[direction]

  const rowBounds = determineRowBounds(difficulty, currentPosition)

  const moveIsLeftOrRight = direction === LEFT || direction === RIGHT

  const isWithinRowBounds = newPosition >= rowBounds[0] &&
    newPosition <= rowBounds[1]

  if (moveIsLeftOrRight && !isWithinRowBounds) {
    return currentPosition
  }

  if (newPosition > -1 && newPosition < totalCells(difficulty)) {
    return newPosition
  }

  return currentPosition
}

export const determineRowBounds = (difficulty, position) => {
  let base = difficulty - 1
  let outerBound = base
  while (position > outerBound) {
    outerBound += difficulty
  }
  return [outerBound - base, outerBound]
}
