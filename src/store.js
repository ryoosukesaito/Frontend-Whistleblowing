import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/adminSlice";
import userSlice from "./features/userSlice";
import appApi from "./services/appAPI";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//reducers
const reducer = combineReducers({
  admin: adminSlice,
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [appApi.reducerPath, "user"],
};

//persist store
const persistedReducer = persistReducer(persistConfig, reducer);

//creating the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
