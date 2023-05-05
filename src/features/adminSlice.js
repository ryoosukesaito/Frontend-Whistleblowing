import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appAPI";

export const adminSlice = createSlice({
  name: "admin",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => {},
    resetNotifications: (state, { payload }) => {},
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.signupAdmin.matchFulfilled,
      (state, [payload]) => payload
    );

    builder.addMatcher(
      appApi.endpoints.loginAdmin.matchFulfilled,
      (state, { payload }) => payload
    );

    builder.addMatcher(appApi.endpoints.logoutAdmin.matchFulfilled, () => null);
  },
});

export const { addNotifications, resetNotifications } = adminSlice.actions;

export default adminSlice.reducer;
