import {GridItems, GridPureData} from "@/models/grid"

export const getMatrixMiddle = (size: number) => {
  // todo: how to take the middle for even size
  return Math.floor(size / 2 + 1) - 1
}
export const getComplexKey = (x: number, y: number) => `${x}_${y}`

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

export const getInitGridState = (size: number) => {
  const res: Record<string, boolean> = {}

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
