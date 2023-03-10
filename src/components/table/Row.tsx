import React from 'react'
import { Rect, Text } from 'react-konva'

type Props = {
  index: number
  data: object
}
export default function Row({ data, index }: Props) {
  const textList = [index].concat(Object.entries(data).map((item) => item[1]))

  return (
    <>
      {textList.map((item, key) => {
        return (
          <>
            <Rect width={121} height={32} stroke='white' y={32 * index} x={key * 121} strokeWidth={1} key={key} />
            <Text
              width={121}
              height={32}
              text={typeof item === 'number' ? String(item + 1) : item}
              padding={4}
              y={32 * index + 6}
              x={key * 121}
              fill='white'
              fontSize={14}
              ellipsis={true}
              key={index + '_text'}
            />
          </>
        )
      })}
    </>
  )
}
