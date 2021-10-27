import { configureStore } from '@reduxjs/toolkit';
import dateSlice from '../reducers/dateSlice';
import soccerDataSlice from '../reducers/soccerDataSlice';
import historySlice from '../reducers/historySlice';

export const store = configureStore({
  reducer: {
    date: dateSlice,
    pastMatchesData: historySlice,
    soccerData: soccerDataSlice,
  },
});
