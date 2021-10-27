import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import parseJSON from 'date-fns/parseJSON';
import Box from "@material-ui/core/Box";
import Table from './Table';
import DatePicker from './DatePicker';
import { getDate } from '../utils/index';

const Today = () => {
  let todayDate = getDate(new Date());
  const [todayMatches, setTodayMatches] = useState([]);
  const soccerData = useSelector(state => state.soccerData.soccerData);

  const filterTodayMatches = () => {
    return  soccerData.filter(match => {
      const date = getDate(parseJSON(match.date));
      return date === todayDate;
    });
  }

  useEffect(() => {
    const todayMatches = filterTodayMatches; 
    setTodayMatches(todayMatches)
  }, []);

  return ( 
    <Box sx={{ overflowX: 'auto'}}>
      <DatePicker />
      <Table soccerData={todayMatches} date={todayDate} />
    </Box>
  );
}
 
export default Today;