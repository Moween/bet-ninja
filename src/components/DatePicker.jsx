import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import lightFormat from 'date-fns/lightFormat';

import Calendar from './Calendar';
import { StartDatePicked, EndDatePicked } from '../reducers/historySlice';
import { theme } from '../utils/muiStyles';
import fetchHistory from '../actions/history';

const DatePicker = ({ closeDrawer }) => {
  const dispatch = useDispatch();
  let startDate = useSelector((state) => state.pastMatchesData.startDate);
  let endDate = useSelector((state) => state.pastMatchesData.endDate);
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  const handleClick = () => {
    startDate = lightFormat(startDate, 'yyyy-MM-dd');
    endDate = lightFormat(endDate, 'yyyy-MM-dd');
    dispatch(fetchHistory({ startDate, endDate }));
  };

  return (
    <Box
      sx={{
        marginLeft: 'auto',
        padding: '1rem 0.5rem',
        color: mobile ? '#ccc' : '#031626',
        fontWeight: '500',
      }}
    >
      {mobile || tablet ? (
        <Box sx={{ p: '0.5rem' }}>Filter Matches:</Box>
      ) : null}
      <Calendar
        label="From Date"
        date={startDate}
        action={StartDatePicked}
        smallAndTabScreen={mobile || tablet}
      />
      <Calendar
        smallAndTabScreen={mobile || tablet}
        label="To Date"
        date={endDate}
        action={EndDatePicked}
        minDate={startDate}
      />
      <Button
        id="filter_button"
        variant="contained"
        onClick={
          mobile || tablet
            ? (e) => {
                closeDrawer();
                handleClick();
              }
            : handleClick
        }
        sx={{
          display: mobile || tablet ? 'block' : 'inline',
          height: 'auto',
          textTransform: 'capitalize',
          backgroundColor: '#0099FA',
          color: '#031626',
          marginLeft: '0.5rem',
          marginTop: mobile || tablet ? '0.5rem' : 0,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#ccc',
          },
        }}
        disabled={startDate && endDate ? false : true}
      >
        Filter
      </Button>
    </Box>
  );
};

export default DatePicker;
