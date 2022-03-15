import { createSlice } from '@reduxjs/toolkit';
import fetchHistory from '../actions/history';

const historySlice = createSlice({
  name: 'PastMatchesData',
  initialState: {
    startDate: null,
    endDate: null,
    status: 'idle',
    soccerData: [],
  },
  reducers: {
    StartDatePicked: (state, action) => {
      state.startDate = action.payload;
    },
    EndDatePicked: (state, action) => {
      state.endDate = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.soccerData = [].concat(action.payload);
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.status = 'failed';
        state.soccerData = '';
      });
  },
});

export const { StartDatePicked, EndDatePicked } = historySlice.actions;
export default historySlice.reducer;
