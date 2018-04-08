import { getBarsWithIds } from '../../../api/barsApi';

export const FETCH_BARS_BY_ID_REQUEST = 'FETCH_BARS_BY_ID_REQUEST';

function fetchBarsByIdRequest() {
  return { type: FETCH_BARS_BY_ID_REQUEST };
}

export function fetchBarsById(barIds) {
  return (dispatch) => {
    dispatch(fetchBarsByIdRequest());

    getBarsWithIds(barIds)
      .then(({ data }) => {
        dispatch(fetchBarsSuccess(data));
      })
      .catch((error) => {
        console.error(`Couldn't fetch bars for ${barIds}`, error);
        dispatch(fetchBarsFailure());
      });
  };
}

export const FETCH_BARS_SUCCESS = 'FETCH_BARS_SUCCESS';

function fetchBarsSuccess(data) {
  return { type: FETCH_BARS_SUCCESS, data };
}

export const FETCH_BARS_FAILURE = 'FETCH_BARS_FAILURE';

function fetchBarsFailure() {
  return { type: FETCH_BARS_FAILURE };
}
