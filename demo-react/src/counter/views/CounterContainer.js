import { connect } from 'react-redux';
import * as actions from '../actions';
import Counter from './Counter';

const mapStateToProps = (state, props) => ({
  value: state[props.name]
})

const mapDispatchToProps = (dispatch, props) => ({
  onIncrement() {
    dispatch(actions.increment(props.name));
  },
  onDecrement() {
    dispatch(actions.decrement(props.name));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;