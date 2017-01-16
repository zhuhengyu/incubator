/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';
import {
  Provider,
} from 'react-redux';

import store from '../store/store';
import UserListContainer from './user/UserListContainer';

import './App.sass';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h2>
          User Admin
        </h2>
        <hr/>
        <UserListContainer/>
      </div>
    </Provider>
  );
};

App.propTypes = {};

export default App;

