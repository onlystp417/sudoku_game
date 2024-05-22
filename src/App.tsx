import './App.scss'
import Panel from './components/panel'
import JoyStick from './components/joystick'
import { generatePuzzle } from './utils/generatePuzzle'
import numNode from './utils/numNode'
import { createContext, useState } from 'react';

interface CurrCellContextType {
  currCell: numNode
  setCurrCell: (cell: numNode) => void
}

function App() {
  const [puzzleBoard] = generatePuzzle(2);
  const blocks: numNode[][] = [];
  const CurrCellContext = createContext<CurrCellContextType | undefined>(undefined);
  const [currCell, setCurrCell] = useState<numNode>(new numNode(0, false, false));

  for(let i:number = 0; i<puzzleBoard.length; i++) {
    blocks[i] = [];
    for(let j:number = 0; j<9; j++) {
        blocks[i][j] = new numNode(puzzleBoard[i][j], false, !!puzzleBoard[i][j]);
    }
  }

  return (
    <CurrCellContext.Provider value={{ currCell, setCurrCell }}>
      <div className="sudoku">
        <Panel blocks={blocks}/>
        <JoyStick />
      </div>
    </CurrCellContext.Provider>
  )
}

export default App
