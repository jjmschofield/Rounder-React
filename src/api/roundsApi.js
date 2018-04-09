import { getTime } from 'date-fns';
import { roundsData } from './roundsApi.data';

export function getRoundsForUserId(userId) {
  console.debug('Getting rounds for user with ID', userId);
  const filteredRounds = roundsData.filter((round) => {
    return round.userId === userId;
  });
  return Promise.resolve({ data: { rounds: filteredRounds } });
}

export function getRoundById(roundId) {
  console.debug('Getting round', roundId);
  const filteredRounds = roundsData.filter((round) => {
    return round.id === roundId;
  });

  if (filteredRounds.length > 0) {
    return Promise.resolve({ data: { round: filteredRounds[ 0 ] } });
  }
  return Promise.reject();
}

export function createRound(round) {
  console.debug('Creating Round', round);
  return Promise.resolve({
    data: {
      round: {
        ...round,
        id: getTime(Date.now()),
      },
    },
  });
}

export default getRoundsForUserId;
