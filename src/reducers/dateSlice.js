import { createSlice } from '@reduxjs/toolkit';
import fetchWithDatePicker from '../actions/datePicker';

const dateSlice = createSlice({
  name: 'date',
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
      .addCase(fetchWithDatePicker.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWithDatePicker.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.soccerData = state.soccerData.concat(action.payload);
      })
      .addCase(fetchWithDatePicker.rejected, (state) => {
        state.status = 'failed';
        state.soccerData = '';
      });
  },
});

export const { startDatePicked, endDatePicked } = dateSlice.actions;
export default dateSlice.reducer;
