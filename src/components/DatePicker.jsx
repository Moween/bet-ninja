import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Calendar from './Calendar';
import { startDatePicked, endDatePicked } from '../reducers/dateSlice';
import fetchWithDatePicker from '../actions/datePicker';

const DatePicker = () => {
  const startDate = useSelector((state) => state.date.startDate);
  const endDate = useSelector((state) => state.date.endDate);
  const soccerDataStatus = useSelector((state) => state.date.status);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (soccerDataStatus === 'idle') {
      dispatch(fetchWithDatePicker({ endDate, startDate }));
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
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
        }}
        disabled={startDate && endDate ? false : true}
      >
        Filter
      </Button>
    </Box>
  );
};

export default DatePicker;
