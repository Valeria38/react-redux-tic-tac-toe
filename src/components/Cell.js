import React from 'react';

const Cell = ({ sign, markCell }) => {
  return (
    <div 
    className="field__cell"
    onClick={markCell}
    >
      {sign}
    </div>
  )
};

export default Cell;