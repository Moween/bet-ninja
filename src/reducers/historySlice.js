import { createSlice } from "@reduxjs/toolkit";
import fetchHistory from "../actions/history";

const historySlice =  createSlice({
  name: 'historySoccerData',
  initialState: {
    status: 'idle',
    soccerData: '',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Adds any fetched data to the array
        state.soccerData = state.soccerData.concat(action.payload);
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default historySlice.reducer;