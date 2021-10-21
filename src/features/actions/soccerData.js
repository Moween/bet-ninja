import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpService';
import { apiUrl } from '../../api/config.json'

// Async Logic using middleware
const fetchSoccerData = createAsyncThunk('soccerData/fetchSoccerdata', 
  async () => {
    const response = await httpService(apiUrl);
    return response.data;
  }
);

export default fetchSoccerData;
