import { ADD_TURN } from './types';
import initialState from './initialState';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TURN:
      const templateTurn = Array(9).fill(null);
      const index = action.payload;
      const { turns } = state;
      const lastTurn = turns.length
        ? turns[turns.length - 1]
        : [...templateTurn];

      const sign = 'S';

      const currentTurn = [...lastTurn];
      currentTurn[index] = sign;

      return {
        ...state,
        turns: [...turns, currentTurn],
      };

    default:
      return state;
  }
};
export default reducers;
