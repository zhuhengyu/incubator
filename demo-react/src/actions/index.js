import * as actionTypes from './actionTypes';

export const increment = key => ({
  type: actionTypes.INCREMENT,
  payload: key
});

export const decrement = key => ({
  type: actionTypes.DECREMENT,
  payload: key
});
