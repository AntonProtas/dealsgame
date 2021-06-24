//libs
import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_USER_BALANCE, MIN_USER_BALANCE } from '@constants';

const initialState = {
  balance: DEFAULT_USER_BALANCE
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increaseBalanceAction: (state, { payload }) => {
      state.balance = state.balance + Math.abs(payload);
    },
    decreaseBalanceAction: (state, { payload }) => {
      if (state.balance > MIN_USER_BALANCE) {
        state.balance = state.balance - Math.abs(payload);
      }
    }
  }
});

export const { increaseBalanceAction, decreaseBalanceAction } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
