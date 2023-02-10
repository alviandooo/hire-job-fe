import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: null,
};

export const jobseekerSlice = createSlice({
  name: "jobseeker",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = jobseekerSlice.actions;
export default jobseekerSlice.reducer;
