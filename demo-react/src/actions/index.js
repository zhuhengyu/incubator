import * as actionTypes from './actionTypes';

export const increment = name => ({
  type: actionTypes.INCREMENT,
  payload: name
});

export const decrement = name => ({
  type: actionTypes.DECREMENT,
  payload: name
});
