import { createSlice } from '@reduxjs/toolkit';
import fetchHistory from '../actions/history';

const historySlice = createSlice({
  name: 'pastMatchesData',
  initialState: {
    startDate: null,
    endDate: null,
    status: 'idle',
    soccerData: [],
  },
  reducers: {
    startDatePicked: (state, action) => {
      state.startDate = action.payload;
    },
    endDatePicked: (state, action) => {
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

export const { startDatePicked, endDatePicked } = historySlice.actions;
export default historySlice.reducer;
