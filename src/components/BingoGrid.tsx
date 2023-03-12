import React, {useEffect, useState} from "react"
import {GridCell, GridItems, GridPureData} from "@/models/grid"
import {
  dataToMartix,
  getComplexKey,
  getInitGridState,
  getMatrixMiddle
} from "@/helper"
import {BingoCell} from "@/components/BingoCell"

type Props = {
  size: number
  data: GridPureData
}

export const BingoGrid: React.FC<Props> = ({size, data}) => {
  const [dataMatrix, setDataMatrix] = useState<GridItems>([])

  const [selectedState, setSelectedState] = useState(getInitGridState(size))

  useEffect(() => {
    setDataMatrix(dataToMartix(data, size))
  }, [])

  useEffect(() => {
    console.log("check if we have BINGO!!")
  }, [selectedState])

  const cellClickHandle = (cellData: GridCell) => {
    const middle = getMatrixMiddle(size)
    const {x, y} = cellData

    if (x === middle && y === middle) {
      return
    } else {
      setSelectedState({
        ...selectedState,
        [getComplexKey(x, y)]: !selectedState[getComplexKey(x, y)]
      })
    }
  }

  return (
    <>
      <div className="mt-16 grid grid-cols-5 gap-4">
        {dataMatrix.map((row) => {
          return row.map((cell) => (
            <BingoCell
              onClick={cellClickHandle}
              data={cell}
              selected={selectedState[`${cell.x}_${cell.y}`]}
            />
          ))
        })}
      </div>
    </>
  )
}
