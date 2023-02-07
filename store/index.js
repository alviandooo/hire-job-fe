import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
  }),
});
