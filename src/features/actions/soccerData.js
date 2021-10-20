import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

// Async Logic using middleware
const fetchSoccerData = createAsyncThunk("soccerData/fetchSoccerdata", 
  async () => {
    const response = await httpService();
    return response.data;
  }
);

export default fetchSoccerData;
