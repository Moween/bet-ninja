import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import { datePicked } from '../reducers/dateSlice';

const Calendar = () => {
  const date = useSelector((state) => state.date.date);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(datePicked(value));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={date}
        sx={{}}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
