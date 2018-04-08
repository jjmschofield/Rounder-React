import { getRoundsForUserId } from '../../../api/roundsApi';
import { fetchBarsByIds } from '../../bars/actions/fetchBars';

export function fetchRoundsForUser(userId) {
  return (dispatch) => {
    dispatch(fetchRoundsForUserIdRequest());

    getRoundsForUserId(userId)
      .then(({ data }) => {
        dispatch(fetchRoundsSuccess(data));
        const barIds = data.rounds.map((round) => {
          return round.barId;
        });
        dispatch(fetchBarsByIds(barIds));
      })
      .catch((error) => {
        console.error(`Couldn't fetch rounds for user with ID ${userId}`, error);
        dispatch(fetchRoundsFailure());
      });
  };
}

export const FETCH_ROUNDS_FOR_USER_ID_REQUEST = 'FETCH_ROUNDS_FOR_USER_ID_REQUEST';

function fetchRoundsForUserIdRequest() {
  return { type: FETCH_ROUNDS_FOR_USER_ID_REQUEST };
}

export const FETCH_ROUNDS_SUCCESS = 'FETCH_ROUNDS_SUCCESS';

function fetchRoundsSuccess(data) {
  return { type: FETCH_ROUNDS_SUCCESS, data };
}

export const FETCH_ROUNDS_FAILURE = 'FETCH_ROUNDS_FAILURE';

function fetchRoundsFailure() {
  return { type: FETCH_ROUNDS_FAILURE };
}
