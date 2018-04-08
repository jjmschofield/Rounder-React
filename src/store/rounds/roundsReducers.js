import { RoundsState } from './models/RoundsState';
import {
  FETCH_ROUNDS_FOR_USERID_REQUEST,
  FETCH_ROUNDS_FOR_USERID_SUCCESS,
  FETCH_ROUNDS_FOR_USERID_FAILURE,
} from './actions/fetchRoundsForUserId';

import {
  updateFetchRoundsForUserIdInProgress,
  updateFetchRoundsForUserIdSuccess,
  updateFetchRoundsForUserIdFailure,
} from './reducers/fetchRoundsForUserId';


export default function users(roundsState = new RoundsState(), action) {
  switch (action.type) {
    case FETCH_ROUNDS_FOR_USERID_REQUEST:
      return updateFetchRoundsForUserIdInProgress(roundsState, action);
    case FETCH_ROUNDS_FOR_USERID_SUCCESS:
      return updateFetchRoundsForUserIdSuccess(roundsState, action);
    case FETCH_ROUNDS_FOR_USERID_FAILURE:
      return updateFetchRoundsForUserIdFailure(roundsState, action);

    default:
      return roundsState;
  }
}
