import React from "react"
import {twMerge} from "tailwind-merge"
import {GridCell} from "@/models/grid"

type Props = {
  onClick: (data: GridCell) => void
  data: GridCell
  selected: boolean
}

export const BingoCell: React.FC<Props> = ({onClick, data, selected}) => {
  return (
    <>
      <div
        onClick={() => onClick(data)}
        className={twMerge(
          "flex h-20 w-20 cursor-pointer items-center justify-center border border-black",
          selected && "text-gray-300"
        )}
      >
        {data.label}
      </div>
    </>
  )
}
