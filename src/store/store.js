import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rounds from './rounds/roundsReducers';
import bars from './bars/barsReducers';

export function createStore() {
  const reducers = combineReducers({
    bars,
    rounds,
  });

  const logger = createLogger();

  return createReduxStore(
    reducers,
    applyMiddleware(thunk, logger)
  );
}

export default createStore;
