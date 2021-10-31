import { createSlice } from "@reduxjs/toolkit";
import fetchHistory from "../actions/history";

const historySlice = createSlice({
  name: 'historySoccerData',
  initialState: {
    status: 'idle',
    soccerData: [],
  },
  reducers: {
    fetchDataStored: (state, action) => {
      state.status = 'succeeded';
      state.soccerData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Adds any fetched data to the array using immer lib
        state.soccerData = state.soccerData.concat(action.payload);
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.status = 'failed';
        state.soccerData = '';
      });
  },
});

export const { fetchDataStored } = historySlice.actions;
export default historySlice.reducer;
