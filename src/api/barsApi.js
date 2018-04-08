import { barData } from './barsApi.data';

export function getBarsNearLocation({ lat, long }) {
  console.log('Getting bars near', { lat, long });
  return Promise.resolve({ data: barData });
}

export function getBarWithId(id) {
  const filteredBars = barData.filter((bar) => {
    return bar.id === id;
  });
  return Promise.resolve({ data: filteredBars[0] });
}
