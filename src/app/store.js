import { configureStore } from '@reduxjs/toolkit';
import soccerDataSlice from '../features/reducers/soccerDataSlice';

export const store = configureStore({
  reducer: {
    soccerData: soccerDataSlice,
  },
});
