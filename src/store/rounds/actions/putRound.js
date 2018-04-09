import { createRound } from '../../../api/roundsApi';

export function putRound(round) {
  return (dispatch) => {
    dispatch(putRoundRequest());

    return createRound(round)
      .then(({ data }) => {
        dispatch(putRoundSuccess(data));
        return (data.round);
      })
      .catch((error) => {
        console.error('Couldn\'t create round', error);
        dispatch(putRoundFailure());
        return Promise.reject();
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
