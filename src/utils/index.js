import parseJSON from 'date-fns/parseJSON';

export const getTime = (date) => {
  let currentTime = parseJSON(date);
  return currentTime
    .toLocaleTimeString()
    .slice(0, 5);
};

