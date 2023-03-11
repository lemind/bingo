import React from 'react'
import { GridDataItem } from '@/models/item'

type Props = {
  data: GridDataItem
}

export const BingoGrid: React.FC<Props> = ({data}) => {
  return <>
    <div className='mt-5 grid grid-cols-5 gap-4'>
      {data.map(row => {
        return row.map(cell => <div>{cell}</div>)
      })}
    </div>
  </>
}