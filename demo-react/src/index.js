import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import Counter from './counter';

import App from './app';

import './index.css';

const store = createStore(Counter.reducer);

ReactDOM.render(
<Provider store={store}>
  <App.view/>
</Provider>, document.querySelector('#root'));

registerServiceWorker();
