import { createSlice } from "@reduxjs/toolkit";

// menggunakan function createSlice dari Redux toolkit yang berfungsi untuk membuat function reducer
export const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// export setiap fungsi
export const { increment, decrement, reset } = counter.actions;

export default counter.reducer;
