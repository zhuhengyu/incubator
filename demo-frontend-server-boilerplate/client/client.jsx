/**
 * Created by 欧阳 超 on 2017/01/11.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import store from './store/store';

import './global.sass';

ReactDOM.render((
  <Root store={store} />
), document.getElementById('react-root'));
