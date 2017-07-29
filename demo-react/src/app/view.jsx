import React from 'react';

import CounterPanel from '../counterPanel';
import Todo from '../todo';

const App = () => (
  <div>
    <CounterPanel.view/>
    <hr/>
    <Todo.view/>
  </div>
);

export default App;