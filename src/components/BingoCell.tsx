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
          "flex h-28 w-28 cursor-pointer items-center justify-center border border-black p-2 text-sm",
          selected && "bg-purple-100 text-gray-500"
        )}
      >
        {data.label}
      </div>
    </>
  )
}
