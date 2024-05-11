import React from 'react'
import './index.scss'


interface props {
  numbers: number[];
}

export default function Block({ numbers }: props) {
  const numNodes = numbers.map((number, index) => (
    <span className="block__cell" key={index}>{number || ''}</span>
  ));

  return (
    <div className="block">
      {numNodes}
    </div>
  );
}
