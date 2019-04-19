import React from 'react';

const CurrentTurn = ({ turn, winner }) => {
  const styles = {
    display: "block"
  }
  winner && ( styles.display = "none" );

  return (
    <div className="current-turn" style={styles}>
      The <span> { (turn % 2 === 1 ) ? `first (X)`: `second (O)` }
      </span> player&#39;s turn
    </div>
  )
};

export default CurrentTurn;