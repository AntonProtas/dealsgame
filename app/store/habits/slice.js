import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: []
};

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {}
});

export const habitsReducer = habitsSlice.reducer;
