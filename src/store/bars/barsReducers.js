import { BarsState } from './models/BarsState';
import {
  FETCH_BAR_BY_ID_REQUEST,
  FETCH_BARS_BY_ID_REQUEST,
  FETCH_BARS_SUCCESS,
  FETCH_BARS_FAILURE,
} from './actions/fetchBars';

import {
  fetchBarByIdInProgress,
  fetchBarsByIdsInProgress,
  fetchBarsSuccess,
  fetchBarsFailure,
} from './reducers/fetchBars';


export default (barsState = new BarsState(), action) => {
  switch (action.type) {
    case FETCH_BAR_BY_ID_REQUEST:
      return fetchBarByIdInProgress(barsState, action);
    case FETCH_BARS_BY_ID_REQUEST:
      return fetchBarsByIdsInProgress(barsState, action);
    case FETCH_BARS_SUCCESS:
      return fetchBarsSuccess(barsState, action);
    case FETCH_BARS_FAILURE:
      return fetchBarsFailure(barsState, action);

    default:
      return barsState;
  }
};
