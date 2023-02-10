import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "@/store/auth/authSlice";
import jobseekerReducer from "@/store/jobseeker/jobseekerSlice";

// import redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  auth: authReducer,
  jobseeker: jobseekerReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "jobseeker"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
