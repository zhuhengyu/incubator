import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount
    };
    // this.plus = ::this.plus
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  plus() {
    // modify state directly can change component's state but will not trigger render method
    this.state.count++;
    this.setState({
      count: this.state.count + 1
    });
  }
  minus() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    const style = {
      color: 'red'
    };
    return (
      <div>
        <button onClick={()=>this.minus()}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={style}>{this.state.count}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.plus}>+</button>
      </div>
    );
  }
}

// propTypes check should be removed in production environment
Counter.propTypes = {
  initCount: PropTypes.number
};

// defaultProps is very necessary
Counter.defaultProps = {
  initCount: 0
};

export default Counter;