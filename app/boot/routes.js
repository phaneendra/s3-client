import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppPage from '../modules/app/AppPage';
import HomePage from '../modules/home/HomePage';
import CounterPage from '../modules/counter/CounterPage';


export default (
  <Route path='/' component={AppPage}>
    <IndexRoute component={HomePage} />
    <Route path='/counter' component={CounterPage} />
  </Route>
);
