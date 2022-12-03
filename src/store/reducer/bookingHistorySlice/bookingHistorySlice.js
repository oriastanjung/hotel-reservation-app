import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const bookingHistorySlice = createSlice({
  name: "bookingHistory",
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = initialState.data;
    },
    addToData: (state, action) => {
      console.log("isi action.payload ", action.payload);
      state.data = [...state.data, action.payload];
    },
  },
});
export const { resetData, addToData } = bookingHistorySlice.actions;
export default bookingHistorySlice.reducer;
