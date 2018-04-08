import { Bar } from '../models/Bar';

export function updateFetchBarsByIdInProgress(state) {
  return Object.assign({}, state, {
    fetchInProgress: true,
    fetchError: false,
  });
}

export function updateFetchBarsSuccess(state, action) {
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

export function updateFetchBarsFailure(state) {
  return Object.assign({}, state, {
    fetchInProgress: false,
    fetchError: true,
  });
}
