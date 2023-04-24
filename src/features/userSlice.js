import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appAPI";

export const userSlice = createSlice({
  name: "user",
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
      appApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => payload
    );
    builder.addMatcher(appApi.endpoints.logoutAdmin.matchFulfilled, () => null);
  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;

export default userSlice.reducer;
