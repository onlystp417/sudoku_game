// 定义 9x9 的二维数组作为 Sudoku 棋盘
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

// 检查在指定位置 (row, col) 填入数字 value 是否符合 Sudoku 规则
function isValid(board: SudokuBoard, row: number, col: number, value: number): boolean {
    // 检查同一行是否已经有相同数字
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === value) {
            return false;
        }
    }
    
    // 检查同一列是否已经有相同数字
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === value) {
            return false;
        }
    }
    
    // 检查 3x3 的子区域是否已经有相同数字
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

// 生成一个随机的 Sudoku 解答
export function generateSudoku(): SudokuBoard {
    generateRamNum();
    const board: SudokuBoard = new Array(9).fill(null).map(() => new Array(9).fill(0));
    fillSudoku(board);
    return board;
}

// 填充 Sudoku 棋盘的主逻辑
function fillSudoku(board: SudokuBoard): boolean {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true; // 棋盘已经填满
    }
    
    const [row, col] = emptyCell;

    for (const num of sudokuRamNum) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (fillSudoku(board)) {
                return true;
            }
            board[row][col] = 0; // 回溯
        }
    }
    
    return false; // 无法填入有效数字
}

// 找到 Sudoku 棋盘中的空单元格
function findEmptyCell(board: SudokuBoard): [number, number] | null {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null; // 棋盘已填满
}

// 根据已有解答随机挖空生成题目
export function generatePuzzle(board: SudokuBoard, difficultyLevel: number): SudokuBoard {
    const puzzleBoard = board.map(row => [...row]); // 复制一份解答作为题目
    
    // 根据难度级别挖空
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
    
    // 随机挖空指定数量的单元格
    while (cellsToBeRemoved > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (puzzleBoard[row][col] !== 0) {
            puzzleBoard[row][col] = 0;
            cellsToBeRemoved--;
        }
    }
    
    return puzzleBoard;
}

// 示例用法
// generateRamNum(0);
// const sudokuSolution = generateSudoku();
// const sudokuPuzzle = generatePuzzle(sudokuSolution, 2); // 中等难度题目
