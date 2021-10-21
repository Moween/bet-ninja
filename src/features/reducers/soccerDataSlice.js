import { createSlice } from '@reduxjs/toolkit';
import fetchSoccerData from '../actions/soccerData';

const soccerDataSlice = createSlice({
  name: 'soccerData',
  initialState: {
    soccerData: [],
    status: 'idle',
  },

  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchSoccerData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchSoccerData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // Adds any fetched data to the array
      state.soccerData = state.soccerData.concat(action.payload);
    })
    .addCase(fetchSoccerData.failed, (state, action) => {
      state.status = 'failed';
      state.soccerData = '';
    })
  }
});

export default soccerDataSlice.reducer

