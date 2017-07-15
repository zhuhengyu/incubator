import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class CounterPanel extends React.Component {
  constructor(props) {
    super(props);
    const counts = [1, 1, 1];
    this.state = {
      counts
    };
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate(idx, count) {
    const {
      counts
    } = this.state;
    counts[idx] = count;
    this.setState({
      counts
    });
  }
  getSum() {
    return this.state.counts.reduce((a, b) => a + b);
  }
  render() {
    return (
      <div>
        <Counter initCount={this.state.counts[0]} update={this.onUpdate} index={0}/>
        <Counter initCount={this.state.counts[1]} update={this.onUpdate} index={1}/>
        <Counter initCount={this.state.counts[2]} update={this.onUpdate} index={2}/>
        <hr/>
        <span>{this.getSum()}</span>
        <br/>
        <button onClick={()=>this.forceUpdate()}>update</button>
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