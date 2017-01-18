/**
 * Created by 欧阳 超 on 2017/01/13.
 */


import {
  store,
  // unsubscribe,
} from './store';

import {
  addItem,
} from './action';

store.dispatch(addItem('Hello Redux.'));
store.dispatch(addItem('Hello Redux2.'));
store.dispatch(addItem('Hello Redux3.'));

// unsubscribe();
