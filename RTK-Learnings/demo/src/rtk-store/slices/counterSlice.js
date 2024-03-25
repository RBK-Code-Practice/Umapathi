import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter", //name used for useSelector(state => state.counter)
  initialState,
  reducers: {
    //we created two actions inside our reducers
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const {increment, decrement} =  counterSlice.actions; // exporting our actions
export default counterSlice.reducer; //exporting our reducers for store usage
