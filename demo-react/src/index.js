import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import Counter from './counter';

import CounterPanel from './counterPanel';

import './index.css';

const store = createStore(Counter.reducer);

ReactDOM.render(
<Provider store={store}>
  <CounterPanel.view/>
</Provider>, document.getElementById('root'));

registerServiceWorker();
