/**
 * Created by 欧阳 超 on 2017/01/10.
 */

import React from 'react';
import { Link } from 'react-router';

import './App.sass';

const App = props => (
  <div className="app">
    <h1>Boilerplate</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {};

export default App;
