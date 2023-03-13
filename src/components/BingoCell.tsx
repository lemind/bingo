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
          "md:!text-md flex h-20 w-16 cursor-pointer items-center justify-center border border-black p-2 !text-xxs min-[460px]:w-20 sm:h-24 sm:w-24 sm:!text-sm md:h-28 md:w-28",
          selected && "bg-purple-100 text-gray-500"
        )}
      >
        {data.label}
      </div>
    </>
  )
}
