import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/loginSlice/loginSlice";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const reducer = combineReducers({
  login: loginSlice,
});

const persistedRedcuer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedRedcuer,
});

export { store };
