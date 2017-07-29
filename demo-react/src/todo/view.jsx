import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.refInput = this.refInput.bind(this);
    this.onInput = this.onInput.bind(this);
  }
  refInput(input) {
    this.input = input;
  }
  onInput() {
    this.setState({
      value: this.input.value
    });
  }
  render() {
    return (
      <div>
        <input ref={this.refInput} onInput={this.onInput}/><br/>
        Value: {this.state.value}
      </div>
    );
  }
}

export default Todo;