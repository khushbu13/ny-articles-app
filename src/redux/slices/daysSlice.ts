import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: 1,
};

const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDays: (state, action) => ({
      ...state,
      days: action.payload,
    }),
  },
});

export const { setDays } = daysSlice.actions;

const daysReducer = daysSlice.reducer;

export { daysReducer };
