import { getRoundsForUserId, getRoundById } from '../../../api/roundsApi';
import { fetchBarById, fetchBarsByIds } from '../../bars/actions/fetchBars';

export function fetchRoundsForUser(userId) {
  return (dispatch) => {
    dispatch(fetchRoundsForUserIdRequest());

    return getRoundsForUserId(userId)
      .then(({ data }) => {
        dispatch(fetchRoundsSuccess(data));
        const barIds = data.rounds.map((round) => {
          return round.barId;
        });
        return dispatch(fetchBarsByIds(barIds));
      })
      .catch((error) => {
        console.error(`Couldn't fetch rounds for user with ID ${userId}`, error);
        dispatch(fetchRoundsFailure());
        return Promise.reject();
      });
  };
}

export function fetchRoundById(roundId) {
  return (dispatch) => {
    dispatch(fetchRoundByIdRequest());

    return getRoundById(roundId)
      .then(({ data }) => {
        dispatch(fetchRoundsSuccess({ rounds: [data.round] }));
        return dispatch(fetchBarById(data.round.barId));
      })
      .catch((error) => {
        console.error(`Couldn't fetch rounds for bar with ID ${roundId}`, error);
        dispatch(fetchRoundsFailure());
        return Promise.reject();
      });
  };
}

export const FETCH_ROUNDS_FOR_USER_ID_REQUEST = 'FETCH_ROUNDS_FOR_USER_ID_REQUEST';

function fetchRoundsForUserIdRequest() {
  return { type: FETCH_ROUNDS_FOR_USER_ID_REQUEST };
}

export const FETCH_ROUNDS_ID_REQUEST = 'FETCH_ROUNDS_ID_REQUEST';

function fetchRoundByIdRequest() {
  return { type: FETCH_ROUNDS_ID_REQUEST };
}

export const FETCH_ROUNDS_SUCCESS = 'FETCH_ROUNDS_SUCCESS';

function fetchRoundsSuccess(data) {
  return { type: FETCH_ROUNDS_SUCCESS, data };
}

export const FETCH_ROUNDS_FAILURE = 'FETCH_ROUNDS_FAILURE';

function fetchRoundsFailure() {
  return { type: FETCH_ROUNDS_FAILURE };
}
