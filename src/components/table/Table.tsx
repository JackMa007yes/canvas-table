import Row from './Row'

import React from 'react'
import { Group, Layer, Stage } from 'react-konva'

type Props = {
  width: number
  height: number
  start: number
  end: number
  offsetY: number
  data: object[]
}
export default function Table({ width, height, start, end, offsetY, data }: Props) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Group offsetY={offsetY}>
          {data.slice(start, end + 1).map((item, index) => (
            <Row key={index} index={start + index} data={item}></Row>
          ))}
        </Group>
      </Layer>
    </Stage>
  )
}
