import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0
    };
    this.count = this.count.bind(this);
  }
  count() {
    this.setState({
      n: this.state.n + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.count}>count</button>
        <span>{this.state.n}</span>
      </div>
    );
  }
}

export default Counter;