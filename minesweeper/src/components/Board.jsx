// src/components/Board.jsx
import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board, onCellClick, onCellRightClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isRevealed={cell.isRevealed}
              isFlagged={cell.isFlagged}
              onClick={() => onCellClick(rowIndex, colIndex)}
              onRightClick={() => onCellRightClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
