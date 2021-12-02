import { configureStore } from '@reduxjs/toolkit';
import soccerDataSlice from '../reducers/soccerDataSlice';
import historySlice from '../reducers/historySlice';
import mediaQuerySlice from '../reducers/mediaQuery';

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQuerySlice,
    pastMatchesData: historySlice,
    soccerData: soccerDataSlice,
  },
});
