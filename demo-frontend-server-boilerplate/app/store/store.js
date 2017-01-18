/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { createStore } from 'redux';

import App from './reducers';
import {addUser} from '../store/actions';

let store = createStore(App);

// BEGIN: let's mock up some data
const user1 = {
  name: 'Zhao',
  age: '25'
};
const user2 = {
  name: 'Qiao',
  age: '23'
};

store.dispatch(addUser(user1));
store.dispatch(addUser(user2));
// END

export default store;
