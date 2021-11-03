import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../services/httpService';
import { addDays, subDays, lightFormat } from 'date-fns';

async function fetchMatches() {
  const yesterdayDate = lightFormat(subDays(new Date(), 1), 'yyyy-MM-dd'); // Get yesterday date in the format YYYY-MM-DD
  const tomorrowDate = lightFormat(addDays(new Date(), 1), 'yyyy-MM-dd'); // Get tomorrow date in the format YYYY-MM-DD
  const response = await httpService(yesterdayDate, tomorrowDate);
  return response.data;
}
// Async Logic using middleware
const fetchSoccerData = createAsyncThunk(
  'soccerData/fetchSoccerdata',
  fetchMatches
);

export default fetchSoccerData;
