import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class CounterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterNum: props.counterNum
    };
  }
  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}

CounterPanel.propTypes = {
  counterNum: PropTypes.number
};

CounterPanel.defaultProps = {
  counterNum: 1
};

export default CounterPanel;