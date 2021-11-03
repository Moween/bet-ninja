import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../services/httpService';
import { subDays, lightFormat } from 'date-fns';

async function fetchPastMatches() {
  const pastThirtyDays = lightFormat(subDays(new Date(), 30), 'yyyy-MM-dd'); // Get yesterday date in the format YYYY-MM-DD
  const aDayBeforeCurrent = lightFormat(subDays(new Date(), 1), 'yyyy-MM-dd');
  const response = await httpService(
    `${process.env.REACT_APP_BASE_URL}/tip?type=over2&from=${pastThirtyDays}&to=${aDayBeforeCurrent}`
  );
  return response.data;
}
// Async Logic using middleware
const fetchHistory = createAsyncThunk(
  'soccerData/fetchHistory',
  fetchPastMatches
);

export default fetchHistory;
