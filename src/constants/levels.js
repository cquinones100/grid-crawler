const LEVEL_ONE = {
  id: 1,
  difficulty: 8,
  startingPosition: 36,
  targets: [
    { position: 11 },
    { position: 33 },
    { position: 60 },
    { position: 31 },
  ],
  boxes: [
    { position: 35 },
    { position: 27 },
    { position: 44 },
    { position: 29 }
  ],
  spaces: [
    { position: 11 },
    { position: 19 },
    { position: 27 },
    { position: 28 },
    { position: 29 },
    { position: 30 },
    { position: 31 },
    { position: 33 },
    { position: 34 },
    { position: 35 },
    { position: 36 },
    { position: 44 },
    { position: 52 },
    { position: 60 }
  ]
}

const LEVEL_TWO = {
  id: 2,
  difficulty: 9,
  startingPosition: 48,
  targets: [
    { position: 34 },
    { position: 43 },
    { position: 52 }
  ],
  boxes: [
    { position: 57 },
    { position: 20 },
    { position: 29 }
  ],
  spaces: [
    { position: 10 },
    { position: 11 },
    { position: 12 },
    { position: 19 },
    { position: 20 },
    { position: 21 },
    { position: 28 },
    { position: 29 },
    { position: 30 },
    { position: 34 },
    { position: 39 },
    { position: 43 },
    { position: 48 },
    { position: 49 },
    { position: 50 },
    { position: 51 },
    { position: 52 },
    { position: 56 },
    { position: 57 },
    { position: 58 },
    { position: 60 },
    { position: 61 },
    { position: 65 },
    { position: 66 },
    { position: 67 }
  ]
}

const LEVEL_THREE = {
  id: 3,
  difficulty: 6,
  startingPosition: 7,
  targets: [
    { position: 25 },
    { position: 31 },
    { position: 32 },
    { position: 33 },
    { position: 34 }
  ],
  boxes: [
    { position: 8 },
    { position: 14 },
    { position: 21 },
    { position: 26 },
    { position: 33 }
  ],
  spaces: [
    { position: 7 },
    { position: 8 },
    { position: 9 },
    { position: 2 },
    { position: 3 },
    { position: 14 },
    { position: 15 },
    { position: 20 },
    { position: 21 },
    { position: 22 },
    { position: 25 },
    { position: 26 },
    { position: 27 },
    { position: 28 },
    { position: 31 },
    { position: 32 },
    { position: 33 },
    { position: 34 },
  ]
}

const LEVEL_FOUR = {
  id: 4,
  difficulty: 8,
  startingPosition: 3,
  targets: [
    { position: 33 },
    { position: 41 },
    { position: 25 },
  ],
  boxes: [
    { position: 11 },
    { position: 34 },
    { position: 45 },
  ],
  spaces: [
    { position: 2 },
    { position: 3 },
    { position: 10 },
    { position: 11 },
    { position: 12 },
    { position: 13 },
    { position: 17 },
    { position: 19 },
    { position: 25 },
    { position: 27 },
    { position: 33 },
    { position: 34 },
    { position: 35 },
    { position: 36 },
    { position: 41 },
    { position: 21 },
    { position: 29 },
    { position: 30 },
    { position: 38 },
    { position: 42 },
    { position: 43 },
    { position: 44 },
    { position: 45 },
    { position: 46 }
  ]
}


export const LEVELS = [
  LEVEL_ONE,
  LEVEL_TWO,
  LEVEL_THREE,
  LEVEL_FOUR
]

export const findLevelById = id =>
  LEVELS.find(level => parseInt(level.id, 10) === parseInt(id, 10))
