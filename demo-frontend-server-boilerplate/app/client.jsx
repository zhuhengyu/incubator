/**
 * Created by 欧阳 超 on 2017/01/11.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import App from './views/App';

import './global.sass';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
  </Router>
), document.getElementById('react-root'));
