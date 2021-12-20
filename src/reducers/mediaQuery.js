import { createSlice } from '@reduxjs/toolkit';

const mediaQuerySlice = createSlice({
  name: 'MediaQuery',
  initialState: {
    mobile: false,
    tablet: false,
  },

  reducers: {
    SetSmallScreen: (state, action) => {
      state.mobile = action.payload;
    },
    SetMediumScreen: (state, action) => {
      state.tablet = action.payload;
    }
  }
});

export const { SetSmallScreen, SetMediumScreen } = mediaQuerySlice.actions;
export default mediaQuerySlice.reducer;