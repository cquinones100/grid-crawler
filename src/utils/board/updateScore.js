import { boxPositions } from './boxPositions'
import { targetPositions } from './targetPositions'

export const updateScore = level => {
  const boxes = boxPositions(level)
  const targets = targetPositions(level)
  return boxes.filter(box => targets.includes(box)).length
}
