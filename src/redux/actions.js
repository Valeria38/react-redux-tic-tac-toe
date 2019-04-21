import { ADD_TURN } from './types';

export function fillCell(index) {
  return dispatch => {
    dispatch({
      type: ADD_TURN,
      payload: index,
    });
  };
}
