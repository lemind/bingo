import {GridItems, GridPureData} from "@/models/grid"

export const getMatrixMiddle = (size: number) => {
  // todo: how to take the middle for even size
  return Math.floor(size / 2 + 1) - 1
}
export const getComplexKey = (x: number, y: number) => `${x}_${y}`
export const parseComplexKey = (str: string): number[] => {
  const resString = str.split("_")
  return resString.map((r) => Number(r))
}

export const dataToMartix = (data: GridPureData, size: number) => {
  const res: GridItems = []

  for (let i = 0; i < size; i++) {
    if (res[i] === undefined) {
      res[i] = []
    }
    for (let j = 0; j < size; j++) {
      res[i][j] = {
        label: data[size * i + j],
        x: i,
        y: j
      }
    }
  }

  return res
}

type BingoState = Record<string, boolean>
export const getInitGridState = (size: number) => {
  const res: BingoState = {}

  const middle = getMatrixMiddle(size)

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (middle === i && middle === j) {
        res[getComplexKey(i, j)] = true
      } else {
        res[getComplexKey(i, j)] = false
      }
    }
  }

  return res
}

const COLS_CLASS_NAMES: Record<number, string> = {
  // ...
  5: "grid-cols-5"
}
export const getGridColsClassName = (colsNumner: number) =>
  COLS_CLASS_NAMES[colsNumner]

export const checkBingo = (state: BingoState) => {
  let bingoNumber = 0
  const size = Math.sqrt(Object.keys(state).length)
  const bingoMap = new Map()

  const updateBingo = (key: string) => {
    const curr = bingoMap.get(key)
    if (!curr) {
      bingoMap.set(key, 1)
    } else {
      const newValue = curr + 1
      bingoMap.set(key, newValue)
      if (newValue === size) {
        bingoNumber = bingoNumber + 1
      }
    }
  }

  Object.keys(state).forEach((key) => {
    if (state[key]) {
      const keyXY = parseComplexKey(key)
      const x = keyXY[0]
      const y = keyXY[1]

      if (x === y) {
        updateBingo("leftDiagonal")
      }
      if (x + y === size - 1) {
        updateBingo("rightDiagonal")
      }

      updateBingo(`x${x}`)
      updateBingo(`y${y}`)
    }
  })

  return bingoNumber
}

// from stackoverflow
export function arrayShuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}
