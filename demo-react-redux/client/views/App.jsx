/**
 * Created by 欧阳 超 on 2017/01/10.
 */

import React from 'react';

import Nav from './nav/Nav';

import './App.sass';

const App = props => (
  <div className="wrapper">
    <Nav />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
