import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from './rootreducer';

// import * as counterActions from '../../modules/counter';

// const actionCreators = {
//   ...counterActions,
//   push,
// };

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  window.devToolsExtension ? window.devToolsExtension() : noop => noop
  // window.devToolsExtension ?
  //   window.devToolsExtension({ actionCreators }) :
  //   noop => noop
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
  }

  if (module.hot) {
    module.hot.accept('./rootreducer', () =>
      store.replaceReducer(require('./rootreducer')) // eslint-disable-line global-require
    );
  }

  return store;
}
