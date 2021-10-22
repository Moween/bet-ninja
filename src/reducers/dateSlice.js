import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: new Date(),
  },
  reducers: {
    datePicked: (state, action) => {
      return state.date = action.payload;
    }
  }
});

export const { datePicked } = dateSlice.actions;
export default dateSlice.reducer;