import React from 'react';
import '../App.css';
import Cell from './Cell';
// import Restart from './Restart';
// import Result from './Result';
// import CurrentTurn from './CurrentTurn';
import { connect } from 'react-redux';
import { fillCell } from '../redux/actions';

const winnerCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

class Game extends React.Component {
  render() {
    const { lastTurn, fillCell } = this.props;
    const cells = lastTurn;
    console.log(this.props);

    return (
      <div>
        {/* <CurrentTurn turn={turn} winner={winner} /> */}
        <div className="field">
          {cells.map((cell, index) => (
            <Cell key={index} sign={cell} fillCell={() => fillCell(index)} />
          ))}
        </div>
        {/* <Result winner={winner} /> */}
        {/* <Restart restartGame={this.restartGame} /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ turns }) => {
  return {
    firstTurn: turns[0],
    turns: turns,
    lastTurn: turns[turns.length - 1],
  };
};

const mapDispatchToProps = {
  fillCell,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
