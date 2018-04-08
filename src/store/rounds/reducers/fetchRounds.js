import { Round } from '../models/Round';

export function updateFetchRoundsForUserIdInProgress(state) {
  return Object.assign({}, state, {
    fetchInProgress: true,
    fetchError: false,
  });
}

export function updateFetchRoundsSuccess(state, action) {
  const updatedRoundsById = Object.assign({}, state.roundsById, addNewRoundsFromApiResponse(action.data));

  return Object.assign({}, state, {
    roundsById: updatedRoundsById,
    fetchInProgress: false,
    fetchError: false,
    fetched: true,
  });
}

function addNewRoundsFromApiResponse(data) {
  const newRounds = {};

  data.rounds.forEach((round) => {
    newRounds[ round.id ] = new Round(round);
  });

  return newRounds;
}

export function updateFetchFailure(state) {
  return Object.assign({}, state, {
    fetchInProgress: false,
    fetchError: true,
  });
}
