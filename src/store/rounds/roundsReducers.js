import { RoundsState } from './models/RoundsState';
import {
  FETCH_ROUNDS_FOR_USER_ID_REQUEST,
  FETCH_ROUNDS_SUCCESS,
  FETCH_ROUNDS_FAILURE,
} from './actions/fetchRounds';

import {
  updateFetchRoundsForUserIdInProgress,
  updateFetchRoundsSuccess,
  updateFetchFailure,
} from './reducers/fetchRounds';

import { PUT_ROUND_REQUEST, PUT_ROUND_SUCCESS, PUT_ROUND_FAILURE } from './actions/putRound';

import { updatePutRoundInProgress, updatePutRoundSuccess, updatePutFailure } from './reducers/putRound';


export default (roundsState = new RoundsState(), action) => {
  switch (action.type) {
    case FETCH_ROUNDS_FOR_USER_ID_REQUEST:
      return updateFetchRoundsForUserIdInProgress(roundsState, action);
    case FETCH_ROUNDS_SUCCESS:
      return updateFetchRoundsSuccess(roundsState, action);
    case FETCH_ROUNDS_FAILURE:
      return updateFetchFailure(roundsState, action);

    case PUT_ROUND_REQUEST:
      return updatePutRoundInProgress(roundsState, action);
    case PUT_ROUND_SUCCESS:
      return updatePutRoundSuccess(roundsState, action);
    case PUT_ROUND_FAILURE:
      return updatePutFailure(roundsState, action);

    default:
      return roundsState;
  }
};
