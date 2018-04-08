import { BarsState } from './models/BarsState';
import {
  FETCH_BARS_BY_ID_REQUEST,
  FETCH_BARS_SUCCESS,
  FETCH_BARS_FAILURE,
} from './actions/fetchBars';

import {
  updateFetchBarsByIdInProgress,
  updateFetchBarsSuccess,
  updateFetchBarsFailure,
} from './reducers/fetchBars';


export default (barsState = new BarsState(), action) => {
  switch (action.type) {
    case FETCH_BARS_BY_ID_REQUEST:
      return updateFetchBarsByIdInProgress(barsState, action);
    case FETCH_BARS_SUCCESS:
      return updateFetchBarsSuccess(barsState, action);
    case FETCH_BARS_FAILURE:
      return updateFetchBarsFailure(barsState, action);

    default:
      return barsState;
  }
};
