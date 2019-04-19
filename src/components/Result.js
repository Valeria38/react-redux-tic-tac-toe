import React from 'react';

const Result = ({ winner }) => {
  const styles = {
    display: "none"
  };
  winner && ( styles.display = "block" );

  return (
    <div style={styles} className="result">
      The winner is <span>{(winner === 'Draw') ? 'Draw' : (winner === 'X') ? 'Player 1 (X)' : 'Player 2 (O)'}</span>
    </div>
  )
};

export default Result;