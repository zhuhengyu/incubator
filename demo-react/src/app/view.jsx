import React from 'react';

import CounterPanel from '../counterPanel';
import Todo from '../todo';
import LifeCycle from '../lifeCycle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }
  update() {
    this.forceUpdate();
  }
  render() {
    const length = ~~(Math.random() * 9) + 1;
    return (
      <div>
        <CounterPanel.view/>
        <hr/>
        <Todo.view/>
        <hr/>
        {[...Array(length)].map((n, i) => <LifeCycle.view key={i}/>)}
        <button onClick={this.update}>force update</button>
      </div>
    );
  }
}

export default App;