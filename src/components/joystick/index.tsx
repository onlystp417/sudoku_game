import React from 'react'
import './index.scss'

export default function JoyStick() {
  const numButton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="joystick">
      { numButton.map(num => <div><button>{ num || 'X' }</button></div>) }
    </div>
  )
}
