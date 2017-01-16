/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

import Profile from './user/Profile';

import './App.sass';

const App = () => {
  return (
    <div className="app">
      User Admin.
      <hr/>
      <Profile id = '1' name = 'Zhao' age = {25} />
    </div>
  );
};

App.propTypes = {};

export default App;

