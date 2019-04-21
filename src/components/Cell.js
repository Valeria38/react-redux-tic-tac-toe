import React from 'react';

const Cell = ({ sign, markCell, fillCell }) => {
  console.log(markCell);
  return (
    <div className="field__cell" onClick={fillCell}>
      {sign}
    </div>
  );
};

export default Cell;
