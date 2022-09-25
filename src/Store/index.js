import { createSlice, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import httpReducer from "./use-Http";
import dataReducer from "./CompanyData";
import feedbackdataReducer from "./feedbackdata";
const store = configureStore({
  reducer: {
    auth: authReducer,
    http: httpReducer,
    data: dataReducer,
    feedbackdata: feedbackdataReducer,
  },
});

export default store;
