import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import parseJSON from 'date-fns/parseJSON';
import subDays from 'date-fns/subDays';
import Table from './Table';
import { getDate } from '../utils/index';

const Yesterday = () => {
  let yesterdayDate = getDate(subDays(new Date(), 1));
  const [yesterdayMatches, setYesterdayMatches] = useState([]);
  const soccerData = useSelector((state) => state.soccerData.soccerData);

  const filterYesterdayMatches = () => {
    // Filter out yesterday matches
    return soccerData.filter((match) => {
      const date = getDate(parseJSON(match.date));
      return date === yesterdayDate;
    });
  };

  useEffect(() => {
    const yesterdayMatches = filterYesterdayMatches;
    setYesterdayMatches(yesterdayMatches);
    // eslint-disable-next-line
  }, []);
  return (
    <div id="yesterday">
      <Table soccerData={yesterdayMatches} date={yesterdayDate} />
    </div>
  );
};

export default Yesterday;
