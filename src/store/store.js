import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/loginSlice/loginSlice";
import profileSlice from "./reducer/profileSlice/profileSlice";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const reducer = combineReducers({
  login: loginSlice,
  profile: profileSlice,
});

const persistedRedcuer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedRedcuer,
});

export { store };
