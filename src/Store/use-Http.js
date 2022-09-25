import { createSlice } from "@reduxjs/toolkit";

const initialHttpState = {
  isLoding: false,
  error: null,
};

const httpSlice = createSlice({
  name: "Http",
  initialState: initialHttpState,
  reducers: {
    loding(state) {
      state.isLoding = true;
    },
    notLoding(state) {
      state.isLoding = false;
    },
    noerror(state) {
      state.error = null;
    },
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const HttpAction = httpSlice.actions;
export default httpSlice.reducer;
