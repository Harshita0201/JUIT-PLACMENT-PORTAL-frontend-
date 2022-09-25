import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  data: {},
};

const DataSlice = createSlice({
  name: "feedbackData",
  initialState: initialDataState,
  reducers: {
    getData(state, action) {
      state.data = { ...action.payload };
    },
  },
});

export const feedbackDataActions = DataSlice.actions;

export default DataSlice.reducer;
