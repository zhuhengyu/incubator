import { createStore, combineReducers } from 'redux';

import Counter from './counter';

const reducers = combineReducers({
  counter: Counter.reducer
});

export default createStore(reducers);