import React, { useEffect, useState } from "react";
import "./styles.css";

// 0 1 2
// 3 4 5
// 6 7 8

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="tic-tac-toe-square">
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("X's turn");
  const [winner, setWinner] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // left diagonal
      [2, 4, 6], // right diagonal
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }

  useEffect(() => {
    var winner = getWinner(squares);
    if (!winner && squares.every((square) => square !== ""))
      setStatus("It's a draw!");
    else if (winner) {
      setStatus(`${winner} won!`);
      setWinner(winner);
    } else setStatus(`${isXTurn ? "X" : "O"}'s turn`);
  }, [squares, isXTurn]);

  function handleClick(currentSquare) {
    let squaresCopy = [...squares];
    if (squaresCopy[currentSquare] !== "") return;
    if (winner !== "") return;
    squaresCopy[currentSquare] = isXTurn ? "X" : "O";
    setSquares(squaresCopy);
    setIsXTurn(!isXTurn);
  }

  function restart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatus("X's turn");
    setWinner("");
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {status}
      {winner && <button className="restart-btn" onClick={() => restart()}>Reset</button>}
    </div>
  );
}

export default TicTacToe;
