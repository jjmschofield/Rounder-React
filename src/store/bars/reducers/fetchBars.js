import { Bar } from '../models/Bar';

export function fetchBarByIdInProgress(state) {
  return Object.assign({}, state, {
    fetchInProgress: true,
    fetchError: false,
  });
}

export function fetchBarsByIdsInProgress(state) {
  return Object.assign({}, state, {
    fetchInProgress: true,
    fetchError: false,
  });
}

export function fetchBarsSuccess(state, action) {
  const updatedBarsById = Object.assign({}, state.barsById, addNewBarsFromApiResponse(action.data));

  return Object.assign({}, state, {
    barsById: updatedBarsById,
    fetchInProgress: false,
    fetchError: false,
    fetched: true,
  });
}

function addNewBarsFromApiResponse(data) {
  const newRounds = {};

  data.bars.forEach((bar) => {
    newRounds[bar.id] = new Bar(bar);
  });

  return newRounds;
}

export function fetchBarsFailure(state) {
  return Object.assign({}, state, {
    fetchInProgress: false,
    fetchError: true,
  });
}
