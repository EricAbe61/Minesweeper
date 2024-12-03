// src/components/Cell.jsx
import React from 'react';
import './Cell.css';

function Cell({ isRevealed, isFlagged, onClick, onRightClick }) {
  return (
    <div
      className={`cell ${isRevealed ? 'revealed' : ''}`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
    >
      {isRevealed ? '💣' : isFlagged ? '🚩' : ''}
    </div>
  );
}

export default Cell;
