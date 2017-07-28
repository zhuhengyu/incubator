import * as actionTypes from './actionTypes';

export default (state = {
  n: 0
}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case actionTypes.INCREMENT: 
    newState.n++;
    return newState;
  case actionTypes.DECREMENT:
    newState.n--;
    return newState;
  default:
    return newState;
  }
};
