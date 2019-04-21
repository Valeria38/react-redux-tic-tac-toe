import { createStore } from 'redux';

const ADD_TURN = 'ADD_TURN';

export const templateTurn = Array(9).fill(null);

const initialState = {
  turns: [
    ["X", null, null, null, null, null, null, null, "X"]
  ],
  winner: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TURN:
      const index = action.payload;
      console.log(index);

      const lastTurn = state.turns.length
        ? state.turns[state.turns.length - 1]
        : [...templateTurn];

      const sign = "S";

      const currentTurn = [...lastTurn];
      currentTurn[index] = sign;

      return {
        ...state,
        turns: [...state.turns, currentTurn]
      };

    default: return state;
  }
};

export const store = createStore(reducer);
