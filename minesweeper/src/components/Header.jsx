import React from 'react';

function Header({ minesLeft, onRestart }) {
  return (
    <div className="header">
      <h1>Minesweeper</h1>
      <p>Mines Left: {minesLeft}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Header;
