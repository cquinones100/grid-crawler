import { determineRowBounds } from './determineRowBounds'

export const calculateDepth = (index, difficulty) => {
  const rowBounds = determineRowBounds(difficulty, index)
  return reversedRowPositions(rowBounds)[index % difficulty]
}

const forwardRowPositions = rowBounds => {
  const array = new Array((rowBounds[1] - rowBounds[0]) + 1).fill('')

  for (let i = 0; i < array.length; i++) {
    array[i] = (rowBounds[0] + i) + 1
  }
  return array
}

export const reversedRowPositions = rowBounds => {
  return forwardRowPositions(rowBounds).reverse()
}
