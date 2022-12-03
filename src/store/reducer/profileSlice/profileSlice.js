import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "user",
  lastName: "user",
  phoneNumber: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.phoneNumber = initialState.phoneNumber;
    },
    changeAccountData: (state, action) => {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});
export const { resetProfile, changeAccountData } = profileSlice.actions;
export default profileSlice.reducer;
