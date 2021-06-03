import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: []
};

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addNewHabitAction: (state, { payload }) => {
      state.results = [...state.results, payload];
    },
    deleteHabitAction: (state, { payload }) => {
      state.results = state.results.filter((habit) => habit.id !== payload);
    },
    editHabitAction: (state, { payload }) => {
      const { id, ...fields } = payload;

      const habitIndex = state.results.findIndex((habit) => habit.id === id);

      state.results[habitIndex] = {
        ...state.results[habitIndex],
        ...fields
      };
    }
  }
});

export const {
  addNewHabitAction,
  deleteHabitAction,
  editHabitAction
} = habitsSlice.actions;

export const habitsReducer = habitsSlice.reducer;
