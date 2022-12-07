import { createSlice } from "@reduxjs/toolkit";
import {
  storeData,
  removeData,
  STORAGE_KEY,
} from "../../../utils/asyncstorage";
const initialState = {
  errorMessage: false,
  isSuccess: false,
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      console.log("logout");
      // removeData(STORAGE_KEY);
      state.errorMessage = initialState.errorMessage;
      state.isSuccess = initialState.isSuccess;
      state.token = initialState.token;
    },
    login: (state, action) => {
      console.log("email >>> ", action.payload.email);
      console.log("password >>> ", action.payload.password);
      if (
        action.payload.email === "user@gmail.com" &&
        action.payload.password === "user123"
      ) {
        state.isSuccess = true;
        state.errorMessage = initialState.errorMessage;
        state.token = "thisistoken";
        console.log("login berhasil");
        // storeData("thisisthetoken");
      } else {
        state.errorMessage = true;
      }
    },
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
