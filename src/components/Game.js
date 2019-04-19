import React from 'react';
import '../App.css';
import Cell from './Cell';
import Restart from './Restart';
import Result from './Result';
import CurrentTurn from './CurrentTurn';
import { store, templateTurn } from '../store/store';

store.subscribe(function() {
  console.log(store.getState().turns);
  // return 1;
});

// store.dispatch({
//   type:'INITIAL'
// });

const winnerCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];


class Game extends React.Component {

  render() {
    //массив с массивами
    const turns = store.getState().turns;
    const cells = turns[turns.length - 1] || templateTurn;

    return (
      <div>
        {/* <CurrentTurn turn={turn} winner={winner} /> */}
        <div className="field">
          {cells.map((cell, index) => 
          <Cell 
            key={index}
            sign={cell}
            markCell={() => {
              store.dispatch({
                type: 'ADD_TURN',
                payload: {
                  index: index,
                  sign: 'X'
                }
              });
              console.log(cells);
            }}
          />)}
        </div>
        {/* <Result winner={winner} /> */}
        {/* <Restart restartGame={this.restartGame} /> */}
      </div>
    )
    

  }
}

export default Game;