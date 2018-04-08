import { getBarsWithIds, getBarsNearLocation } from '../../../api/barsApi';

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

export function fetchBarsNearby() {
  return (dispatch) => {
    dispatch(fetchBarsByIdRequest());

    getBarsNearLocation({ lat: 0, long: 0 })
      .then(({ data }) => {
        dispatch(fetchBarsSuccess(data));
      })
      .catch((error) => {
        console.error('Couldn\'t fetch bars nearby', error);
        dispatch(fetchBarsFailure());
      });
  };
}

export const FETCH_BARS_BY_ID_REQUEST = 'FETCH_BARS_BY_ID_REQUEST';

function fetchBarsByIdRequest() {
  return { type: FETCH_BARS_BY_ID_REQUEST };
}

export const FETCH_BARS_NEARBY_REQUEST = 'FETCH_BARS_NEARBY_REQUEST';

function fetchBarsNearbyRequest() {
  return { type: FETCH_BARS_NEARBY_REQUEST };
}

export const FETCH_BARS_SUCCESS = 'FETCH_BARS_SUCCESS';

function fetchBarsSuccess(data) {
  return { type: FETCH_BARS_SUCCESS, data };
}

export const FETCH_BARS_FAILURE = 'FETCH_BARS_FAILURE';

function fetchBarsFailure() {
  return { type: FETCH_BARS_FAILURE };
}
