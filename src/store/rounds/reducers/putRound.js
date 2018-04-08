import { Round } from '../models/Round';

export function updatePutRoundInProgress(state) {
  return Object.assign({}, state, {
    putInProgress: true,
    putError: false,
  });
}

export function updatePutRoundSuccess(state, action) {
  const updatedRoundsById = Object.assign({}, state.roundsById, addNewRoundsFromApiResponse(action.data));

  return Object.assign({}, state, {
    roundsById: updatedRoundsById,
    putInProgress: false,
    putError: true,
  });
}

function addNewRoundsFromApiResponse(data) {
  const newRounds = {};

  data.rounds.forEach((round) => {
    newRounds[ round.id ] = new Round(round);
  });

  return newRounds;
}

export function updatePutFailure(state) {
  return Object.assign({}, state, {
    putInProgress: false,
    putError: true,
  });
}
