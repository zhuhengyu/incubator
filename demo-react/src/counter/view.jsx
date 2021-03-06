import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from './actions';

import './view.css';

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
        <button onClick={() => onDecrement(name)}>-</button>
        <span className="value" style={{ color: 'red' }}>{value}</span>
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

const mapStateToProps = (state, props) => ({
  value: state.counter[props.name]
})

const mapDispatchToProps = (dispatch, props) => ({
  onIncrement() {
    dispatch(actions.increment(props.name));
  },
  onDecrement() {
    dispatch(actions.decrement(props.name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
