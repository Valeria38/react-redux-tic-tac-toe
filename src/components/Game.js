import React from 'react';
import '../App.css';
import Cell from './Cell';
// import Restart from './Restart';
// import Result from './Result';
// import CurrentTurn from './CurrentTurn';
import { connect } from 'react-redux';

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
    const cells = this.props.lastTurn;
    console.log(this.props.lastTurn);

    return (
      <div>
        {/* <CurrentTurn turn={turn} winner={winner} /> */}
        <div className="field">
          {cells.map((cell, index) => 
          <Cell 
            key={index}
            sign={cell}
            fillCell={(index) => this.props.fillCell(index)}
          />)}
        </div>
        {/* <Result winner={winner} /> */}
        {/* <Restart restartGame={this.restartGame} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    firstTurn: state.turns[0],
    turns: state.turns,
    lastTurn: state.turns[state.turns.length - 1],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fillCell: (index) => {
      dispatch({
        type: 'ADD_TURN',
        payload: {
          index: index,
          sign: 'O'
        }
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);