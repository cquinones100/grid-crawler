export const spacePositions = level => level.spaces.map(obs => obs.position)

export const isASpacePosition = (level, position) => {
  if (position === null) { return true }
  if (spacePositions(level).includes(position)) { return true }
  return false
}
