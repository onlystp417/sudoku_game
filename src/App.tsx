import './App.scss'
import Panel from './components/panel'
import JoyStick from './components/joystick'
import { generatePuzzle } from './utils/generatePuzzle'
import { numNode } from './utils/numNode'

function App() {
  const [puzzleBoard] = generatePuzzle(2);
  const blocks: numNode[][] = [];

  for(let i:number = 0; i<puzzleBoard.length; i++) {
    blocks[i] = [];
    for(let j:number = 0; j<9; j++) {
        blocks[i][j] = new numNode(puzzleBoard[i][j], false, !!puzzleBoard[i][j]);
    }
  }

  return (
    <div className="sudoku">
      <Panel blocks={blocks}/>
      <JoyStick />
    </div>
  )
}

export default App
