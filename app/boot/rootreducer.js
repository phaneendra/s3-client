import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from '../modules/counter';

const rootReducer = combineReducers({
  counter,
  routing
});

export default rootReducer;
