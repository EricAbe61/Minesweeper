import { useState } from 'react';
import './Board.css';


// Custom Hook for Minesweeper Game Logic
function useGameLogic(rows, cols, mines) {
  const [board, setBoard] = useState(initializeBoard(rows, cols, mines));
  const [minesLeft, setMinesLeft] = useState(mines);

  // Initialize the board with random mines
  function initializeBoard(rows, cols, mines) {
    const board = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isRevealed: false,
        isMine: false,
        isFlagged: false,
        neighborCount: 0,
      }))
    );

    let placedMines = 0;
    while (placedMines < mines) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);

      if (!board[row][col].isMine) {
        board[row][col].isMine = true;
        placedMines++;
        updateNeighbors(board, row, col);
      }
    }

    return board;
  }

  // Update neighbor mine counts
  function updateNeighbors(board, row, col) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const r = row + i;
        const c = col + j;
        if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && !(i === 0 && j === 0)) {
          board[r][c].neighborCount++;
        }
      }
    }
  }

  // Uncover a cell
  function uncoverCell(row, col) {
    const newBoard = [...board];
    const cell = newBoard[row][col];

    if (cell.isRevealed || cell.isFlagged) return;
    cell.isRevealed = true;

    if (cell.isMine) {
      alert('Game Over!');
      return;
    }

    // Auto-uncover empty neighbors
    if (cell.neighborCount === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const r = row + i;
          const c = col + j;
          if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && !(i === 0 && j === 0)) {
            uncoverCell(r, c);
          }
        }
      }
    }

    setBoard(newBoard);
  }

  // Toggle flag on a cell
  function toggleFlag(row, col) {
    const newBoard = [...board];
    const cell = newBoard[row][col];

    if (cell.isRevealed) return;
    cell.isFlagged = !cell.isFlagged;
    setBoard(newBoard);
    setMinesLeft((prev) => (cell.isFlagged ? prev - 1 : prev + 1));
  }

  return { board, minesLeft, uncoverCell, toggleFlag };
}

export default useGameLogic;
