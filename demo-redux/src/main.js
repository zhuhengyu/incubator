/**
 * Created by 欧阳 超 on 2017/01/13.
 */

import {
  store,
  unsubscribe,
} from './store';

import * as _ACTION from './action';

store.dispatch(_ACTION.addItem('Hello Redux.'));

unsubscribe();
