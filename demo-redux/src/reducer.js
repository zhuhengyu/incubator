/**
 * Create by 欧阳 超 on 2017/01/13
 */
 
import {
  combineReducers,
} from 'redux';
import 'rxjs/Rx';
import {
  createEpicMiddleware,
} from 'redux-observable';

import {
  ADD_ITEM,
  REMOVE_ITEM,
  removeItem,
} from './action';

// define an redux-observable epic
const addEpic = action =>
  action
    .ofType(ADD_ITEM)
    .delay(1e3)
    .mapTo(removeItem(0));

// create an epic middle ware for redux store
export const epicMiddleWare = createEpicMiddleware(addEpic);

// define reducers
const items = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.text,
      ];
    case REMOVE_ITEM:
      return state.filter((val, idx) => {
        return idx !== action.index;
      });
    default:
      return state;
  }
};

// combine reducers
export const App = combineReducers({
  items,
});
