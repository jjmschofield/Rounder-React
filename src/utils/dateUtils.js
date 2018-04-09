import { format, getTime } from 'date-fns';

export function getCurrentTimestamp() {
  return getTime(Date.now());
}

export function toStandardDateFormat(date) {
  return format(date, 'HH:mm ddd Do MMM YYYY');
}
