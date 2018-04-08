import { getAllRoundsForUserId } from '../../../api/roundsApi';

export const FETCH_ROUNDS_FOR_USERID_REQUEST = 'FETCH_ROUNDS_FOR_USERID_REQUEST';

function fetchRoundsForUserIdRequest() {
  return { type: FETCH_ROUNDS_FOR_USERID_REQUEST };
}

export function fetchRoundsForUser(userId) {
  return (dispatch) => {
    dispatch(fetchRoundsForUserIdRequest);

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

export const FETCH_ROUNDS_FOR_USERID_SUCCESS = 'FETCH_ROUNDS_FOR_USERID_SUCCESS';

function fetchRoundsForUserIdSuccess(data) {
  return { type: FETCH_ROUNDS_FOR_USERID_SUCCESS, data };
}

export const FETCH_ROUNDS_FOR_USERID_FAILURE = 'FETCH_ROUNDS_FOR_USERID_FAILURE';

function fetchRoundsForUserIdFailure() {
  return { type: FETCH_ROUNDS_FOR_USERID_FAILURE };
}
