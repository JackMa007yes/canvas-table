import React, { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useVerticalScroll(gridRef: any, verticalScrollRef: any) {
  useEffect(() => {
    const grid = gridRef.current
    const verticalScrollBar = verticalScrollRef.current

    const onWheel = (e: React.WheelEvent) => {
      const deltaY = e.deltaY
      verticalScrollBar!.scrollTop = verticalScrollBar!.scrollTop += deltaY
    }

    grid?.addEventListener('wheel', onWheel)

    return () => {
      grid?.removeEventListener('wheel', onWheel)
    }
  }, [])
}
