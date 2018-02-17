export const LEVELS = [{
  id: 1,
  difficulty: 5,
  targets: [{ position: 8 }],
  obstacles: [
    { position: 3 },
    { position: 5 },
    { position: 20 },
    { position: 25 }
  ]
}]

export const findLevelById = id =>
  LEVELS.find(level => parseInt(level.id, 10) === parseInt(id, 10))
