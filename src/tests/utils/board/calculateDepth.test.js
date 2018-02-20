import React from 'react'
import { calculateDepth, reversedRowPositions } from '../../../utils/board/calculateDepth'

fit('should return the correct depth for a given index', () => {
  let difficulty = 2

  expect(calculateDepth(0, 2)).toEqual(2)
  expect(calculateDepth(1, 2)).toEqual(1)
  expect(calculateDepth(3, 2)).toEqual(3)
  expect(calculateDepth(2, 2)).toEqual(4)

  difficulty = 4

  expect(calculateDepth(12, 4)).toEqual(16)
  expect(calculateDepth(0, 4)).toEqual(4)
  expect(calculateDepth(3, 4)).toEqual(1)
  expect(calculateDepth(15, 4)).toEqual(13)
})

it('should reverse row positions based on row bounds', () => {
  const rowBounds = [2,4]
  expect(reversedRowPositions(rowBounds)).toEqual([4,3,2])
})
