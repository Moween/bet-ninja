import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseJSON } from 'date-fns';

import { getDate } from './index';

const useFilterMatches = (date) => {
  const [matches, setMatches] = useState([]);

  const soccerData = useSelector((state) => state.soccerData.soccerData);

  const filterTodayMatches = () => {
    // Filter out matches with today's date
    return soccerData.filter((match) => {
      const configDate = getDate(parseJSON(match.date));
      return configDate === date;
    });
  };

  useEffect(() => {
    const matches = filterTodayMatches();
    setMatches(matches);
    // eslint-disable-next-line
  }, []);

  return matches;
};

export default useFilterMatches;
