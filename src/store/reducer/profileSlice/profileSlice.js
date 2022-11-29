import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "user",
  lastName: "user",
  email: "user@gmail.com",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.email = initialState.email;
    },
    changeAccountData: (state, action) => {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
  },
});
export const { resetProfile, changeAccountData } = profileSlice.actions;
export default profileSlice.reducer;
