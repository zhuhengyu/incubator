/**
 * Created by 欧阳 超 on 2017/01/13
 */

import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  epicMiddleWare,
  App,
} from './reducer';

// create a store and apply epic middle ware onto it
export const store = createStore(App, applyMiddleware(epicMiddleWare));

export const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
