import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import counter from './reducers';

import App from './App';

import './index.css';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};
render();

store.subscribe(render);

registerServiceWorker();
