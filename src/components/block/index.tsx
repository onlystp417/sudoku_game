import React from 'react'
import './index.scss'
import numNode from '../../utils/numNode'

interface props {
  numbers: numNode[];
}

export default function Block({ numbers }: props) {
  const numNodes = numbers.map((number, index) => (
    <span
      className="block__cell" key={index}
      // onClick={}
      >
        {number.getValue() || ''}
    </span>
  ));

  return (
    <div className="block">
      {numNodes}
    </div>
  );
}
