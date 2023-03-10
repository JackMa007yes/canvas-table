/* eslint-disable @typescript-eslint/no-explicit-any */
import useRow from '@/hooks/useRow'
import useVerticalScroll from '@/hooks/useVerticalScroll'

import Table from './Table'

import React, { useRef, useState } from 'react'

const LINE_HEIGHT = 32

type Props = {
  width: number
  height: number
  data: object[]
}

export default function TableStage({ width, height, data }: Props) {
  const [scrollTop, setScrollTop] = useState(0)

  const totalHeight = data.length * LINE_HEIGHT

  const scrollBar = useRef()
  const tableContainer = useRef()
  const { startRow, endRow } = useRow(height, scrollTop)

  useVerticalScroll(tableContainer, scrollBar)

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop)
  }

  return (
    <div className='border overflow-hidden relative' style={{ width: `${width}px`, height: `${height}px` }}>
      <section ref={tableContainer} className='w-full h-full'>
        <Table start={startRow} end={endRow} offsetY={scrollTop} width={width} height={height} data={data} />
      </section>
      <section
        ref={scrollBar}
        className='absolute right-0 h-full w-3 border-x top-0 overflow-auto z-2 bg-main-8'
        onScroll={handleScroll}
      >
        <div style={{ height: `${totalHeight}px`, width: '1px' }}></div>
      </section>
    </div>
  )
}
