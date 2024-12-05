// src/components/Board.jsx
import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board, onCellClick, onCellRightClick }) {
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${board[0].length}, 30px)`, // Set number of columns dynamically
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isRevealed={cell.isRevealed}
            isFlagged={cell.isFlagged}
            onClick={() => onCellClick(rowIndex, colIndex)}
            onRightClick={() => onCellRightClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}

export default Board;

