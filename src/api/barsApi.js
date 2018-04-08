import { getDistance } from 'geolib';
import { barData } from './barsApi.data';

export function getBarWithId(id) {
  console.debug('Getting first bar with ID', id);
  const filteredBars = barData.filter((bar) => {
    return bar.id === id;
  });
  return Promise.resolve({ data: filteredBars[ 0 ] });
}

export function getBarsWithIds(ids) {
  console.debug('Getting bars with IDs', ids);
  const filteredBars = barData.filter((bar) => {
    return ids.indexOf(bar.id) > -1;
  });
  return Promise.resolve({ data: { bars: filteredBars } });
}

export function getBarsNearLocation({ lat, long }) {
  console.debug('Getting bars near', { lat, long });
  const barDataWithDistance = getBarsWithDistance();
  return Promise.resolve({ data: { bars: barDataWithDistance } });
}

function getBarsWithDistance(usersPosition) {
  console.log(usersPosition);

  return barData.map((bar) => {
    const clonedBar = Object.assign({}, bar);
    clonedBar.distance = 9999;
    return clonedBar;
  });
}
