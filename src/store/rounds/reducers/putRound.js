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
  console.log(data);
  return {
    [data.round.id]: new Round(data.round),
  };
}

export function updatePutFailure(state) {
  return Object.assign({}, state, {
    putInProgress: false,
    putError: true,
  });
}
