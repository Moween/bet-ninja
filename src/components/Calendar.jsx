import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import { addDays } from 'date-fns';

const Calendar = ({ label, date, action, minDate }) => {
  
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(action(value));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={date}
        disableFuture
        clearable
        cancelLabel
        readOnly={label === 'End' && !minDate ? true : false}
        okLabel
        onChange={handleChange}
        minDate={label === 'End' ? addDays(minDate, 1) : null }
        renderInput={(params) => (
          <TextField {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
