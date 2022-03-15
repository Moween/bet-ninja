import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../services/httpService';

async function fetchPastMatches({ startDate, endDate }) {  
  const response = await httpService(startDate, endDate);
  return response.data;
}
// Async Logic using middleware
const fetchHistory = createAsyncThunk(
  'SoccerData/FetchHistory',
  (dates) => fetchPastMatches(dates)
);

export default fetchHistory;
