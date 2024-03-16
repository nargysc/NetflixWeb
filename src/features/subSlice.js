import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sub: null,
};

export const subSlice = createSlice({
  name: "sub",
  initialState,
  reducers: {
    updateSub: (state, action) => {
      state.sub = action.payload;
    },
  },
});

export const { updateSub } = subSlice.actions;

export const selectSub = (state) => state.sub.sub;

export default subSlice.reducer;
