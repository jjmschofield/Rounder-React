import { createRound } from '../../../api/roundsApi';

export function putRound(barId) {
  return (dispatch) => {
    dispatch(putRoundRequest());

    createRound(barId)
      .then(({ data }) => {
        dispatch(putRoundSuccess(data));
      })
      .catch((error) => {
        console.error(`Couldn't put rounds for Bar ${barId}`, error);
        dispatch(putRoundFailure());
      });
  };
}

export const PUT_ROUND_REQUEST = 'PUT_ROUND_REQUEST';

function putRoundRequest() {
  return { type: PUT_ROUND_REQUEST };
}

export const PUT_ROUND_SUCCESS = 'PUT_ROUND_SUCCESS';

function putRoundSuccess(data) {
  return { type: PUT_ROUND_SUCCESS, data };
}

export const PUT_ROUND_FAILURE = 'PUT_ROUND_FAILURE';

function putRoundFailure() {
  return { type: PUT_ROUND_FAILURE };
}
