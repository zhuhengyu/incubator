/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

import UserListContainer from './user/UserListContainer';

import './App.sass';

const App = () => (
  <div className="app">
    <h2>
      User Admin
    </h2>
    <hr />
    <UserListContainer />
  </div>
);

App.propTypes = {};

export default App;
