import { configureStore } from '@reduxjs/toolkit';
import soccerDataSlice from '../reducers/soccerDataSlice';
import historySlice from '../reducers/historySlice';

export const store = configureStore({
  reducer: {
    pastMatchesData: historySlice,
    soccerData: soccerDataSlice,
  },
});
