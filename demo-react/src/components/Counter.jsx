import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  plus() {
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

Counter.propTypes = {
  count: React.PropTypes.number
};

export default Counter