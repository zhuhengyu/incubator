import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Summary from './Summary';

class CounterPanel extends React.Component {
  render() {
    const {
      values,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <Counter name="first" onIncrement={onIncrement} onDecrement={onDecrement} value={values.first} />
        <Counter name="second" onIncrement={onIncrement} onDecrement={onDecrement} value={values.second} />
        <Counter name="third" onIncrement={onIncrement} onDecrement={onDecrement} value={values.third} />
        <hr/>
        <Summary values={values}/>
      </div>
    );
  }
}

CounterPanel.propTypes = {
  values: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CounterPanel;