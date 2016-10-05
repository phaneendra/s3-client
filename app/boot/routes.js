import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../modules/app/App';
import HomePage from '../modules/home/HomePage';
import CounterPage from '../modules/counter/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
