import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import lightFormat from 'date-fns/lightFormat';

import Calendar from './Calendar';
import { startDatePicked, endDatePicked } from '../reducers/historySlice';
import fetchHistory from '../actions/history';

const DatePicker = () => {
  let startDate = useSelector((state) => state.pastMatchesData.startDate);
  let endDate = useSelector((state) => state.pastMatchesData.endDate);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    startDate = lightFormat(startDate, 'yyyy-MM-dd');
    endDate = lightFormat(endDate, 'yyyy-MM-dd');
    dispatch(fetchHistory({ startDate, endDate }));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', padding: '1rem 0' }}>
      <Calendar label="From Date" date={startDate} action={startDatePicked} />
      <Calendar
        label="To Date"
        date={endDate}
        action={endDatePicked}
        minDate={startDate}
      />
      <Button
        id="filter_button"
        variant="contained"
        onClick={handleClick}
        sx={{
          height: 'auto',
          textTransform: 'capitalize',
          backgroundColor: '#0099FA',
          color: '#031626',
          marginLeft: '0.5rem',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#fff'
          }
        }}
        disabled={startDate && endDate ? false : true}
      >
        Filter
      </Button>
    </Box>
  );
};

export default DatePicker;
