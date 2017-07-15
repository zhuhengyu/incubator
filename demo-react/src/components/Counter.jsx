import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // this.plus = ::this.plus
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  plus() {
    // modify state directly can change component's state but will not trigger render method
    // this.state.count++;
    this.props.update(this.props.index, this.props.initCount + 1);
  }
  minus() {
    this.props.update(this.props.index, this.props.initCount - 1);
  }
  render() {
    const style = {
      color: 'red'
    };
    return (
      <div>
        <button onClick={this.minus}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={style}>{this.props.initCount}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.plus}>+</button>
      </div>
    );
  }
}

// propTypes check should be removed in production environment
Counter.propTypes = {
  index: PropTypes.number.isRequired,
  initCount: PropTypes.number,
  update: PropTypes.func,
};

// defaultProps is very necessary
Counter.defaultProps = {
  initCount: 0,
  update: foo => foo
};

export default Counter;