//libs
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increaseBalanceAction: (state, { payload }) => {
      console.log('state.balance', state.balance);
      console.log('payload', payload);

      state.balance = Number(state.balance) + Number(payload);
    },
    decreaseBalanceAction: (state, { payload }) => {
      if (state.balance >= payload) {
        state.balance = Number(state.balance) - Number(payload);
      }
    }
  }
});

export const { increaseBalanceAction, decreaseBalanceAction } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
