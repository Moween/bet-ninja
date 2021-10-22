import parseISO from 'date-fns/parseISO';

export const getTime = (date) => {
  let currentTime = parseISO(date);
  return new Date(currentTime)
    .toLocaleTimeString()
    .toString()
    .slice(0, 5);
};

