// decalre sudoku data structure
type SudokuBoard = number[][];
const sudokuRamNum: number[] = [];

function generateRamNum(index: number = 0): void {
    const ramNum: number = Math.floor(Math.random() * 9) + 1;
    if (index >= 9)
        return;
    if (index == 0) {
        sudokuRamNum[index] = ramNum;
        generateRamNum(index+1);
    } else {
        let isRepeat: boolean = false;
        for(let j=0; j<index; j++) {
            if(sudokuRamNum[j] == ramNum)
                isRepeat = true;
        }
        if (isRepeat)
            generateRamNum(index);
        else {
            sudokuRamNum[index] = ramNum;
            generateRamNum(index+1);
        }
    }
}

// check specific (rowm col) is valid
function isValid(board: SudokuBoard, row: number, col: number, value: number): boolean {
    // check if is duplcated in the same row
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === value) {
            return false;
        }
    }
    
    // check if is duplcated in the same col
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === value) {
            return false;
        }
    }
    
    // check if is duplcated in the same 3*3 block
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === value) {
                return false;
            }
        }
    }
    
    return true;
}

// generate random sudoku puzzle
export function generateSudoku(): SudokuBoard {
    generateRamNum();
    const board: SudokuBoard = new Array(9).fill(null).map(() => new Array(9).fill(0));
    fillSudoku(board);
    return board;
}

// fill sudoku cells
function fillSudoku(board: SudokuBoard): boolean {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true; // cells is completely filled
    }
    
    const [row, col] = emptyCell;

    for (const num of sudokuRamNum) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (fillSudoku(board)) {
                return true;
            }
            board[row][col] = 0; // go back to prev (row, col), cuz there no valid number to fill in the cell
        }
    }
    
    return false; // no number valid
}

// find empty cell
function findEmptyCell(board: SudokuBoard): [number, number] | null {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null; // cells is completely filled
}

// hollow out cells randomly
export function generatePuzzle(difficultyLevel: number): [SudokuBoard, SudokuBoard] {
    const puzzleAnswer: SudokuBoard = generateSudoku();
    const puzzleBoard = puzzleAnswer.map(row => [...row]); // copy the whole cells value as answer
    
    // hollow out depends on the level
    let cellsToBeRemoved = 0;
    switch (difficultyLevel) {
        case 1:
            cellsToBeRemoved = 40; // easy
            break;
        case 2:
            cellsToBeRemoved = 50; // intermidiate
            break;
        case 3:
            cellsToBeRemoved = 60; // advanced
            break;
        default:
            cellsToBeRemoved = 40; // default easy
            break;
    }
    
    while (cellsToBeRemoved > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (puzzleBoard[row][col] !== 0) {
            puzzleBoard[row][col] = 0;
            cellsToBeRemoved--;
        }
    }
    
    return [ puzzleBoard, puzzleAnswer ];
}
