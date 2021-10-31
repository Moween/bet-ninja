import { createSlice } from '@reduxjs/toolkit';
import fetch from '../actions/datePicker';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    startDate: new Date(),
    endDate: new Date(),
    status: 'idle',
    soccerData: [],
  },
  reducers: {
    startDatePicked: (state, action) => {
      state.startDate = action.payload;
    },
    endDatePicked: (state, action) => {
      state.endDate = action.payload;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetch.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetch.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.soccerData = state.soccerData.concat(action.payload);
    })
    .addCase(fetch.rejected, (state) => {
      state.status = 'failed';
      state.soccerData = '';
    })

  }
});

export const { startDatePicked, endDatePicked } = dateSlice.actions;
export default dateSlice.reducer;