import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import parseJSON from 'date-fns/parseJSON';
import addDays from 'date-fns/addDays';
import Box from '@material-ui/core/Box';
import Table from './Table';
import { getDate } from '../utils/index';

const Tomorrow = () => {
  let tomorrowDate = getDate(addDays(new Date(), 1));
  const [tomorrowMatches, setTomorrowMatches] = useState([]);
  const soccerData = useSelector((state) => state.soccerData.soccerData);

  const filterTomorrowMatches = () => {
    // Filter out tomorrow's matches
    return soccerData.filter((match) => {
      const date = getDate(parseJSON(match.date));
      return date === tomorrowDate;
    });
  };

  useEffect(() => {
    const tomorrowMatches = filterTomorrowMatches();
    setTomorrowMatches(tomorrowMatches);
    // eslint-disable-next-line
  }, []);

  return (
    <Box id="tomorrow">
      <Table soccerData={tomorrowMatches} date={tomorrowDate} />
    </Box>
  );
};

export default Tomorrow;
