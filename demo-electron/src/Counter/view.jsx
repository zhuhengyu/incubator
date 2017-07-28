import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrement = props.onIncrement.bind(this);
    this.onDecrement = props.onDecrement.bind(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>INCREMENT</button>
        <span>{this.props.n}</span>
        <button onClick={this.onDecrement}>DECREMENT</button>
      </div>
    );
  }
}

Counter.propTypes = {
  n: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  n: state.n
});
const mapDispatchToProps = (dispatch, props) => ({
  onIncrement() {
    dispatch(actions.increment());
  },
  onDecrement() {
    dispatch(actions.decrement());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
