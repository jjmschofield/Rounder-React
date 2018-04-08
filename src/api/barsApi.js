import { barData } from './barsApi.data';

export function getBarsNearLocation({ lat, long }) {
  console.debug('Getting bars near', { lat, long });
  return Promise.resolve({ data: barData });
}

export function getBarWithId(id) {
  console.debug('Getting first bar with ID', id);
  const filteredBars = barData.filter((bar) => {
    return bar.id === id;
  });
  return Promise.resolve({ data: filteredBars[0] });
}

export function getBarsWithIds(ids) {
  console.debug('Getting bars with IDs', ids);
  const filteredBars = barData.filter((bar) => {
    return ids.indexOf(bar.id) > -1;
  });
  return Promise.resolve({ data: { bars: filteredBars } });
}
