/**
 * Create by 欧阳 超 on 2017/01/13
 */

import { combineReducers } from 'redux';

import * as _ACTION from './action';

function items(state = [], action) {
  switch (action.type){
    case _ACTION.ADD_ITEM:
      return [
        ...state,
        action.text,
      ];
    case _ACTION.REMOVE_ITEM:
      return state.filter((val, idx)=> {
        return idx !== action.index;
      });
    default:
      return state;
  }
}

const App = combineReducers({
  items,
});

export default App;
