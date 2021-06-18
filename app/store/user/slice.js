import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 100
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increaseBalanceAction: (state, { payload }) => {
      state.balance = state.balance + Math.abs(payload);
    },
    decreaseBalanceAction: (state, { payload }) => {
      state.balance = state.balance - Math.abs(payload);
    }
  }
});

export const {
  increaseBalanceAction,
  decreaseBalanceAction
} = userSlice.actions;

export const userReducer = userSlice.reducer;
