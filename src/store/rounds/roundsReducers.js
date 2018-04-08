import { RoundsState } from './models/RoundsState';
import {
  FETCH_ROUNDS_FOR_USER_ID_REQUEST,
  FETCH_ROUNDS_FOR_USER_ID_SUCCESS,
  FETCH_ROUNDS_FOR_USER_ID_FAILURE,
} from './actions/fetchRoundsForUserId';

import {
  updateFetchRoundsForUserIdInProgress,
  updateFetchRoundsForUserIdSuccess,
  updateFetchRoundsForUserIdFailure,
} from './reducers/fetchRoundsForUserId';


export default function users(roundsState = new RoundsState(), action) {
  switch (action.type) {
    case FETCH_ROUNDS_FOR_USER_ID_REQUEST:
      return updateFetchRoundsForUserIdInProgress(roundsState, action);
    case FETCH_ROUNDS_FOR_USER_ID_SUCCESS:
      return updateFetchRoundsForUserIdSuccess(roundsState, action);
    case FETCH_ROUNDS_FOR_USER_ID_FAILURE:
      return updateFetchRoundsForUserIdFailure(roundsState, action);

    default:
      return roundsState;
  }
}
