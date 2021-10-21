import { configureStore } from '@reduxjs/toolkit';
import soccerDataSlice from '../reducers/soccerDataSlice';

export const store = configureStore({
  reducer: {
    soccerData: soccerDataSlice,
  },
});
