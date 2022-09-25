import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  data: {},
};

const DataSlice = createSlice({
  name: "CompanyData",
  initialState: initialDataState,
  reducers: {
    postData(state, action) {
      state.data = { ...action.payload };
    },
  },
});

export const DataActions = DataSlice.actions;

export default DataSlice.reducer;
