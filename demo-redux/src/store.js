/**
 * Created by 欧阳 超 on 2017/01/13
 */

import { createStore } from 'redux';

import App from './reducer';
import * as _ACTION from './action';

const store = createStore(App);

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch(_ACTION.addItem('Hello Redux'));

unsubscribe();
