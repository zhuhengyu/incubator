import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import store from './store';

import App from './app';

import './index.css';

ReactDOM.render(
<Provider store={store}>
  <App.view/>
</Provider>, document.querySelector('#root'));

registerServiceWorker();
