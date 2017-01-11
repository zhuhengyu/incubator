/**
 * Created by ouyangcharles on 2017/01/10.
 */

import React from 'react';

export const App = (props) => {
  const {
    name,
    age,
  } = props;
  return (
    <div>
      ${name}
      <br/>
      ${age}
    </div>
  );
}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
};