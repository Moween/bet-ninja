import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../services/httpService';
import lightFormat from 'date-fns/lightFormat';

const fetchSoccerData = async (dates) => {
  let { startDate, endDate } = dates;
  startDate = lightFormat(startDate, 'yyyy-MM-dd');
  endDate = lightFormat(endDate, 'yyyy-MM-dd');
  const response = await httpService(startDate, endDate);
  return response.data;
};

// Async Logic using middleware
const fetchWithDatePicker = createAsyncThunk(
  'soccerData/fetchWithDatePicker',
  (dates) => fetchSoccerData(dates)
);

export default fetchWithDatePicker;
