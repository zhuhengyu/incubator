import React, { Component } from 'react';

import * as actions from './stores/actions';

import Counter from './components/Counter'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onIncrement() {
    this.props.store.dispatch(actions.increment());
  }
  onDecrement() {
    this.props.store.dispatch(actions.decrement());
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter value={this.props.store.getState()} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
      </div>
    );
  }
}

export default App;
