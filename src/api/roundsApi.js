import { getTime } from 'date-fns';
import { roundsData } from './roundsApi.data';

export function getRoundsForUserId(userId) {
  console.debug('Getting rounds for user with ID', userId);
  const filteredRounds = roundsData.filter((round) => {
    return round.userId === userId;
  });
  return Promise.resolve({ data: { rounds: filteredRounds } });
}

export function createRound(barId) {
  console.debug('Creating Round in Bar', barId);
  return Promise.resolve({
    data: {
      rounds: [
        {
          id: getTime(Date.now()),
          barId,
          timestamp: getTime(Date.now()),
        },
      ],
    },
  });
}

export default getRoundsForUserId;
