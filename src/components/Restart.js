import React from 'react';

const Restart = ({ restartGame }) => (
  <div 
    className="restart-btn"
    onClick={restartGame}
    >
    Restart
  </div>
);

export default Restart;