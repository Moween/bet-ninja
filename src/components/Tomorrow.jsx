import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import parseJSON from 'date-fns/parseJSON';
import addDays from 'date-fns/addDays';
import Table from './Table';
import { getDate } from '../utils/index';

const Tomorrow = () => {
  let tomorrowDate = getDate(addDays(new Date(), 1));
  const [tomorrowMatches, setTomorrowMatches] = useState([]);
  const soccerData = useSelector(state => state.soccerData.soccerData);

  const filterTomorrowMatches = () => {
    return  soccerData.filter(match => {
      const date = getDate(parseJSON(match.date));
      return date === tomorrowDate;
    });
  }

  useEffect(() => {
    const tomorrowMatches = filterTomorrowMatches; 
    setTomorrowMatches(tomorrowMatches)
  }, []);
  return ( 
    <div>
      <Table soccerData={tomorrowMatches} date={tomorrowDate}/>
    </div>
  );
}
 
export default Tomorrow;