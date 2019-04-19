import React from 'react';
import '../App.css';
import Cell from './Cell';
import Restart from './Restart';
import Result from './Result';
import CurrentTurn from './CurrentTurn';
// let randomId = require('random-id');

class Game extends React.Component {

  state = {
    cells: Array(9).fill(null),
    turn: 1,
    winnerCombinations: [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8]
    ],
    winner: null
  };

  fillCell = (value) => {
    return value || "";
  }

  markCell = (index) => {
  
    const { winner, turn } = this.state;
    const cells = [...this.state.cells];
    let newWinner;

    if (cells[index] !== null || winner) return;

    const sign = turn % 2 === 1 ? 'X' : 'O';
    cells[index] = sign;

    newWinner = this.checkWinner(cells);

    if (turn === 9 && newWinner === null) {
      newWinner = 'Draw';
    }

    this.setState((prevState) => {
      return {
        cells: cells,
        winner: newWinner,
        turn: prevState.turn + 1
      }
    });

  }

  checkWinner = (cells) => {
    // console.log(cells)
    const { winnerCombinations } = this.state;

    for (let combination of winnerCombinations) {
      let [index1, index2, index3] = combination;

      if ( cells[index1] !== null && 
        cells[index1] === cells[index2] && 
        cells[index2] === cells[index3] ) {
          return cells[index1];
      };
    };
    return null;
  }

  restartGame = () => {
    this.setState({
      cells: Array(9).fill(null),
      winner: null,
      turn: 1
    });
  }

  render() {
    const { cells, turn, winner } = this.state;
    console.log(turn)
    return (
      <div>
        <CurrentTurn turn={turn} winner={winner} />
        <div className="field">
          {cells.map((cell, index) => 
          <Cell 
            key={index}
            sign={this.fillCell(cell)}
            markCell={() => this.markCell(index)}
          />)}
        </div>
        <Result winner={winner} />
        <Restart restartGame={this.restartGame} />
      </div>
    )
    

  }
}

export default Game;