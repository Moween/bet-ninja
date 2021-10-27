import { createSlice } from "@reduxjs/toolkit";

const historySlice =  createSlice({
  name: 'historySoccerData',
  initialState: {
    status: 'idle',
    soccerData: [],
  },
  reducers: {},
})

export default historySlice.reducer;