import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  render() {
    const {
      name,
      value,
      onIncrement,
      onDecrement
    } = this.props;
    return(
      <div>
        <button onClick={() => onDecrement(name)}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: 'red' }}>{value}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => onIncrement(name)}>+</button>
      </div>
    );
  }
};

// propTypes check should be removed in production environment
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

// defaultProps is very necessary
Counter.defaultProps = {
  value: 0,
  onIncrement: foo => foo,
  onDecrement: foo => foo
};

export default Counter;
