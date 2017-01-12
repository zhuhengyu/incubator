/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

import './App.sass';

export const App = (props) => {
  const {
    name,
    age,
  } = props;
  return (
    <div className="app">
      Hello World, We are using Nginx now.
      <hr/>
      {name}
      <br/>
      {age}
    </div>
  );
};

App.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
};