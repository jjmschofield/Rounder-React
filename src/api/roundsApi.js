import { roundsData } from './roundsApi.data';

export function getAllRoundsForUserId(userId) {
  console.debug('Getting rounds for user with ID', userId);
  const filteredRounds = roundsData.filter((round) => {
    return round.userId === userId;
  });
  return Promise.resolve({ data: filteredRounds });
}

export default getAllRoundsForUserId;
