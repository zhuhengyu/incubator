/**
 * Created by 欧阳 超 on 2017/01/17.
 */

import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import App from './views/App';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
