import { createSlice } from '@reduxjs/toolkit';

const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState: {
    mobile: false,
    tablet: false,
  },

  reducers: {
    setSmallScreen: (state, action) => {
      state.mobile = action.payload;
    },
    setMediumScreen: (state, action) => {
      state.tablet = action.payload;
    }
  }
});

export const { setSmallScreen, setMediumScreen } = mediaQuerySlice.actions;
export default mediaQuerySlice.reducer;