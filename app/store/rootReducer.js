//libs
import { combineReducers } from '@reduxjs/toolkit';

//slice
import { habitsReducer } from './habits/slice';

export const rootReducer = combineReducers({
  habits: habitsReducer
});
