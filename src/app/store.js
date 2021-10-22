import { configureStore } from '@reduxjs/toolkit';
import dateSlice from '../reducers/dateSlice';
import soccerDataSlice from '../reducers/soccerDataSlice';

export const store = configureStore({
  reducer: {
    soccerData: soccerDataSlice,
    date: dateSlice
  },
});
