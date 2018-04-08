import { barData } from './barsApi.data';

export function getBarsNearLocation({ lat, long }) {
  console.log('Getting bars near', { lat, long });
  console.log(barData);

  return Promise.resolve({ data: barData });
}

export default getBarsNearLocation;
