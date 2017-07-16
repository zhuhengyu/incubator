import * as actionTypes from '../actions/actionTypes';

export default (state = {
  first: 0,
  second: 0,
  third: 0
}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      newState[action.payload] += 1;
      return newState;
    case actionTypes.DECREMENT:
      newState[action.payload] -= 1;
      return newState;
    default:
      return newState;
  }
};
