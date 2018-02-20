export const determineRowBounds = (difficulty, position) => {
  let base = difficulty - 1
  let outerBound = base
  while (position > outerBound) {
    outerBound += difficulty
  }
  return [outerBound - base, outerBound]
}
