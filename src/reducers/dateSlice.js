import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: new Date(),
  },
  reducers: {
    datePicked: (state, action) => {
      state.date = action.payload;
    }
  }
});

export const { datePicked } = dateSlice.actions;
export default dateSlice.reducer;