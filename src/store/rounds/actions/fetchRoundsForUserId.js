import { getAllRoundsForUserId } from '../../../api/roundsApi';

export const FETCH_ROUNDS_FOR_USER_ID_REQUEST = 'FETCH_ROUNDS_FOR_USER_ID_REQUEST';

function fetchRoundsForUserIdRequest() {
  return { type: FETCH_ROUNDS_FOR_USER_ID_REQUEST };
}

export function fetchRoundsForUser(userId) {
  return (dispatch) => {
    dispatch(fetchRoundsForUserIdRequest());

    getAllRoundsForUserId(userId)
      .then(({ data }) => {
        dispatch(fetchRoundsForUserIdSuccess(data));
      })
      .catch((error) => {
        console.error(`Couldn't fetch rounds for user with ID ${userId}`, error);
        dispatch(fetchRoundsForUserIdFailure());
      });
  };
}

export const FETCH_ROUNDS_FOR_USER_ID_SUCCESS = 'FETCH_ROUNDS_FOR_USER_ID_SUCCESS';

function fetchRoundsForUserIdSuccess(data) {
  return { type: FETCH_ROUNDS_FOR_USER_ID_SUCCESS, data };
}

export const FETCH_ROUNDS_FOR_USER_ID_FAILURE = 'FETCH_ROUNDS_FOR_USER_ID_FAILURE';

function fetchRoundsForUserIdFailure() {
  return { type: FETCH_ROUNDS_FOR_USER_ID_FAILURE };
}
