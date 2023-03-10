import { useEffect, useState } from 'react'

const DEFAULT_ROW_HEIGHT = 32

export default function useRow(height: number, scrollTop: number) {
  // const

  const [startRow, setStartRow] = useState(0)
  const [endRow, setEndRow] = useState(0)

  useEffect(() => {
    const curStartRow = Math.floor(scrollTop / DEFAULT_ROW_HEIGHT)
    const curEndRow = Math.floor((scrollTop + height) / DEFAULT_ROW_HEIGHT)

    setStartRow(Math.floor(curStartRow))
    setEndRow(Math.floor(curEndRow))
  }, [scrollTop])

  return { startRow, endRow }
}
