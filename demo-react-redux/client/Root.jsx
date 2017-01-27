/**
 * Created by 欧阳 超 on 2017/01/17.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import UserModuleContainer from './components/user/UserModuleContainer';
import Dashboard from './components/dashboard/Dashboard';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="users" component={UserModuleContainer} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
