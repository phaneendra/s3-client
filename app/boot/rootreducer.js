import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from '../modules/counter';
import app from '../modules/app';

const rootReducer = combineReducers({
  app,
  counter,
  routing
});

export default rootReducer;
