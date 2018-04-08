import { roundsData } from './roundsApi.data';

export function getRoundsForUserId(userId) {
  console.debug('Getting rounds for user with ID', userId);
  const filteredRounds = roundsData.filter((round) => {
    return round.userId === userId;
  });
  return Promise.resolve({ data: { rounds: filteredRounds } });
}

export default getRoundsForUserId;
