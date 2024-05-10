import React from 'react'
import Block from '../block'
import './index.scss'

const blocks: number[][] = [
  [0, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 0, 3, 4, 5, 0, 0, 0, 9],
  [1, 2, 0, 0, 5, 0, 7, 0, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 0, 0, 0, 0, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 0, 3, 0, 5, 0, 7, 8, 0],
  [1, 2, 0, 0, 5, 0, 7, 0, 0],
  [0, 0, 3, 0, 5, 0, 7, 0, 9]
]

export default function Panel() {
  const blockNodes = blocks.map(block => <Block numbers={block}/>)

  return (
    <div className="blocks">{ blockNodes }</div>
  )
}
