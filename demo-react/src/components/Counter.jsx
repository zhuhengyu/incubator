import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  render() {
    return(
      <div>
        <button onClick={this.props.onDecrement}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: 'red' }}>{this.props.value}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    );
  }
};

// propTypes check should be removed in production environment
Counter.propTypes = {
  value: PropTypes.number.isRequired,
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
