import React from 'react'
import Block from '../block'
import './index.scss'
import { numNode } from '../../utils/numNode'

interface props {
  blocks: numNode[][];
}

export default function Panel({ blocks }: props) {
  const blockNodes = blocks.map((block, index) => <Block key={index} numbers={block}/>)

  return (
    <div className="blocks">{ blockNodes }</div>
  )
}
