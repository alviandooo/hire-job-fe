import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  isRecruiter: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setIsRecruiter: (state, action) => {
      state.isRecruiter = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setAuth, setToken, setIsRecruiter } = authSlice.actions;
export default authSlice.reducer;
