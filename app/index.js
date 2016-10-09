import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './boot/routes';
import configureStore from './boot/configureStore';
// import './app.global.css';
import './theme/material-design-icons.global.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

console.log('Initializing');

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
