import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from "../services/httpService";
import lightFormat from 'date-fns/lightFormat';

const fetchSoccerData = async (start, end) => {
  const startDate = lightFormat(start, "yyyy-MM-dd");
  const endDate = lightFormat(end, "yyyy-MM-dd");
  const response = await httpService(startDate, endDate);
  return response.data;
}

// Async Logic using middleware
const fetchDataWithRange = createAsyncThunk(
  "soccerData/FetchWithDateRange",
  fetchSoccerData
);

export default fetchDataWithRange;
