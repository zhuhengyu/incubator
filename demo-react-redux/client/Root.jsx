/**
 * Created by 欧阳 超 on 2017/01/17.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store/store';
import App from './views/App';
import UserModuleContainer from './views/user/UserModuleContainer';
import Dashboard from './views/dashboard/Dashboard';

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
