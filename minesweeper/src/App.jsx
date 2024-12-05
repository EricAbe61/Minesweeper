import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import useGameLogic from './hooks/useGameLogic';
import './App.css';
import './components/Board.css';
import './components/Cell.css';


function App() {
  const { board, minesLeft, uncoverCell, toggleFlag } = useGameLogic(10, 10, 10); // 10x10 grid with 10 mines

  return (
    <div className="minesweeper">
      <Header minesLeft={minesLeft} onRestart={() => window.location.reload()} />
      <Board
        board={board}
        onCellClick={(row, col) => uncoverCell(row, col)}
        onCellRightClick={(row, col) => toggleFlag(row, col)}
      />
    </div>
  );
}

export default App;

