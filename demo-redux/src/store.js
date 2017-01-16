/**
 * Created by 欧阳 超 on 2017/01/13
 */

import { createStore } from 'redux';

import App from './reducer';

export const store = createStore(App);

export const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});
