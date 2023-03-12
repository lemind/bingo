import React, {useEffect, useRef, useState} from "react"
import {twMerge} from "tailwind-merge"
import {GridCell, GridItems, GridPureData} from "@/models/grid"
import {
  checkBingo,
  dataToMartix,
  getComplexKey,
  getGridColsClassName,
  getInitGridState,
  getMatrixMiddle
} from "@/helper"
import {BingoCell} from "@/components/BingoCell"
import {useConfetti} from "@/hooks/useConfetti"

type Props = {
  size: number
  data: GridPureData
}

export const BingoGrid: React.FC<Props> = ({size, data}) => {
  const confettiElement = useRef<HTMLCanvasElement>(null)
  const {shoot} = useConfetti({ref: confettiElement})

  const [dataMatrix, setDataMatrix] = useState<GridItems>([])

  const [selectedState, setSelectedState] = useState(getInitGridState(size))

  useEffect(() => {
    setDataMatrix(dataToMartix(data, size))
  }, [])

  useEffect(() => {
    const ifBingo = checkBingo(selectedState)

    if (ifBingo) {
      shoot()
    }
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
      <div className={twMerge("mt-16 grid gap-4", getGridColsClassName(size))}>
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
      <canvas
        className="absolute top-0 left-0 z-minus-1 h-screen w-screen"
        ref={confettiElement}
      />
    </>
  )
}
