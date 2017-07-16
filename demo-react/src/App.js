import React, { Component } from 'react';

import * as actions from './actions';

import CounterPanel from './components/CounterPanel'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onIncrement(name) {
    this.props.store.dispatch(actions.increment(name));
  }
  onDecrement(name) {
    this.props.store.dispatch(actions.decrement(name));
  }
  render() {
    const {
      store
    } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CounterPanel values={store.getState()} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
      </div>
    );
  }
}

export default App;
