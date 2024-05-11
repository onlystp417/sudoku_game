import React from 'react'
import Block from '../block'
import './index.scss'
import numNode from '../../utils/numNode'

const blocks: numNode[][] = [];
const square = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i:number = 0; i<9; i++) {
  blocks[i] = [];
  for(let j:number = 0; j<9; j++) {
    const index: number = Math.floor(Math.random() * 8);
    blocks[i][j] = new numNode(square[index], false);
  }
}

export default function Panel() {
  const blockNodes = blocks.map((block, index) => <Block key={index} numbers={block}/>)

  return (
    <div className="blocks">{ blockNodes }</div>
  )
}
