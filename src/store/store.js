import { combineReducers } from 'redux';
import { createStore as createReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rounds from './rounds/roundsReducers';

export function createStore() {
  const reducers = combineReducers({
    rounds,
  });

  const logger = createLogger();

  return createReduxStore(
    reducers,
    applyMiddleware(thunk, logger)
  );
}

export default createStore;
